import {useStoreon} from 'storeon/preact'
import {html, dateTimeFormatter, dateTimesMatch} from '../helper/index.js'

export default (props) => {
  const { dispatch, appointment } = useStoreon('appointment');
  const onClick = () => {
    dispatch('appointment/selectSlot', props.slot);
  }

  return html`
    <button class="btn partOFDayButton ${dateTimesMatch(new Date(appointment.start), new Date(props.slot.start)) ? ' selected' : ''}" onClick=${onClick}>
        ${dateTimeFormatter.formatTime(props.slot.start)}
    </button>
  `;
}
