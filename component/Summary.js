import {translator as __, dateTimeFormatter, html} from '../helper/index.js'
import {useStoreon} from 'storeon/preact'
import SummaryCustomer from './summary/SummaryCustomer.js'
import StartTime from './summary/StartTime.js'
import BookAppointmentButton from './summary/BookAppointmentButton.js'
import ProcessPrice from './ProcessPrice.js';

export default (props) => {
  const { appointment, language, currentStep, store, selectedCalendar,
          priceComment, showPrice, showExaminerName, locationName, locationAddress,
          showLocation, dispatch
  } = useStoreon('appointment', 'language', 'currentStep', 'store',
                 'selectedCalendar', 'priceComment', 'showPrice',
                 'showExaminerName', 'locationName', 'locationAddress',
                 'showLocation'
  );

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
    examinerName: showExaminerName && calendar ? calendar.user.name : null,
    customer: appointment.customer,
    customerAddress: addressParts.join(', '),
    showLocation: showLocation,
    locationName: locationName !== null ? locationName : store.name,
    locationAddress: locationAddress !== null ? locationAddress : (store.postal_code + ' ' + store.city + ', ' + store.street_address),
    appointmentComment: appointment.comment
  };

  const reschedule = () => {
    dispatch('currentStep/set', 'appointment');
  }

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
          <div class="fs-6">
            <a href="#" onClick="${reschedule}">${__('change date')}</a>
          </div>
        </li>
      ` : ''}
      ${currentStep == 'summary' ? html`
        <li class="list-group-item">
          <${SummaryCustomer} customer=${options.customer} customerAddress=${options.customerAddress}/>
        </li>
      ` : ''}
      ${currentStep == 'summary' && options.appointmentComment ? html`
        <li class="list-group-item">
          ${__('Comment')}: ${options.appointmentComment}
        </li>
      ` : ''}
      ${
        options.showLocation ?
          html`
            <li class="list-group-item">
              <div>${__('Location')}:</div>
              <div class="fw-bold">${options.locationName}</div>
              <div>${options.locationAddress}</div>
            </li>
        ` : ''
      }
      <li class="list-group-item">
        ${ showPrice ? html`
          <div>${__('Price')}:</div>
          <div class="fw-bold"><${ProcessPrice} process=${options.process}/></div>
        ` : ''}
        <div>${priceComment || ''}</div>
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
