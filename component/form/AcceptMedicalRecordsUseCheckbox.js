import {useStoreon} from 'storeon/preact'
import {html, translator as __} from '../../helper/index.js'
import SimpleModal from '../SimpleModal.js'

export default (props) => {
  const { appointment, dispatch } = useStoreon('appointment');

  const onClick = () => {
    var {customer} = appointment;
    customer[props.property] = !customer[props.property] || null;

    dispatch('appointment/set', {customer});
  }

  return html`
    <div class="form-check ${props.invalid ? 'is-invalid' : ''}" onClick=${onClick}>
      <input class="form-check-input" type="checkbox"
        checked=${appointment.customer[props.property] || false}/>
      <label class="form-check-label">
        ${__('I agree to the use of my medical records according to privacy policy')}
      </label>
    </div>
  `;
}
