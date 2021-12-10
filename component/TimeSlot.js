import {useStoreon} from 'storeon/preact'
import {html, dateTimeFormatter, dateTimesMatch} from '../helper/index.js'

export default (props) => {
  const { appointment, calendars, dispatch, currentStep } =
    useStoreon('appointment', 'calendars', 'currentStep');
  const onClick = () => {
    if (currentStep !== 'appointment') {
      return;
    }

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
    <li class="list-group-item${dateTimesMatch(new Date(appointment.start), new Date(props.slot.start)) ? ' selected' : ''}" onClick=${onClick}>
      <div class="row align-items-center ms-2">
        <div class="col-11">${dateTimeFormatter.formatTime(props.slot.start)}</div>
        <div class="col text-end p-2">
          \u00BB
        </div>
      </div>
    </li>
  `;
}
