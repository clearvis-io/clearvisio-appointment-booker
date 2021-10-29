import {html} from '../helper/index.js'
import SimpleModal from './SimpleModal.js'
import {useStoreon} from 'storeon/preact'

export default (props) => {
  const { dispatch } = useStoreon();

  const onShowConfirm = () => dispatch('closeConfirmModalState/set', true);
  const onClose = () => dispatch('close');

  return html`
    <button type="button" class="btn btn-outline-light" onClick=${onShowConfirm}>X</button>
    <${SimpleModal} modalStateStore="closeConfirmModalState"
      title="Are you sure you want to cancel this appointment?"
      content="All inputed data will be lost."
      cancelButtonLabel="No, continue editing appointment"
      approveButtonLabel="Cancel appointment"
      onApprove=${onClose}/>
  `;
}
