import {api} from '../helper/index.js'

export function calendars (store) {
  store.on('@init', () => ({ calendars: [] }));

  store.on('calendars/set', (storedValue, calendars) => {
    return { calendars };
  });

  store.on('apiInit', async () => {
    store.dispatch(
      'calendars/set',
      await api.get(store, `appointment_calendars?store=${store.get().store['@id']}`)
    );
  });
}
