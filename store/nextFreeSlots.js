import {api, createNextFreeSlotsForDateKey, dateTimesMatch} from '../helper/index.js'

const calendarRangeLoaded = (storeValue, date) => {
  const {appointment, selectedCalendar, nextFreeSlots, selectedDate, calendarRange} = storeValue;
  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();

  const lastRequiredDayOfMonth = calendarRange == 'fiveDays' ?
    selectedDate.getDate() + 7 :
    new Date(year, month + 1, 0).getDate();

  for (let i = selectedDate.getDate(); i <= lastRequiredDayOfMonth; i++) {
    const freeSlot = nextFreeSlots[createNextFreeSlotsForDateKey(appointment, selectedCalendar, new Date(year, month, i))]
    if (freeSlot == undefined || freeSlot.status == 'incomplete') {
      return false;
    }
  }

  return true;
}

const requestMoreForThisMonthIfNecesarry = async (store, nextFreeSlotsForDates) => {
  const {selectedDate, calendarRange} = store.get();

  if (calendarRange == 'fiveDays') {
    return;
  }

  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();

  const lastKey = Object.keys(nextFreeSlotsForDates).sort().pop();
  const lastObj = nextFreeSlotsForDates[lastKey];

  const regex = /(?<=^(?:[^-]*-){2})(.*)/;
  const lastDateParts = lastKey.match(regex)[1].split('-');

  var lastDate = new Date(lastDateParts[0], parseInt(lastDateParts[1]) - 1, parseInt(lastDateParts[2]));

  if (lastObj.status !== 'incomplete') {
    lastDate = new Date(lastDateParts[0], parseInt(lastDateParts[1]) - 1, parseInt(lastDateParts[2]) + 1)
  }

  if (lastDate <= new Date(year, month + 1, 0)) {
    requestNextFreeSlots(store, lastDate);
  }
}

const requestNextFreeSlots = async (store, date) => {
  const {appointment, selectedCalendar, firstEligibleTime, calendarRange} = store.get();

  store.dispatch('nextFreeSlotLoading/set', true);

  if (!appointment.eye_examination_process || dateIsTooFarFromSelectedDate(store, date) ||
    calendarRangeLoaded(store.get(), date)) {
      store.dispatch('nextFreeSlotLoading/set', false);
      return;
  }

  const nextFreeSlots = await api.get(
    store,
    `appointment_next_free_slots?${createNextFreeSlotRequest(store, date)}`
  );

  if (nextFreeSlots.length == 0) {
    const endOfWeek = new Date(date);
    endOfWeek.setDate(date.getDate() + 6);
    store.dispatch('nextFreeSlots/add', creatNextFreeSlotsForDates(store, date, endOfWeek))
    return requestNextFreeSlots(store, endOfWeek);
  }

  const lastDate = new Date(nextFreeSlots[nextFreeSlots.length - 1].start);
  const nextFreeSlotsForDates = creatNextFreeSlotsForDates(store, date, lastDate);

  var previousKey = null;
  for (let i = 0; i < nextFreeSlots.length; i++) {
    const nextFreeSlot = nextFreeSlots[i];
    const start = new Date(nextFreeSlot.start);
    const key = createNextFreeSlotsForDateKey(appointment, selectedCalendar, start);

    if (start < firstEligibleTime) {
      continue;
    }

    for (let j = 0; j < (nextFreeSlotsForDates[key].slots || []).length; j++) {
      if (nextFreeSlotsForDates[key].slots[j]['@id'] == nextFreeSlot['@id']) {
        nextFreeSlotsForDates[key].status = 'complete';
        continue;
      }
    }

    if (
      nextFreeSlotsForDates[key].slots &&
      nextFreeSlotsForDates[key].slots[nextFreeSlotsForDates[key].slots.length - 1].start == nextFreeSlot.start
    ) {
      continue;
    }

    if (nextFreeSlotsForDates[key].status == 'empty') {
      nextFreeSlotsForDates[key].status = 'incomplete';
    }
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

  requestMoreForThisMonthIfNecesarry(store, nextFreeSlotsForDates);
}

const dateIsTooFarFromSelectedDate = (store, date) => {
  return (date - store.get().selectedDate) / 1000 / 60 / 60 / 24 > 90;
}

const createNextFreeSlotRequest = (store, date) => {
  const {appointment, selectedCalendar} = store.get();
  const request = {
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

const creatNextFreeSlotsForDates = (store, start, end) => {
  const {appointment, selectedCalendar, nextFreeSlots: previouslyStoredNextFreeStlots} = store.get();
  const date = new Date(start);
  date.setHours(0);
  date.setMinutes(0);

  const result = {};

  while (date <= end) {
    const key = createNextFreeSlotsForDateKey(appointment, selectedCalendar, date);
    result[key] = previouslyStoredNextFreeStlots[key] || {status: 'empty'};
    date.setDate(date.getDate() + 1);
  }

  return result;
}

export function nextFreeSlots (store) {
  store.on('@init', () => {
    const date = new Date;
    date.setDate(date.getDate() + 1);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);

    return { nextFreeSlots: {}, firstEligibleDate: date, firstEligibleTime: date, autoselectNextFreeSlot: false, nextFreeSlotLoading: false };
  });

  store.on('firstEligibleTime/set', (storedValue, firstEligibleTimeConstant) => {
    const firstEligibleDate = new Date;
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
      const firstEligibleTime = new Date(firstEligibleDate);
      firstEligibleTime.setHours(12);

      return {firstEligibleDate, firstEligibleTime};
    }
    if (firstEligibleTimeConstant == 'plus24Hours') {
      const firstEligibleTime = new Date();
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

  store.on('autoselectNextFreeSlot/set', (currentValue, autoselectNextFreeSlot) => {
    return { autoselectNextFreeSlot };
  });

  store.on('nextFreeSlots/add', ({ nextFreeSlots, autoselectNextFreeSlot }, newNextFreeSlots) => {
    const result = { nextFreeSlots: Object.assign(nextFreeSlots, newNextFreeSlots) };
    if (!autoselectNextFreeSlot) {
      return result;
    }

    for (let key in nextFreeSlots) {
      if (nextFreeSlots[key].status != 'empty' && nextFreeSlots[key].slots.length > 0) {
        store.dispatch('appointment/selectSlot', nextFreeSlots[key].slots[0]);
        result.autoselectNextFreeSlot = false;
        break;
      }
    }

    return result;
  });

  store.on('nextFreeSlotLoading/set', (currentValue, nextFreeSlotLoading) => {
    return { nextFreeSlotLoading };
  });
}
