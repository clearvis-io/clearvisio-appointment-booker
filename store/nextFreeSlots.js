import {api, createNextFreeSlotsForDateKey} from '../helper/index.js'

const nextFreeSlotsAreLoadedFor = (storeValue, date) => {
  const {appointment, nextFreeSlots} = storeValue;
  const nextFreeSlotsForDate = nextFreeSlots[createNextFreeSlotsForDateKey(appointment, date)];

  return nextFreeSlotsForDate && nextFreeSlotsForDate.status != 'incomplete'
}

const requestNextFreeSlots = async (store, date) => {
  const {appointment} = store.get();
  if (!appointment.eye_examination_process || dateIsTooFarFromSelectedDate(store, date) ||
    nextFreeSlotsAreLoadedFor(store.get(), date)) {
    return;
  }

  const nextFreeSlots = await api.get(
    store,
    `appointment_next_free_slots?${createNextFreeSlotRequest(store, date)}`
  );

  if (nextFreeSlots.length == 0) {
    var weekLater = new Date(date);
    weekLater.setDate(date.getDate() + 7);
    store.dispatch('nextFreeSlots/add', createEmptyNextFreeSlotsForDates(store, date, weekLater))
    return requestNextFreeSlots(store, weekLater);
  }

  const lastDate = new Date(nextFreeSlots[nextFreeSlots.length - 1].start);
  var nextFreeSlotsForDates = createEmptyNextFreeSlotsForDates(store, date, lastDate);

  var previousKey = null;
  for (let i = 0; i < nextFreeSlots.length; i++) {
    let nextFreeSlot = nextFreeSlots[i];
    let key = createNextFreeSlotsForDateKey(appointment, new Date(nextFreeSlot.start));

    if (nextFreeSlotsForDates[key].length &&
      nextFreeSlotsForDates[key][nextFreeSlotsForDates[key].length - 1].start == nextFreeSlot.start) {
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
  return requestNextFreeSlots(store, lastDate);
}

const dateIsTooFarFromSelectedDate = (store, date) => {
  return (date - store.get().selectedDate) / 1000 / 60 / 60 / 24 > 60;
}

const createNextFreeSlotRequest = (store, date) => {
  const {appointment} = store.get();
  var request = {
    process: appointment.eye_examination_process['@id'],
    start: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
  };
  if (appointment.calendar) {
    request.calendar = appointment.calendar['@id'];
  } else {
    request.store = store.get().store['@id'];
  }

  return Object.keys(request).map((key) => `${key}=${request[key]}`).join('&');
}

const createEmptyNextFreeSlotsForDates = (store, start, end) => {
  const {appointment} = store.get();
  var date = new Date(start);
  date.setHours(0);
  date.setMinutes(0);

  var result = {};

  while (date <= end) {
    result[createNextFreeSlotsForDateKey(appointment, date)] = {status: 'empty'};
    date.setDate(date.getDate() + 1);
  }

  return result;
}

export function nextFreeSlots (store) {
  store.on('@init', () => ({ nextFreeSlots: {} }));

  store.on('selectedDate/set', async (storedValue) => {
    requestNextFreeSlots(store, storedValue.selectedDate);
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
