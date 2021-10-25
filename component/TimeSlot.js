import {useStoreon} from 'storeon/preact'
import {html, dateTimeFormatter, dateTimesMatch} from '../helper/index.js'

export default (props) => {
  const { appointment, calendars, dispatch } = useStoreon('appointment', 'calendars');
  const onClick = () => {
    var calendar = null;
    for (let i = 0; i < calendars.length; i++) {
      if (props.slot.calendar['@id'] == calendars[i]['@id']) {
        var calendar = calendars[i];
      }
    }
    if (!calendar) {
      throw new Error('Could not find calendar');
    }

    dispatch(
      'appointment/set',
      {start: props.slot.start, end: props.slot.end, calendar: calendar}
    );
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
