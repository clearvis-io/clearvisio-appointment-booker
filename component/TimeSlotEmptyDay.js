import {useStoreon} from '../web_modules/storeon/preact.js'
import {html, createNextFreeSlotsForDateKey, dateTimeFormatter, translator as __} from '../helper/index.js'

export default (props) => {
  const { selectedDate, nextFreeSlots, appointment, dispatch } = useStoreon('appointment', 'nextFreeSlots', 'selectedDate')
  var date = new Date(selectedDate), key, found = false;
  date.setDate(date.getDate() + 1);

  while (nextFreeSlots[key = createNextFreeSlotsForDateKey(appointment, date)]) {
    if (nextFreeSlots[key].status !== 'empty') {
      found = true;
      break;
    }

    date.setDate(date.getDate() + 1);
  }

  const onGoToDate = () => dispatch('selectedDate/set', date);

  return html`
    <li class="list-group-item p-4 text-center">
      <h5>${__('There are no free appointment times for this day')}</h5>
      ${
        found ?
        html`
          <div class="text-muted">
            ${__('The next free slot is available on %date%', {date: dateTimeFormatter.formatDate(date)})}
          </div>
          <button class="btn m-2 btn-primary" onClick="${onGoToDate}">${__('Go to date')}</button>
        ` :
        html`
          <button class="btn m-2 btn-primary" onClick="${onGoToDate}">
            ${__('Click here to search for the next free appointment')}
          </button>
        `
      }
    </li>
  `;
}
