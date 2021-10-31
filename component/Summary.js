import {translator as __, dateTimeFormatter, html} from '../helper/index.js'
import {useStoreon} from 'storeon/preact'
import SummaryCustomer from './summary/SummaryCustomer.js'
import StartTime from './summary/StartTime.js'
import BookAppointmentButton from './summary/BookAppointmentButton.js'
import ProcessPrice from './ProcessPrice.js';

export default (props) => {
  const { appointment, language, currentStep, store, selectedCalendar } =
    useStoreon('appointment', 'language', 'currentStep', 'store', 'selectedCalendar');

  if (!store) {
    return;
  }

  var addressPartKeys = ['state', 'postal_code', 'city', 'street_address'];
  var addressParts = [];
  addressPartKeys.forEach(key => {
    if (!appointment.customer[key]) {
      return;
    }

    addressParts.push(appointment.customer[key]);
  })

  var calendar = appointment.calendar || selectedCalendar;

  var options = {
    dateTimeStart: appointment.start ? dateTimeFormatter.formatDateTime(appointment.start) : null,
    dateTimeEnd: appointment.end ? dateTimeFormatter.formatDateTime(appointment.end) : null,
    processLength: appointment['eye_examination_process'] ? appointment['eye_examination_process'].length : null,
    processName: appointment['eye_examination_process'] ? appointment['eye_examination_process'].name : null,
    process: appointment['eye_examination_process'],
    examinerName: calendar ? calendar.user.name : null,
    customer: appointment.customer,
    customerAddress: addressParts.join(', '),
    storeAddress: store.postal_code + ' ' + store.city + ', ' + store.street_address
  };

  return html`
    <ul class="list-group${currentStep == 'summary' ? '' : ' text-end'}">
      ${
        currentStep != 'summary' ?
        html`<li class="list-group-item fw-bold">${__('Appointment summary')}</li>` :
        null
      }
      ${options.processName ? html`
        <li class="list-group-item">
          <div>${__('Subject')}:</div>
          <div class="fw-bold">${options.processName}</div>
          <div>
            ${options.examinerName ? html`${__('examiner: %examiner%', {examiner: options.examinerName})}` : null}
          </div>
        </li>
      ` : ''}
      ${options.dateTimeStart && options.dateTimeEnd && options.processLength ? html`
        <li class="list-group-item">
          <div>${__('Start Time')}:</div>
          <div>
            <${StartTime}//>
          </div>
          <div class="text-muted">
            ${__('It takes up to %length% minutes', {length: options.processLength})}
          </div>
        </li>
      ` : ''}
      ${currentStep == 'summary' ? html`
        <li class="list-group-item">
          <${SummaryCustomer} customer=${options.customer} customerAddress=${options.customerAddress}/>
        </li>
      ` : ''}
      <li class="list-group-item">
        <div>${__('Location')}:</div>
        <div class="fw-bold">${store.name}</div>
        <div>${options.storeAddress}</div>
        <div>
          <span class="fw-bold">${__('Price')}:</span> <${ProcessPrice} process=${options.process}/>
        </div>
      </li>
      ${
        currentStep == 'summary' ?
        html`
          <li class="list-group-item">
            <${BookAppointmentButton}/>
          </li>
        ` : ''
      }
    </ul>
  `;
}
