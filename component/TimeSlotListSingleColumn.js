import {html, createNextFreeSlotsForDateKey} from '../helper/index.js'
import {useStoreon} from 'storeon/preact'
import Spinner from './Spinner.js'
import TimeSlotEmptyDay from './TimeSlotEmptyDay.js'
import TimeSlot from './TimeSlot.js'

export default () => {
  const { selectedDate, selectedCalendar, appointment, nextFreeSlots } =
    useStoreon('selectedCalendar', 'selectedDate', 'nextFreeSlots', 'appointment')

  var key = createNextFreeSlotsForDateKey(appointment, selectedCalendar, selectedDate);

  return html`
    <ul class="list-group mt-3">
      ${
        nextFreeSlots[key] ?
        (
          nextFreeSlots[key].status == 'empty' ?
          html`<${TimeSlotEmptyDay}/>` :
          nextFreeSlots[key].slots.map((slot) => html`<${TimeSlot} slot=${slot}/>`)
        ):
        html`<li class="list-group-item"><${Spinner}/></li>`
      }
    </ul>
  `;
}