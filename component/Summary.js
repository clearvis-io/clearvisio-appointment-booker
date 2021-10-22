import {translator as __, dateTimeFormatter, html} from '../helper/index.js'
import {useStoreon} from 'storeon/preact'
import SummaryCustomer from './Summary/SummaryCustomer.js'
import SummaryProcessDateHu from './Summary/SummaryProcessDateHu.js'
import SummaryProcessDateEn from './Summary/SummaryProcessDateEn.js'
import SummaryProcessNameHu from './Summary/SummaryProcessNameHu.js'
import SummaryPrice from './Summary/SummaryPrice.js'

export default (props) => {
  const { appointment, language } = useStoreon('appointment', 'language')
  if (!appointment['eye_examination_process'] || !appointment['calendar'] || !appointment.start || !appointment.end) {
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

  var options = {
    dateTimeStart: dateTimeFormatter.formatDateTime(appointment.start),
    dateTimeEnd: dateTimeFormatter.formatDateTime(appointment.end),
    processLength: appointment['eye_examination_process'].length,
    processName: appointment['eye_examination_process'].name,
    examinerName: appointment.calendar.user.name,
    customer: appointment.customer,
    customerAddress: addressParts.join(', ')
  };

  return html`
    <ul class="list-group text-center">
      <li class="list-group-item fw-bold">
        ${__('Your appointment details')}
      </li>
      <li class="list-group-item">
        <${language == 'hu-HU' ?  SummaryProcessDateHu : SummaryProcessDateEn} summary=${options}/>
      </li>
      <li class="list-group-item">
        <${language == 'hu-HU' ? SummaryProcessNameHu : SummaryProcessDateEn} summary=${options}/>
      </li>
      <li class="list-group-item">
        <${SummaryCustomer} customer=${options.customer} customerAddress=${options.customerAddress}/>
      </li>
      <li class="list-group-item">
        <${SummaryPrice} summary=${options}/>
      </li>
    </ul>
    `;
}
