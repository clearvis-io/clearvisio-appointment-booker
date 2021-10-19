import {api} from '../helper/index.js'

const roleHierarchy = [
  {name: 'ROLE_OPHTHALMOLOGIST', includes: ['ROLE_CONTACTOLOGIST', 'ROLE_OPTOMETRIST']},
  {name: 'ROLE_CONTACTOLOGIST', includes: ['ROLE_OPTOMETRIST']},
  {name: 'ROLE_OPTOMETRIST', includes: []}
];

export function calendars (store) {
  var filter = function(calendar) {
    var process = store.get().appointment.eye_examination_process;

    if (!process) {
      return true;
    }

    for (let i = 0; i < roleHierarchy.length; i++) {
      let role = roleHierarchy[i];
      if (!calendar.user || calendar.user.roles.indexOf(role.name) == -1) {
        continue;
      }

      if (process.highestRequiredRole == role.name ||
        role.includes.indexOf(process.highestRequiredRole) != -1) {
        return true;
      }
    }

    return false;
  }

  store.on('@init', () => ({ calendars: [], allCalendars: [] }))

  store.on('calendars/add', ({ allCalendars }, newCalendars) => {
    allCalendars = allCalendars.concat(newCalendars);
    return { allCalendars, calendars: allCalendars.filter(filter) };
  })

  store.on('apiInit', async () => {
    store.dispatch(
      'calendars/add',
      await api.get(store, `appointment_calendars?store=${store.get().store['@id']}`)
    );
  });

  store.on('appointment/set', ({ allCalendars }) => {
    return { allCalendars, calendars: allCalendars.filter(filter) };
  })
}
