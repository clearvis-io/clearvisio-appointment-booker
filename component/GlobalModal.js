import {useStoreon} from 'storeon/preact'
import {html, dateTimeFormatter, translator as __} from '../helper/index.js'
import SimpleModal from './SimpleModal.js'

export default (props) => {
  const { moduleState, appointment, dispatch, style } = useStoreon('moduleState', 'appointment', 'style');

  const onClose = () => dispatch('close');
  const onReset = () => dispatch('resetStore')

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
          onApprove=${style == 'embedded' || style == 'embedded-safe' ? onReset : onClose}/>
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
    default:
      return html`
        <${SimpleModal} modalClasses="modal-fullscreen" modalStateStore="globalModalState"/>
      `;
  }
}
