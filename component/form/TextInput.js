import {useStoreon} from 'storeon/preact'
import {html} from '../../helper/index.js'

export default (props) => {
  const { appointment, dispatch } = useStoreon('appointment');

  const onInput = e => {
    const { value } = e.target;
    var {customer} = appointment;
    customer[props.property] = value

    dispatch('appointment/set', {customer});
  }

  return html`
    <input type="text" class="${props.invalid ? 'is-invalid' : ''} form-control" onInput=${onInput}
      value=${appointment.customer[props.property] || ''}
      disabled=${!!appointment.customer['@id']} />
  `;
}
