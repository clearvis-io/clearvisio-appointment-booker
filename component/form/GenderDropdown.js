import {useStoreon} from '../../web_modules/storeon/preact.js'
import {html, translator as __} from '../../helper/index.js'
import Dropdown from './Dropdown.js'

export default (props) => {
  const { appointment, dispatch } = useStoreon('appointment');

    const onInput = value => {
      var {customer} = appointment;
      customer[props.property] = value

      dispatch('appointment/set', {customer});
    }

  return html`
    <${Dropdown} onInput=${onInput}
      value=${appointment.customer[props.property] || ''} emptySelection="${__('Not specified')}"
        options=${[{value: 'm', label: __('Male')}, {value: 'f', label: __('Female')}]}/>
  `;
}
