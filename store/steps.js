import availableCalendarFilter from '../helper/availableCalendarFilter.js'

const defaultAvailableSteps = ['process', 'calendar', 'appointment', 'customer', 'summary'];

export function steps (store) {
  var removeStep = (availableSteps, removedStep) => {
    return defaultAvailableSteps.filter(
      (step) => availableSteps.indexOf(step) != -1 && step != removedStep
    )
  }

  var addStep = (availableSteps, addedStep) => {
    return defaultAvailableSteps.filter(
      (step) => availableSteps.indexOf(step) != -1 || step == addedStep
    )
  }

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

  store.on('eyeExaminationProcesses/set', ({ eyeExaminationProcesses, availableSteps, currentStep }) => {
    if (eyeExaminationProcesses.length == 1) {
      return {
        availableSteps: availableSteps = removeStep(availableSteps, 'process'),
        currentStep: currentStep == 'process' ? availableSteps[0] : currentStep
      };
    }
  });

  store.on('appointment/set', ({ availableSteps, appointment, calendars, currentStep }) => {
    var availableCalendars = availableCalendarFilter({appointment, calendars});

    if (availableCalendars.length == 1 &&
      (!appointment.calendar || appointment.calendar['@id'] != availableCalendars[0]['@id'])) {
      return {
        appointment: Object.assign(appointment, {calendar: availableCalendars[0]}),
        availableSteps: removeStep(availableSteps, 'calendar'),
        currentStep: currentStep == 'calendar' ? 'appointment' : currentStep
      };
    }

    if (availableCalendars.length > 1) {
      return { availableSteps: addStep(availableSteps, 'calendar') };
    }
  });
}
