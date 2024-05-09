import {useStoreon} from 'storeon/preact'
import {html, dateTimeFormatter, translator as __} from '../helper/index.js'
import SimpleModal from './SimpleModal.js'

export default (props) => {
  const { moduleState, appointment, dispatch } = useStoreon('moduleState', 'appointment');

  const onClose = () => dispatch('close');

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
          onApprove=${onClose}/>
      `;
    case 'error':
      return html`
        <${SimpleModal} modalStateStore="globalModalState"
          headerClasses="bg-danger text-light"
          contentClasses="text-danger"
          approveButtonClasses="btn-danger"
          title="Appointment booking failed"
          content="Due to an unexpected error appointment could not be booked, please restart the process"
          approveButtonLabel="OK"
          onApprove=${onClose}/>
      `;
    case 'error.storeCode':
      return html`
        <${SimpleModal} modalStateStore="globalModalState"
          headerClasses="bg-danger text-light"
          contentClasses="text-danger"
          approveButtonClasses="btn-danger"
          title="Appointment booking failed"
          content="Rossz a megadott bolt kódja"
          approveButtonLabel="OK"
          onApprove=${onClose}/>
      `;
    case 'error.403':
      return html`
        <${SimpleModal} modalStateStore="globalModalState"
          headerClasses="bg-danger text-light"
          contentClasses="text-danger"
          approveButtonClasses="btn-danger"
          title="Appointment booking failed"
          content="Rossz a megadott APi kulcs, vagy inaktív a technikai felhasználó"
          approveButtonLabel="OK"
          onApprove=${onClose}/>
      `;
    case 'error.noLenght':
      return html`
        <${SimpleModal} modalStateStore="globalModalState"
          headerClasses="bg-danger text-light"
          contentClasses="text-danger"
          approveButtonClasses="btn-danger"
          title="Appointment booking failed"
          content="Nincs választható vizsgálati protokoll. Az online foglaláshoz a CRM rendszerben konfigurált vizsgálati protokolloknál állítsa be a vizsgálat hosszát."
          approveButtonLabel="OK"
          onApprove=${onClose}/>
      `;
    default:
      return html`
        <${SimpleModal} modalClasses="modal-fullscreen" modalStateStore="globalModalState"/>
      `;
  }
}
