import {useStoreon} from 'storeon/preact'
import {html, dateTimeFormatter, translator as __} from '../helper/index.js'
import SimpleModal from './SimpleModal.js'
import ErrorModal from './ErrorModal.js'

export default (props) => {
  const { moduleState, appointment, dispatch, store, style} = useStoreon('moduleState', 'appointment', 'store', 'style');

  var storePhone, storeMail;

  if (store != null) {
    storePhone = store["phone"];
    storeMail = store["email"];
  }

  const handleModalApprove = () => {
    if (style == 'embedded' || style == 'embedded-safe') {
      dispatch('resetStore');
    } else {
      dispatch('close');
    }
  }

  const baseText = 'There is a configuration error in the appointment booker that prevents booking. Please contact our store on %mail% email address or book an appointment by calling our store (%tel%) and please mention the error then.'
  const baseNoPhoneText = 'Error! Appointments can not be created! There is a configuration error in the appointment booker that prevents booking. Please contact our store on %mail% email address or book an appointment by calling us and please mention the error then.'
  switch (moduleState) {
    case 'success':
      return html`
        <${SimpleModal} modalStateStore="globalModalState"
          headerClasses="bg-success text-light"
          contentClasses="text"
          approveButtonClasses="btn-success"
          title="Appointment booked!"
          content="
            ${__('Your appointment have been recorded.')}
            ${__(
              'The examination will start at %start%, please arrive 5 minutes early.',
              {start: dateTimeFormatter.formatTime(appointment.start)}
            )}
            ${__('If you have any further questions, please contact us through our customer service.')}
          "
          approveButtonLabel="OK"
          onApprove=${handleModalApprove}/>
      `;
    case 'error':
      return html`
        <${ErrorModal} content="${__('Due to an unexpected error appointment could not be booked, please restart the process')}"/>
      `;
    case 'error.storeCode':
      return html`
        <${ErrorModal} content="${ !storePhone ? __(baseNoPhoneText, {mail: storeMail}) : __(baseText, {mail: storeMail, tel: storePhone})} ${__("Invalid store code")}"/>
      `;
    case 'error.403':
      return html`
        <${ErrorModal} content="${ !storePhone ? __(baseNoPhoneText, {mail: storeMail}) : __(baseText, {mail: storeMail, tel: storePhone})} ${__("Invalid API key or inactive API user.")}"/>
      `;
    case 'error.noLength':
      return html`
        <${ErrorModal} content="${ !storePhone ? __(baseNoPhoneText, {mail: storeMail}) : __(baseText, {mail: storeMail, tel: storePhone})} ${__("The lenght isn’t configured for the eye examination processes.")}"/>
      `;
    case 'error.storeEmail':
      return html`
        <${ErrorModal} content="${ !storePhone ? __(
          'There is a configuration error in the appointment booker that prevents booking. Please call our store to book an appointment us and please mention the error then.'
        ) : __(
          'There is a configuration error in the appointment booker that prevents booking. Please call our store (%tel%) to book an appointment us and please mention the error then: There is no email address configured for this store.',
          {tel: storePhone}
        )}"/>
      `;
    case 'error.missingConfiguredProcessId':
      return html`
        <${ErrorModal} content="${ !storePhone ? __(baseNoPhoneText, {mail: storeMail}) : __(baseText, {mail: storeMail, tel: storePhone})} ${__('The eye examination process configured for this appointment booker has been removed.')}"/>
      `;
  }
}
