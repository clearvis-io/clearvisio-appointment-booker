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

  store.on('currentStep/set', ({ appointment }, newStep) => {
    if (newStep === 'storeSelection') {
      return { appointment: { customer: {} } };
    }
  })

  store.on('store/set', ({ appointment, store: currentStore, currentStep }, newStore) => {
    if (currentStore && currentStore['@id'] !== newStore['@id']) {
      store.dispatch('eyeExaminationProcesses/set', []);
      store.dispatch('unfilteredEyeExaminationProcesses/set', []);
      
      store.dispatch('currentStep/set', 'storeSelection');
      
      return { appointment: { customer: {} } };
    }
  })
}
