import {translator as __, dateTimeFormatter, html} from '../helper/index.js'
import {useStoreon} from 'storeon/preact'
import SummaryCustomer from './Summary/SummaryCustomer.js'
import SummaryProcessDateHu from './Summary/SummaryProcessDateHu.js'
import SummaryProcessDateEn from './Summary/SummaryProcessDateEn.js'
import SummaryProcessNameHu from './Summary/SummaryProcessNameHu.js'
import SummaryProcessNameEn from './Summary/SummaryProcessNameEn.js'
import SummaryPrice from './Summary/SummaryPrice.js'
import BookAppointmentButton from './Summary/BookAppointmentButton.js'

export default (props) => {
  const { appointment, language, currentStep } = useStoreon('appointment', 'language', 'currentStep')

  var addressPartKeys = ['state', 'postal_code', 'city', 'street_address'];
  var addressParts = [];
  addressPartKeys.forEach(key => {
    if (!appointment.customer[key]) {
      return;
    }

    addressParts.push(appointment.customer[key]);
  })

  var options = {
    dateTimeStart: appointment.start ? dateTimeFormatter.formatDateTime(appointment.start) : null,
    dateTimeEnd: appointment.end ? dateTimeFormatter.formatDateTime(appointment.end) : null,
    processLength: appointment['eye_examination_process'] ? appointment['eye_examination_process'].length : null,
    processName: appointment['eye_examination_process'] ? appointment['eye_examination_process'].name : null,
    process: appointment['eye_examination_process'],
    examinerName: appointment.calendar ? appointment.calendar.user.name : null,
    customer: appointment.customer,
    customerAddress: addressParts.join(', ')
  };

  return html`
    <ul class="list-group text-center">
      <li class="list-group-item fw-bold">
        ${__('Your appointment details')}
      </li>
      ${options.dateTimeStart && options.dateTimeEnd && options.processLength ? html`
        <li class="list-group-item">
          <${language == 'hu-HU' ?  SummaryProcessDateHu : SummaryProcessDateEn} summary=${options}/>
        </li>
      ` : ''}
      ${options.processName && options.examinerName ? html`
        <li class="list-group-item">
          <${language == 'hu-HU' ? SummaryProcessNameHu : SummaryProcessNameEn} summary=${options}/>
        </li>
      ` : ''}
      ${Object.keys(options.customer).length !== 0 ? html`
      <li class="list-group-item">
        <${SummaryCustomer} customer=${options.customer} customerAddress=${options.customerAddress}/>
      </li>
      ` : ''}
      ${options.process ? html`
      <li class="list-group-item">
        <${SummaryPrice} summary=${options}/>
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
