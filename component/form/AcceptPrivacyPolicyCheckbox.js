import {useStoreon} from 'storeon/preact'
import {html, translator as __} from '../../helper/index.js'
import SimpleModal from '../SimpleModal.js'

export default (props) => {
  const { appointment, privacyPolicy, dispatch } = useStoreon('appointment', 'privacyPolicy');

  const onClick = () => {
    var {customer} = appointment;
    customer[props.property] = !customer[props.property] || null;

    dispatch('appointment/set', {customer});
  }

  const onClosePrivacyPolicyModal = () => dispatch('privacyPolicyModalState/set', false);

  return html`
    <${SimpleModal} modalStateStore="privacyPolicyModalState"
      title="Privacy policy"
      content="${privacyPolicy ? html([privacyPolicy.content]) : ''}"
      approveButtonLabel="Close"
      onApprove=${onClosePrivacyPolicyModal}/>

    <div class="form-check ${props.invalid ? 'is-invalid' : ''}" onClick=${onClick}>
      <input class="form-check-input" type="checkbox"
        checked=${appointment.customer[props.property] || false}/>
      <label class="form-check-label">
        ${__('I have accepted the privacy policy')}
      </label>
    </div>
  `;
}
