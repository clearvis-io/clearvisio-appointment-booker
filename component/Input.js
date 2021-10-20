import {useStoreon} from '../web_modules/storeon/preact.js'
import {html, translator as __} from '../helper/index.js'

export default (props) => {
  const { customerForm, appointment, dispatch } = useStoreon('customerForm', 'language', 'appointment');

  if (!customerForm[props.property]) {
    return;
  }

  const onInput = e => {
    const { value } = e.target;
    var {customer} = appointment;
    customer[props.property] = value

    dispatch('appointment/set', {customer});
  }

  return html`
    <div class="col p-1">
      <label class="form-label">${__(props.label)}</label>
      <input type="text" class="form-control" onInput=${onInput}
        value=${appointment.customer[props.property] || ''}/>
    </div>
  `;
}
