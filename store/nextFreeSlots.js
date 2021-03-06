import {api, createNextFreeSlotsForDateKey, dateTimesMatch} from '../helper/index.js'

const nextFreeSlotsAreLoadedFor = (storeValue, date) => {
  const {appointment, selectedCalendar, nextFreeSlots} = storeValue;
  const nextFreeSlotsForDate = nextFreeSlots[createNextFreeSlotsForDateKey(appointment, selectedCalendar, date)];

  return nextFreeSlotsForDate && nextFreeSlotsForDate.status != 'incomplete'
}

const requestNextFreeSlots = async (store, date) => {
  const {appointment, selectedCalendar, firstEligibleTime} = store.get();
  if (!appointment.eye_examination_process || dateIsTooFarFromSelectedDate(store, date) ||
    nextFreeSlotsAreLoadedFor(store.get(), date)) {
    return;
  }

  const nextFreeSlots = await api.get(
    store,
    `appointment_next_free_slots?${createNextFreeSlotRequest(store, date)}`
  );

  if (nextFreeSlots.length == 0) {
    var endOfWeek = new Date(date);
    endOfWeek.setDate(date.getDate() + 6);
    store.dispatch('nextFreeSlots/add', createEmptyNextFreeSlotsForDates(store, date, endOfWeek))
    return requestNextFreeSlots(store, endOfWeek);
  }

  const lastDate = new Date(nextFreeSlots[nextFreeSlots.length - 1].start);
  var nextFreeSlotsForDates = createEmptyNextFreeSlotsForDates(store, date, lastDate);

  var previousKey = null;
  for (let i = 0; i < nextFreeSlots.length; i++) {
    let nextFreeSlot = nextFreeSlots[i];
    let start = new Date(nextFreeSlot.start);
    let key = createNextFreeSlotsForDateKey(appointment, selectedCalendar, start);

    if ((
          nextFreeSlotsForDates[key].length &&
          nextFreeSlotsForDates[key][nextFreeSlotsForDates[key].length - 1].start == nextFreeSlot.start
        ) || start < firstEligibleTime) {
      continue;
    }

    nextFreeSlotsForDates[key].status = 'incomplete';
    if (!nextFreeSlotsForDates[key].slots) {
      nextFreeSlotsForDates[key].slots = [];
    }
    nextFreeSlotsForDates[key].slots.push(nextFreeSlot);
    if (previousKey && previousKey != key) {
      nextFreeSlotsForDates[previousKey].status = 'complete';
    }
    if (previousKey != key) {
      previousKey = key;
    }
  }

  store.dispatch('nextFreeSlots/add', nextFreeSlotsForDates);

  if (dateTimesMatch(lastDate, date)) {
    lastDate.setDate(date.getDate() + 7);
  }

  return requestNextFreeSlots(store, lastDate);
}

const dateIsTooFarFromSelectedDate = (store, date) => {
  return (date - store.get().selectedDate) / 1000 / 60 / 60 / 24 > 21;
}

const createNextFreeSlotRequest = (store, date) => {
  const {appointment, selectedCalendar} = store.get();
  var request = {
    process: appointment.eye_examination_process['@id'],
    start: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
  };
  if (selectedCalendar) {
    request.calendar = selectedCalendar['@id'];
  } else {
    request.store = store.get().store['@id'];
  }

  return Object.keys(request).map((key) => `${key}=${request[key]}`).join('&');
}

const createEmptyNextFreeSlotsForDates = (store, start, end) => {
  const {appointment, selectedCalendar} = store.get();
  var date = new Date(start);
  date.setHours(0);
  date.setMinutes(0);

  var result = {};

  while (date <= end) {
    result[createNextFreeSlotsForDateKey(appointment, selectedCalendar, date)] = {status: 'empty'};
    date.setDate(date.getDate() + 1);
  }

  return result;
}

export function nextFreeSlots (store) {
  store.on('@init', () => {
    var date = new Date;
    date.setDate(date.getDate() + 1);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);

    return { nextFreeSlots: {}, firstEligibleDate: date, firstEligibleTime: date };
  });

  store.on('firstEligibleTime/set', (storedValue, firstEligibleTimeConstant) => {
    var firstEligibleDate = new Date;
    if (firstEligibleTimeConstant == 'now') {
      store.dispatch('selectedDate/set', firstEligibleDate);
      return {firstEligibleDate, firstEligibleTime: firstEligibleDate};
    }
    firstEligibleDate.setDate(firstEligibleDate.getDate() + 1);
    firstEligibleDate.setHours(0);
    firstEligibleDate.setMinutes(0);
    firstEligibleDate.setSeconds(0);

    if (firstEligibleTimeConstant == 'tomorrow') {
      return {firstEligibleDate, firstEligibleTime: firstEligibleDate};
    }
    if (firstEligibleTimeConstant == 'tomorrowNoon') {
      var firstEligibleTime = new Date(firstEligibleDate);
      firstEligibleTime.setHours(12);

      return {firstEligibleDate, firstEligibleTime};
    }
    if (firstEligibleTimeConstant == 'plus24Hours') {
      var firstEligibleTime = new Date();
      firstEligibleTime.setDate(firstEligibleTime.getDate() + 1);

      return {firstEligibleDate, firstEligibleTime};
    }
    if (firstEligibleTimeConstant == 'dayAfterTomorrow') {
      firstEligibleDate.setDate(firstEligibleDate.getDate() + 1);
      store.dispatch('selectedDate/set', firstEligibleDate);

      return {firstEligibleDate, firstEligibleTime: firstEligibleDate};
    }
  });

  store.on('selectedDate/set', async (storedValue) => {
    requestNextFreeSlots(store, storedValue.selectedDate);
  });

  store.on('bookerInit', async (storedValue) => {
    if (storedValue.currentStep == 'appointment') {
      requestNextFreeSlots(store, storedValue.selectedDate);
    }
  });
  store.on('currentStep/next', async (storedValue) => {
    if (storedValue.currentStep == 'appointment') {
      requestNextFreeSlots(store, storedValue.selectedDate);
    }
  });

  store.on('appointment/set', async (storedValue) => {
    if (storedValue.currentStep == 'appointment') {
      requestNextFreeSlots(store, storedValue.selectedDate);
    }
  });

  store.on('nextFreeSlots/add', ({ nextFreeSlots }, newNextFreeSlots) => {
    return { nextFreeSlots: Object.assign(nextFreeSlots, newNextFreeSlots) };
  })
}
