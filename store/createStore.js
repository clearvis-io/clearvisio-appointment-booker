import { createStoreon } from 'storeon'
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
import { nextFreeSlots } from './nextFreeSlots.js'
import { customerForm } from './customerForm.js'
import { header } from './header.js'
import { booking } from './booking.js'
import { country } from './country.js'
import { selectedCalendar } from './selectedCalendar.js'

var closeConfirmModalState = modalStateStore('closeConfirmModalState');
var globalModalState = modalStateStore('globalModalState', {visible: true});

export default () => {
  return createStoreon([
    eyeExaminationProcesses, steps, appointment, moduleState, language, api,
    storeStore, calendars, selectedDate, nextFreeSlots, customerForm,
    closeConfirmModalState, globalModalState, header, booking, country, selectedCalendar
  ]);
}
