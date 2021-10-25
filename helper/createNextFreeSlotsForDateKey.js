export default function (appointment, selectedCalendar, date) {
  if (!appointment) {
    return;
  }

  return !appointment.eye_examination_process ?
    null :
    appointment.eye_examination_process['@id'] + '-' +
      (selectedCalendar ? selectedCalendar['@id'] : 'NO_CALENDAR') + '-' +
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
}
