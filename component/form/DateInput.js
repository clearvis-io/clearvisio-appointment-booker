import {useStoreon} from '../../web_modules/storeon/preact.js'
import {html} from '../../helper/index.js'
import Dropdown from './Dropdown.js'

const daysOfMonth = (date) => {
  date = date || new Date();
  date = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  return date.getDate();
}

export default (props) => {
  const { appointment, dispatch } = useStoreon('appointment');

  const setDate = (dateProperty, value) => {
    var {customer} = appointment
    if (value == '') {
      customer[props.property] = null;
    } else {
      customer[props.property] = customer[props.property] || new Date('2000-01-01');
      customer[props.property][`set${dateProperty}`](value);
    }

    dispatch('appointment/set', {customer});
  }

  const date = appointment.customer[props.property];
  var yearOptions = [];
  for (let i = 1900; i <= (new Date).getFullYear(); i++) {
    yearOptions.push({value: i, label: i});
  }
  var monthOptions = [];
  for (let i = 1; i <= 12; i++) {
    monthOptions.push({value: i - 1, label: i  < 10 ? `0${i}` : i});
  }
  var dayOptions = [];
  for (let i = 1; i <= daysOfMonth(date); i++) {
    dayOptions.push({value: i, label: i < 10 ? `0${i}` : i});
  }

  return html`
    <div class="${props.invalid ? 'is-invalid' : ''} input-group">
      <${Dropdown} invalid=${props.invalid} onInput=${(value) => setDate('FullYear', value)}
        value=${date ? date.getFullYear() : ''} emptySelection="----" options=${yearOptions}/>
      <${Dropdown} invalid=${props.invalid} onInput=${(value) => setDate('Month', value)}
        value=${date ? date.getMonth() : ''} emptySelection="--" options=${monthOptions}/>
      <${Dropdown} invalid=${props.invalid} onInput=${(value) => setDate('Date', value)}
        value=${date ? date.getDate() : ''} emptySelection="--" options=${dayOptions}/>
    </div>
  `;
}
