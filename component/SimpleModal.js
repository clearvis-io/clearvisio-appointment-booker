import {html} from '../helper/index.js'
import { useState } from '../web_modules/preact/hooks.js';
import store from '../store/index.js'
import {useStoreon} from '../web_modules/storeon/preact.js'

export default (props) => {
  const storeValue = useStoreon(props.modalStateStore)
  const visible = storeValue[props.modalStateStore]

  const [previousVisible, setPreviousVisible] = useState(false);
  const [display, setDisplay] = useState(false);
  const [showClassAdded, setShowClassAdded] = useState(false);

  if (visible && !previousVisible) {
    setDisplay(true);
    setTimeout((() => {
      setShowClassAdded(true);
      setPreviousVisible(true);
    }), 0);
  }
  if (!visible && previousVisible) {
    setShowClassAdded(false);
    setTimeout((() => {
      setDisplay(false);
      setPreviousVisible(false);
    }), 100);
  }

  const onHideConfirm = () => store.dispatch(`${props.modalStateStore}/set`, false);

  return html`
    <div class="modal text-dark fade ${showClassAdded ? 'show' : ''}" tabindex="-1" style="${display ? 'display: block;' : ''}">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${props.title}</h5>
          </div>
          <div class="modal-body">
            <p>${props.content}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onClick=${onHideConfirm}>${props.cancelButtonLabel}</button>
            <button type="button" class="btn btn-primary" onClick=${props.onApprove}>${props.approveButtonLabel}</button>
          </div>
        </div>
      </div>
    </div>
  `;
}
