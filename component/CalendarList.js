import {useStoreon} from '../web_modules/storeon/preact.js'
import {html, availableCalendarFilter, translator as __} from '../helper/index.js'
import CalendarListItem from './CalendarListItem.js'
import Spinner from './Spinner.js'

export default (props) => {
  const calendars = availableCalendarFilter(useStoreon('calendars'));

  const firstAvailableUser = {
    user: {
      name: __('First free'),
      description: __('For finding the nearest free time slot.')
    }
  };

  return html`
    <ul class="list-group">
      ${
        calendars.length ?
          html`
            ${calendars.map(item => html`<${CalendarListItem} item=${item} />`)}
            <${CalendarListItem} item=${firstAvailableUser} />
          ` :
          html`
            <li class="list-group-item">
              ${__('None of our colleagues was available for the selected process')}
            </li>
          `
      }
    </ul>
  `;
}
