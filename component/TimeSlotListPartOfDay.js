import {html, createNextFreeSlotsForDateKey, translator as __} from '../helper/index.js'
import {useStoreon} from 'storeon/preact'
import Spinner from './Spinner.js'
import TimeSlotEmptyDay from './TimeSlotEmptyDay.js'
import TimeSlotPartOfDayCategory from './TimeSlotPartOfDayCategory.js'

export default () => {
  const { selectedDate, selectedCalendar, appointment, nextFreeSlots } =
    useStoreon('selectedCalendar', 'selectedDate', 'nextFreeSlots', 'appointment')

  const key = createNextFreeSlotsForDateKey(appointment, selectedCalendar, selectedDate);
  const morning = [];
  const afternoon = [];
  const evening = [];

  const slots = nextFreeSlots[key] ? nextFreeSlots[key].slots : [];

  for (const element of slots) {
    const startDate = new Date(element.start);

    if (startDate.getHours() < 12) {
      morning.push(element);
    } else if (startDate.getHours() < 18) {
      afternoon.push(element);
    } else {
      evening.push(element);
    }
  };

  return html`
    <div class="grid">
      ${
        nextFreeSlots[key] ?
        (
          nextFreeSlots[key].status == 'empty' ?
          html`<${TimeSlotEmptyDay}/>` :
          html`
            <${TimeSlotPartOfDayCategory} title=${'Morning'} slots=${morning}/>
            <${TimeSlotPartOfDayCategory} title=${'Afternoon'} slots=${afternoon}/>
            <${TimeSlotPartOfDayCategory} title=${'Evening'} slots=${evening}/>
          `
        ):
        html`<li class="list-group-item"><${Spinner}/></li>`
      }
    </div>
  `;
}
