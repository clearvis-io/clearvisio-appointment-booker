import {useStoreon} from 'storeon/preact'
import {html, datesMatch, createNextFreeSlotsForDateKey, translator as __} from '../helper/index.js'



export default ({day}) => {
  const { selectedCalendar, selectedDate, nextFreeSlots, appointment, dispatch, nextFreeSlotLoading } =
    useStoreon('selectedCalendar', 'appointment', 'nextFreeSlots', 'selectedDate', 'nextFreeSlotLoading')
  const nextFreeSlotsOfDay = nextFreeSlots[createNextFreeSlotsForDateKey(appointment, selectedCalendar, day)]

  const handleOnClick = (day) => {
    dispatch('selectedDate/set', day);
  };

  if (day < new Date() || (nextFreeSlotsOfDay && nextFreeSlotsOfDay.status == 'empty')) {
    return html`<td class='disabled'>${day.getDate()}</td>`;
  }

  if (!nextFreeSlotsOfDay) {
    return html`<td class='placeholder-glow'><span class="placeholder bg-secondary">${day.getDate()}</span></td>`
  }

  return html`
    <td class=${datesMatch(day, selectedDate) ? 'bg-primary text-light' : 'active-cell'} 
      onClick="${() => handleOnClick(day)}"
    >
      ${day.getDate()}
    </td>
  `;
}