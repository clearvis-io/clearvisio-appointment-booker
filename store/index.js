import { createStoreon } from '../web_modules/storeon.js'
import { eyeExaminationProcesses } from './eyeExaminationProcesses.js'
import { currentStep } from './currentStep.js'
import { appointment } from './appointment.js'
import { modalStateStore } from './modalStateStore.js'

console.log('HMM', closeConfirmModalState);

export default createStoreon([eyeExaminationProcesses, currentStep, appointment, closeConfirmModalState])
