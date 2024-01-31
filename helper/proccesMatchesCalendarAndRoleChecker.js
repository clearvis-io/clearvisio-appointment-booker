const roleHierarchy = [
  {name: 'ROLE_OPHTHALMOLOGIST', includes: ['ROLE_CONTACTOLOGIST', 'ROLE_OPTOMETRIST']},
  {name: 'ROLE_CONTACTOLOGIST', includes: ['ROLE_OPTOMETRIST']},
  {name: 'ROLE_OPTOMETRIST', includes: []}
];

export default function (process, calendar, calendarRoleCheckMode) {

  const proccesMatchesCalendarProcessExpectations = function(calendar, process) {
    if (!calendar.only_specific_processes_allowed) {
      return true;
    }

    const splitIri = process['@id'].split('/');
    const id = parseInt(splitIri[splitIri.length - 1]);

    return calendar.allowed_process_ids.indexOf(id) != -1;
  }

  if (typeof calendar.online_reservation_allowed != 'undefined' && calendar.online_reservation_allowed == false) {
    return false;
  }

  if (!proccesMatchesCalendarProcessExpectations(calendar, process)) {
    return false;
  }

  for (let i = 0; i < roleHierarchy.length; i++) {
    let role = roleHierarchy[i];
    if (!calendar.user || calendar.user.roles.indexOf(role.name) == -1) {
      continue;
    }

    if (process.highestRequiredRole == role.name) {
      return true;
    }

    if (calendarRoleCheckMode == 'hierachical' && role.includes.indexOf(process.highestRequiredRole) != -1) {
      return true;
    }
  }

  return false;
}
