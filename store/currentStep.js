const defaultAvailableSteps = ['process', 'user', 'appointment', 'customer', 'summary'];

export function currentStep (store) {
  store.on('@init', () => {
    return {
      currentStep: 'process',
      availableSteps: defaultAvailableSteps
    };
  });

  store.on('currentStep/next', ({ currentStep, availableSteps }) => {
    var index = availableSteps.indexOf(currentStep);
    return { currentStep: index < availableSteps.length - 1 ? availableSteps[index + 1] : currentStep };
  });

  store.on('currentStep/previous', ({ currentStep, availableSteps }) => {
    var index = availableSteps.indexOf(currentStep);
    return { currentStep: index > 0 ? availableSteps[index - 1] : currentStep };
  });

  store.on('availableSteps/removeStep', ({ availableSteps, currentStep }, removedStep) => {
    return {
      availableSteps: availableSteps = defaultAvailableSteps.filter(
        (step) => availableSteps.indexOf(step) != -1 && step != removedStep
      ),
      currentStep: availableSteps.indexOf(currentStep) == -1 ? availableSteps[0] : currentStep
    };
  });

  store.on('availableSteps/addStep', ({ availableSteps }, addedStep) => {
    return {
      availableSteps: defaultAvailableSteps.filter(
        (step) => availableSteps.indexOf(step) != -1 || step == addedStep
      )
    };
  });
}
