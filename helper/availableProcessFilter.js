import proccesMatchesCalendarAndRoleChecker from './proccesMatchesCalendarAndRoleChecker.js'

export default function (processes, calendars, calendarRoleCheckMode) {

  return processes.filter(function(process) {
    if (!process.highestRequiredRole) {
      return true;
    }

    for (let j = 0; j < (calendars || []).length; j++) {
      if (proccesMatchesCalendarAndRoleChecker(process, calendars[j], calendarRoleCheckMode)) {
        return true;
      }
    }

    return false;
  });
}
