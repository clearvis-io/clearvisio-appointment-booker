import {api} from '../helper/index.js'

export function calendars (store) {
  store.on('@init', () => ({ calendars: [] }));

  store.on('calendars/set', (storedValue, calendars) => {
    return { calendars: calendars.filter(({user}) => user) };
  });
}
