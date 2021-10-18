import { createStoreon } from '../web_modules/storeon.js'
import { eyeExaminationProcesses } from './eyeExaminationProcesses.js'
import { currentStep } from './currentStep.js'
import { appointment } from './appointment.js'
import { language } from './language.js'
import { modalStateStore } from './modalStateStore.js'

var closeConfirmModalState = modalStateStore('closeConfirmModalState');

export default createStoreon([
  eyeExaminationProcesses, currentStep, appointment, closeConfirmModalState, language
])
