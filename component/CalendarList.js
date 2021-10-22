import {useStoreon} from 'storeon/preact'
import {html, availableCalendarFilter, translator as __} from '../helper/index.js'
import CalendarListItem from './CalendarListItem.js'
import Spinner from './Spinner.js'

export default (props) => {
  const {appointment, calendarsLoaded, dispatch} = useStoreon('appointment', 'calendarsLoaded');
  const calendars = availableCalendarFilter(useStoreon('calendars'));

  const firstAvailableUser = {
    user: {
      name: __('First free'),
      description: __('For finding the nearest free time slot.')
    }
  };

  const onBack = () => dispatch('currentStep/previous');

  return html`
    <ul class="list-group">
      ${
        appointment.eye_examination_process && calendarsLoaded ?
        (
          calendars.length ?
            html`
              <${CalendarListItem} item=${firstAvailableUser} />
              ${calendars.map(item => html`<${CalendarListItem} item=${item} />`)}
            ` :
            html`
              <li class="list-group-item text-center">
                ${__('None of our colleagues was available for the selected process')}
                <button class="btn m-2 btn-primary" onClick="${onBack}">
                  ${__('Select another process')}
                </button>
              </li>
          `
        ) :
        html`<li class="list-group-item"><${Spinner}/></li>`
      }
    </ul>
  `;
}
