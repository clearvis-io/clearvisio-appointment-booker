import {useStoreon} from '../web_modules/storeon/preact.js'
import {html, dateTimeFormatter, dateTimesMatch} from '../helper/index.js'

export default (props) => {
  const { appointment, dispatch } = useStoreon('appointment');
  const onClick = () => {
    dispatch('appointment/set', {start: props.slot.start, end: props.slot.end});
    dispatch('currentStep/next');
  }

  return html`
    <li class="list-group-item" onClick=${onClick}>
      <div class="row">
        <div class="col col-1">
          <input class="form-check-input" type="radio"
            checked=${dateTimesMatch(new Date(appointment.start), new Date(props.slot.start))} />
        </div>
        <div class="col text-center">${dateTimeFormatter.formatTime(props.slot.start)}</div>
      </div>
    </li>
  `;
}
