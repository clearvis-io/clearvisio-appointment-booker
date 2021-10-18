import { createStoreon } from '../web_modules/storeon.js'
import { eyeExaminationProcesses } from './eyeExaminationProcesses.js'
import { currentStep } from './currentStep.js'
import { appointment } from './appointment.js'
import { api } from './api.js'
import { language } from './language.js'
import { modalStateStore } from './modalStateStore.js'
import { moduleState } from './moduleState.js'

var closeConfirmModalState = modalStateStore('closeConfirmModalState');
var globalModalState = modalStateStore('globalModalState');

export default () => {
  return createStoreon([
    eyeExaminationProcesses, currentStep, appointment, moduleState, language, api,
    closeConfirmModalState, globalModalState
  ]);
}
