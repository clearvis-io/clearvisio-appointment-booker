import {useStoreon} from 'storeon/preact'
import {html, dateTimeFormatter, dateTimesMatch} from '../helper/index.js'

export default ({slot}) => {
  const { dispatch, appointment } = useStoreon('appointment');
  const onClick = () => {
    dispatch('appointment/selectSlot', slot);
  }

  const selected = dateTimesMatch(new Date(appointment.start), new Date(slot.start));

  return html`
    <button class="btn btn-outline-secondary m-1 ${selected ? ' selected' : ''}" onClick=${onClick}>
      ${dateTimeFormatter.formatTime(slot.start)}
    </button>
  `;
}
