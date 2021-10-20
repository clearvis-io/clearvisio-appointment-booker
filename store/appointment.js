export function appointment (store) {
  store.on('@init', () => ({ appointment: { customer: {} } }))

  store.on('appointment/set', ({ appointment }, modifiedAppointment) => {
    return {appointment: Object.assign(appointment, modifiedAppointment)};
  })
}
