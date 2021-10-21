import {useStoreon} from '../web_modules/storeon/preact.js'
import {html, translator as __} from '../helper/index.js'
import TextInput from './form/TextInput.js'

export default (props) => {
  const { customerForm } = useStoreon('customerForm');

  if (!customerForm[props.property]) {
    return;
  }
  return html`
    <div class="${props.class || 'col'} p-1 mb-2">
      <label class="form-label text-truncate">
        ${customerForm[props.property].required ? html`<span class="text-danger">*</span> ` : ''}
        ${__(props.label)}
      </label>
      <${props.inputClass || TextInput} property=${props.property}/>
    </div>
  `;
}
