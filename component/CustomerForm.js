import {useStoreon} from '../web_modules/storeon/preact.js'
import {html} from '../helper/index.js'
import Input from './Input.js'

const switchedNameOrderLanguages = ['hu'];

export default (props) => {
  const { customerForm, language } = useStoreon('customerForm', 'language');

  const switchNameOrder = (switchedNameOrderLanguages.indexOf(language) != -1 ||
    switchedNameOrderLanguages.indexOf(language.substring(0, 2)) != -1);

  return html`
    <form class="card p-2">
      <div class="row mx-2">
        ${
          switchNameOrder ?
          html`
            <${Input} property="last_name" label="Last name"/>
            <${Input} property="first_name" label="First name"/>
          ` :
          html`
            <${Input} property="first_name" label="First name"/>
            <${Input} property="last_name" label="Last name"/>
          `
        }
      </div>
      <div class="row mx-2">
        <${Input} property="birth" label="Birth"/>
        <${Input} property="gender" label="Gender"/>
        <${Input} property="ssn" label="SSN"/>
      </div>
      <div class="row mx-2">
        <${Input} property="country" label="Country"/><${Input} property="state" label="State"/>
      </div>
      <div class="row mx-2">
        <${Input} property="postal_code" label="Postal code"/><${Input} property="city" label="City"/>
      </div>
      <${Input} property="street_address" label="Street address"/>
      <div class="row mx-2">
        <${Input} property="mobile" label="Mobile"/><${Input} property="email" label="Email"/>
      </div>
    </form>
  `;
}
