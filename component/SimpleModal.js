import {html} from '../helper/index.js'
import {useState} from '../web_modules/preact/hooks.js';
import {useStoreon} from '../web_modules/storeon/preact.js'
import {translator as __} from '../helper/index.js'
import Spinner from './Spinner.js'

export default (props) => {
  const store = useStoreon(props.modalStateStore)
  const visible = store[props.modalStateStore]

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
      <div class="modal-dialog ${props.modalClasses || ''}">
        <div class="modal-content">
          ${ props.title ? html`
            <div class="${props.headerClasses || ''} modal-header">
              <h5 class="modal-title">${__(props.title)}</h5>
            </div>
          ` : '' }
          <div class="${props.contentClasses || ''} modal-body">
            ${ props.content ? html`<p>${__(props.content)}</p>` : html`<${Spinner}/>`}
          </div>
          ${ props.approveButtonLabel || props.cancelButtonLabel ? html`
            <div class="modal-footer">
              ${ props.cancelButtonLabel ? html`
                <button type="button" class="btn btn-secondary" onClick=${onHideConfirm}>
                  ${__(props.cancelButtonLabel)}
                </button>
              ` : '' }
              ${ props.approveButtonLabel ? html`
                <button type="button" class="btn btn-primary  ${props.approveButtonClasses || ''}"
                  onClick=${props.onApprove}>
                  ${__(props.approveButtonLabel)}
                </button>
              ` : '' }
            </div>
          ` : '' }
        </div>
      </div>
    </div>
  `;
}
