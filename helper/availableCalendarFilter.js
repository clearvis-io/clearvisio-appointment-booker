const roleHierarchy = [
  {name: 'ROLE_OPHTHALMOLOGIST', includes: ['ROLE_CONTACTOLOGIST', 'ROLE_OPTOMETRIST']},
  {name: 'ROLE_CONTACTOLOGIST', includes: ['ROLE_OPTOMETRIST']},
  {name: 'ROLE_OPTOMETRIST', includes: []}
];

export default function ({appointment, calendars}) {
  var process = appointment.eye_examination_process;

  return calendars.filter(function(calendar) {
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
  })
}
