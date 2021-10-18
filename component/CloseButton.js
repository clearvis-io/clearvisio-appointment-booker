import {html} from '../helper/index.js'
import store from '../store/index.js'
import SimpleModal from './SimpleModal.js'

export default (props) => {
  const onShowConfirm = () =>store.dispatch('closeConfirmModalState/set', true);
  const onClose = () => store.dispatch('close');

  return html`
    <${SimpleModal} modalStateStore="closeConfirmModalState"
      title="Are you sure you want to cancel this appointment?"
      content="All inputed data will be lost."
      cancelButtonLabel="No, continue editing appointment"
      approveButtonLabel="Cancel appointment"
      onApprove=${onClose}/>

    <button type="button" class="float-end btn-close btn-close-white" onClick=${onShowConfirm}></button>
  `;
}
