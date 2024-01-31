import proccesMatchesCalendarAndRoleChecker from './proccesMatchesCalendarAndRoleChecker.js'

export default function ({appointment, calendars, calendarRoleCheckMode}) {
  var process = appointment ? appointment.eye_examination_process : null;

  return calendars.filter(function(calendar) {
    if (!process || !process.highestRequiredRole) {
      return true;
    }

    if (proccesMatchesCalendarAndRoleChecker(process, calendar, calendarRoleCheckMode)) {
      return true;
    }

    return false;
  })
}
