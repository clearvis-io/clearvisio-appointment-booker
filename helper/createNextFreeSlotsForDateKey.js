export default function (appointment, date) {
  if (!appointment) {
    return;
  }

  return !appointment.eye_examination_process ?
    null :
    appointment.eye_examination_process['@id'] + '-' +
      (appointment.calendar ? appointment.calendar['@id'] : 'NO_CALENDAR') + '-' +
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
}
