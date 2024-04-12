import {html, createNextFreeSlotsForDateKey, translator as __} from '../helper/index.js'
import {useStoreon} from 'storeon/preact'
import Spinner from './Spinner.js'
import TimeSlotEmptyDay from './TimeSlotEmptyDay.js'
import TimeSlotButton from './TimeSlotButton.js'

export default () => {
  const { selectedDate, selectedCalendar, appointment, nextFreeSlots } =
    useStoreon('selectedCalendar', 'selectedDate', 'nextFreeSlots', 'appointment')

  var key = createNextFreeSlotsForDateKey(appointment, selectedCalendar, selectedDate);

  function timeSoltsToCategories (array) {
    const morning = [];
    const afternoon = [];
    const evening = [];
    
    for (let i in array) {
      const element = array[i];
      const startDate = new Date(array[i].start);
      
      const noon = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), 12);
      const sixPM = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), 18);
      const elementDate = new Date(
        startDate.getFullYear(), startDate.getMonth(), startDate.getDate(),
        startDate.getHours(), startDate.getMinutes()
        );
      
      if (elementDate < noon) {
        morning.push(element);
      } else if (elementDate < sixPM) {
        afternoon.push(element);
      } else {
        evening.push(element);
      }
    };

    return html`
      ${
        morning.length ? 
        ( html`
          <div class="partOFDayDiv">
            <h4>${__('Morning')}:</h4>
            ${morning.map((slot) => html`<${TimeSlotButton} slot=${slot}/>`)}
          </div>`
        ) : html`<>`
      }

      ${
        afternoon.length ? 
        ( html`
          <div class="partOFDayDiv">
            <h4>${__('Afternoon')}:</h4>
            ${afternoon.map((slot) => html`<${TimeSlotButton} slot=${slot}/>`)}
          </div>`
        ) : html`<>`
      }

      ${
        evening.length ? 
        ( html`
          <div class="partOFDayDiv">
            <h4>${__('Evening')}:</h4>
            ${evening.map((slot) => html`<${TimeSlotButton} slot=${slot}/>`)}
          </div>`
        ) : html`<>`
      }
    `;
  };

  return html`
    <div class="grid">
      ${
        nextFreeSlots[key] ?
        (
          nextFreeSlots[key].status == 'empty' ?
          html`<${TimeSlotEmptyDay}/>` : 
          timeSoltsToCategories(nextFreeSlots[key].slots)
        ):
        html`<li class="list-group-item"><${Spinner}/></li>`
      }
    </div>
  `;
}