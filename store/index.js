import { createStoreon } from '../web_modules/storeon.js'
import { eyeExaminationProcesses } from './eyeExaminationProcesses.js'
import { currentStep } from './currentStep.js'
import { appointment } from './appointment.js'

export default createStoreon([eyeExaminationProcesses, currentStep, appointment])
