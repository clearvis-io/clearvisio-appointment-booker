const availableSteps = ['process', 'user', 'appointment', 'customer', 'summary']

export function currentStep (store) {
  store.on('@init', () => ({ currentStep: 'process', availableSteps: availableSteps }))

  store.on('currentStep/next', ({ currentStep }) => {
    var index = availableSteps.indexOf(currentStep);
    return { currentStep: index < availableSteps.length - 1 ? availableSteps[index + 1] : currentStep };
  })

  store.on('currentStep/previous', ({ currentStep }) => {
    var index = availableSteps.indexOf(currentStep);
    return { currentStep: index > 0 ? availableSteps[index - 1] : currentStep };
  })
}
