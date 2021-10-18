import {html} from '../helper/index.js'
import SimpleModal from './SimpleModal.js'
import {useStoreon} from '../web_modules/storeon/preact.js'

export default (props) => {
  const { dispatch } = useStoreon();

  const onShowConfirm = () => dispatch('closeConfirmModalState/set', true);
  const onClose = () => dispatch('close');

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
