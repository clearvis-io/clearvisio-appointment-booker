export function appointment (store) {
  store.on('@init', () => ({ appointment: { customer: {} } }))

  store.on('appointment/set', ({ appointment }, modifiedAppointment) => {
    return {appointment: Object.assign(appointment, modifiedAppointment)};
  })

  store.on('showAppointmentComment/set', (previousValue, showAppointmentComment) => {
    return { showAppointmentComment };
  })

  store.on('appointmentCommentRequired/set', (previousValue, appointmentCommentRequired) => {
    return { appointmentCommentRequired };
  })

  store.on('constantAppointmentCommentText/set', (previousValue, constantAppointmentCommentText) => {
    return { constantAppointmentCommentText };
  })
}
