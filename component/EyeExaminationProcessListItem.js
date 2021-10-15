import {useStoreon} from '../web_modules/storeon/preact.js'
import store from '../store/index.js'
import {html} from '../helper/index.js'

export default (props) => {
  const { appointment } = useStoreon('appointment')

  const onClick = () => {
    store.dispatch('appointment/set', {eye_examination_process: props.item});
    store.dispatch('currentStep/next');
  }

  return html`
    <li class="list-group-item">
      <div class="form-check" onClick=${onClick}>
        <input class="form-check-input" type="radio"
          checked=${appointment.eye_examination_process == props.item} />
        <label class="form-check-label">
          ${props.item.name}
        </label>
      </div>
    </li>
  `;
}
