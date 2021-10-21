import {html, translator as __, dateTimeFormatter} from '../helper/index.js'
import {useStoreon} from 'storeon/preact'
import ProcessPrice from './ProcessPrice.js'
import SummaryEn from './Summary/SummaryEn.js'
import SummaryHu from './Summary/SummaryHu.js'

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
    processPrice: ProcessPrice(appointment['eye_examination_process']['process_services']),
    examinerName: appointment.calendar.user.name,
    customer: appointment.customer,
    customerAddress: addressParts.join(', ')
  };

  if (language == 'hu-HU') {
    return SummaryHu(options);
  } else {
    return SummaryEn(options);
  }
}
