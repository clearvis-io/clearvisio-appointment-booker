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
import { headerTitle } from './headerTitle.js'
import { priceComment } from './priceComment.js'
import { price } from './price.js'
import { showExaminerName } from './showExaminerName.js'
import { booking } from './booking.js'
import { country } from './country.js'
import { selectedCalendar } from './selectedCalendar.js'
import { privacy } from './privacy.js'
import { location } from './location.js'
import { showProcessLength } from './showProcessLength.js'

var closeConfirmModalState = modalStateStore('closeConfirmModalState');
var globalModalState = modalStateStore('globalModalState', {visible: true});
var privacyPolicyModalState = modalStateStore('privacyPolicyModalState');
var detailedDescriptionModalState = modalStateStore('detailedDescriptionModalState');

export default () => {
  return createStoreon([
    eyeExaminationProcesses, steps, appointment, moduleState, language, api, privacyPolicyModalState,
    storeStore, calendars, selectedDate, nextFreeSlots, customerForm, privacy,
    closeConfirmModalState, globalModalState, headerTitle, booking, country, selectedCalendar,
    priceComment, price, showExaminerName, location, detailedDescriptionModalState, showProcessLength
  ]);
}
