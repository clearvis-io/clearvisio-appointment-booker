import {useStoreon} from '../web_modules/storeon/preact.js'
import {html} from '../helper/index.js'

export default (props) => {
  const { appointment, dispatch } = useStoreon('appointment')

  const onClick = () => {
    dispatch('appointment/set', {eye_examination_process: props.item});
    dispatch('currentStep/next');
  }

  return html`
    <li class="list-group-item" onClick=${onClick}>
      <div class="form-check">
        <input class="form-check-input" type="radio"
          checked=${appointment.eye_examination_process == props.item} />
        <label class="form-check-label">
          ${props.item.name}
        </label>
      </div>
    </li>
  `;
}
