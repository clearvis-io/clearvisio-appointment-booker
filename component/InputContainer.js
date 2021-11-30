import {useStoreon} from 'storeon/preact'
import {html, translator as __} from '../helper/index.js'
import TextInput from './form/TextInput.js'

export default (props) => {
  const { customerForm } = useStoreon('customerForm');

  if (!customerForm[props.property]) {
    return;
  }

  var fieldConfig = customerForm[props.property];

  return html`
    <div class="${props.class || 'col-sm'} needs-validation p-1 mb-2 w-100">
      ${
        props.label ?
        html `
          <label class="form-label text-truncate">
            ${fieldConfig.required ? html`<span class="text-danger">*</span> ` : ''}
            ${__(props.label)}
          </label>
        ` :
        null
      }
      <${props.inputClass || TextInput} property=${props.property}
        invalid=${fieldConfig.errors && fieldConfig.errors.length ? 'was-validated' : ''}/>
      ${
        fieldConfig.errors && fieldConfig.errors.length ?
        fieldConfig.errors.map(error => html`<div class="invalid-feedback">${__(error)}</div>`) :
        ''
      }
    </div>
  `;
}
