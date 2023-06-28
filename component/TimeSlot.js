import {useStoreon} from 'storeon/preact'
import {html, dateTimeFormatter, dateTimesMatch} from '../helper/index.js'

export default (props) => {
  const { dispatch, appointment } = useStoreon('appointment');
  const onClick = () => {
    dispatch('appointment/selectSlot', props.slot);
  }

  return html`
    <li class="list-group-item${dateTimesMatch(new Date(appointment.start), new Date(props.slot.start)) ? ' selected' : ''}" onClick=${onClick}>
      <div class="row align-items-center ms-2">
        <div class="col-11">${dateTimeFormatter.formatTime(props.slot.start)}</div>
        <div class="col text-end p-2 next item icon">
          \u203A
        </div>
      </div>
    </li>
  `;
}
