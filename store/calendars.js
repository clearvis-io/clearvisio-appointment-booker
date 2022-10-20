import {api} from '../helper/index.js'

export function calendars (store) {
  store.on('@init', () => ({ calendars: [], calendarRoleCheckMode: 'hierachical' }));

  store.on('calendars/set', (storedValue, calendars) => {
    return { calendars: calendars.filter(({user}) => user) };
  });

  store.on('calendarRoleCheckMode/set', (currentValue, calendarRoleCheckMode) => {
    return { calendarRoleCheckMode };
  })
}
