import {useStoreon} from 'storeon/preact'
import {html, translator as __, nameFormatter} from '../helper/index.js'
import InputContainer from './InputContainer.js'
import AppointmentComment from './form/AppointmentComment.js'
import DateInput from './form/DateInput.js'
import GenderDropdown from './form/GenderDropdown.js'
import AcceptPrivacyPolicyCheckbox from './form/AcceptPrivacyPolicyCheckbox.js'
import AcceptMedicalRecordsUseCheckbox from './form/AcceptMedicalRecordsUseCheckbox.js'

export default (props) => {
  const { customerForm, customerFormGlobalErrors, medicalConsent, dispatch } =
    useStoreon('customerForm', 'customerFormGlobalErrors', 'language', 'medicalConsent');
  const onNext = () => {
    dispatch('customerForm/validateAndNext');
  }

  return html`
    <div class="card p-2">
      ${
        customerFormGlobalErrors && customerFormGlobalErrors.length ?
        html`
          <div class="row mx-2 text-danger">
            ${customerFormGlobalErrors.map((error) => html`<p>${error}</p>`)}
          </div>
        ` :
        ''
      }
      <div class="row mx-2">
        ${
          nameFormatter.shouldSwitchNameOrder() ?
          html`
            <${InputContainer} property="last_name" label="Last name"/>
            <${InputContainer} property="first_name" label="First name"/>
          ` :
          html`
            <${InputContainer} property="first_name" label="First name"/>
            <${InputContainer} property="last_name" label="Last name"/>
          `
        }
      </div>
      <div class="row mx-2">
        <${InputContainer} class="col-lg-5" property="birth" label="Birth" inputClass=${DateInput}/>
        <${InputContainer} property="gender" label="Gender" inputClass=${GenderDropdown}/>
        <${InputContainer} property="ssn" label="SSN"/>
      </div>
      <div class="row mx-2">
        <${InputContainer} property="state" label="State"/>
      </div>
      <div class="row mx-2">
        <${InputContainer} property="postal_code" label="Postal code"/><${InputContainer} property="city" label="City"/>
      </div>
      <div class="row mx-2">
        <${InputContainer} property="street_address" label="Street address"/>
      </div>
      <div class="row mx-2">
        <${InputContainer} property="mobile" label="Mobile"/><${InputContainer} property="email" label="Email"/>
      </div>
      <${AppointmentComment}/>
      <div class="row mx-2">
        <${InputContainer} property="acceptPrivacyPolicy" inputClass=${AcceptPrivacyPolicyCheckbox}/>
      </div>
      ${
        medicalConsent == 'explicit' ?
        html`
          <div class="row mx-2">
            <${InputContainer} property="acceptMedicalRecordsUse" inputClass=${AcceptMedicalRecordsUseCheckbox}/>
          </div>
        ` :
        ''
      }
      <button class="mx-2 btn btn-primary" onClick=${onNext}>${__('Next')}</button>
    </div>
  `;
}
