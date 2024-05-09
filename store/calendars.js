import {api} from '../helper/index.js'

export function calendars (store) {
  store.on('@init', () => ({ calendars: [], calendarRoleCheckMode: 'hierachical' }));

  store.on('calendars/set', (storedValue, calendars) => {
    return { calendars: calendars.filter(({user}) => user) };
  });

  store.on('calendarRoleCheckMode/set', (currentValue, calendarRoleCheckMode) => {
    return { calendarRoleCheckMode };
  })

  store.on('store/set', async (previousValue, storeEntity) => {
    var calendars = await api.get(store,
      `appointment_calendars?groups[]=userProfilePictureRead&store=${storeEntity['@id']}`
    );
    store.dispatch('calendars/set', calendars);
  });
}
