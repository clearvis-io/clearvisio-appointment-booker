const roleHierarchy = [
  {name: 'ROLE_OPHTHALMOLOGIST', includes: ['ROLE_CONTACTOLOGIST', 'ROLE_OPTOMETRIST']},
  {name: 'ROLE_CONTACTOLOGIST', includes: ['ROLE_OPTOMETRIST']},
  {name: 'ROLE_OPTOMETRIST', includes: []}
];

export default function (processes, calendars, calendarRoleCheckMode) {

  const proccesMatchesCalendarProcessExpectations = function(calendar, process) {
    if (!calendar.only_specific_processes_allowed) {
      return true;
    }

    const splitIri = process['@id'].split('/');
    const id = parseInt(splitIri[splitIri.length - 1]);

    return calendar.allowed_process_ids.indexOf(id) != -1;
  }

  return processes.filter(function(process) {
    if (!process.highestRequiredRole) {
      return true;
    }

    for (let j = 0; j < calendars.length; j++) {
      if (typeof calendars[j].online_reservation_allowed != 'undefined' && calendars[j].online_reservation_allowed == false) {
        continue;
      }

      if (!proccesMatchesCalendarProcessExpectations(calendars[j], process)) {
        continue;
      }

      for (let i = 0; i < roleHierarchy.length; i++) {
        let role = roleHierarchy[i];
        if (!calendars[j].user || calendars[j].user.roles.indexOf(role.name) == -1) {
          continue;
        }

        if (process.highestRequiredRole == role.name) {
          return true;
        }

        if (calendarRoleCheckMode == 'hierachical' && role.includes.indexOf(process.highestRequiredRole) != -1) {
          return true;
        }
      }
    }

    return false;
  });
}
