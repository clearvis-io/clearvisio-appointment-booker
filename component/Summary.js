import {translator as __, dateTimeFormatter, html} from '../helper/index.js'
import {useStoreon} from 'storeon/preact'
import SummaryCustomer from './summary/SummaryCustomer.js'
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
    customerAddress: addressParts.join(', ')
  };

  return html`
    <ul class="list-group text-center">
      ${
        currentStep != 'summary' ?
        html`<li class="list-group-item fw-bold">${__('Appointment summary')}</li>` :
        null
      }
      <li class="list-group-item">
        <div class="fw-bold">${store.name}</div>
        <div>${store.email}</div>
        <div>${store.phone}</div>
      </li>
      ${options.processName ? html`
        <li class="list-group-item">
          <div>
            <span class="fw-bold">${options.processName}</span>
            ${options.examinerName ? html`, ${__('with: %examiner%', {examiner: options.examinerName})}` : null}
          </div>
          <div>
            <span class="fw-bold">${__('Price')}:</span> <${ProcessPrice} process=${options.process}/>
          </div>
        </li>
      ` : ''}
      ${options.dateTimeStart && options.dateTimeEnd && options.processLength ? html`
        <li class="list-group-item">
          <div>
            ${__('Your appointment starts at startTime')}
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
