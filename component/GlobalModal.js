import {useStoreon} from '../web_modules/storeon/preact.js'
import {html} from '../helper/index.js'
import SimpleModal from './SimpleModal.js'

export default (props) => {
  const { moduleState, dispatch } = useStoreon('moduleState')

  const onClose = () => dispatch('close');

  return moduleState == 'error' ?
    html`
      <${SimpleModal} modalStateStore="globalModalState"
        headerClasses="bg-danger text-light"
        contentClasses="text-danger"
        approveButtonClasses="btn-danger"
        title="Appointment booking failed"
        content="Due to an unexpected error appointment could not be booked, please restart the process"
        approveButtonLabel="OK"
        onApprove=${onClose}/>
    ` :
    html`
      <${SimpleModal} modalClasses="modal-fullscreen" modalStateStore="globalModalState"/>
    `;
}
