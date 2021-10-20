import { createStoreon } from '../web_modules/storeon.js'
import { eyeExaminationProcesses } from './eyeExaminationProcesses.js'
import { steps } from './steps.js'
import { appointment } from './appointment.js'
import { api } from './api.js'
import { language } from './language.js'
import { modalStateStore } from './modalStateStore.js'
import { moduleState } from './moduleState.js'
import { storeStore } from './storeStore.js'
import { calendars } from './calendars.js'
import { selectedDate } from './selectedDate.js'

var closeConfirmModalState = modalStateStore('closeConfirmModalState');
var globalModalState = modalStateStore('globalModalState', {visible: true});

export default () => {
  return createStoreon([
    eyeExaminationProcesses, steps, appointment, moduleState, language, api,
    storeStore, calendars, selectedDate,
    closeConfirmModalState, globalModalState
  ]);
}
