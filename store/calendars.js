import {api} from '../helper/index.js'

export function calendars (store) {
  store.on('@init', () => ({ calendars: [] }));

  store.on('calendars/set', (storedValue, calendars) => {
    return { calendars: calendars.filter(({user}) => user) };
  });

  store.on('apiInit', async () => {
    store.dispatch(
      'calendars/set',
      await api.get(
        store,
        `appointment_calendars?groups[]=userProfilePictureRead&tore=${store.get().store['@id']}`
      )
    );
  });
}
