import {useStoreon} from 'storeon/preact'
import {html, datesMatch, createNextFreeSlotsForDateKey, translator as __} from '../helper/index.js'



export default ({day}) => {
  const { selectedCalendar, selectedDate, nextFreeSlots, appointment, dispatch, firstEligibleDate} =
    useStoreon('selectedCalendar', 'appointment', 'nextFreeSlots', 'selectedDate', 'firstEligibleDate')
  const nextFreeSlotsOfDay = nextFreeSlots[createNextFreeSlotsForDateKey(appointment, selectedCalendar, day)]

  const handleOnClick = (day) => {
    dispatch('selectedDate/set', day);
  };

  if (day < new Date(firstEligibleDate).setHours(0,0,0,0) || (nextFreeSlotsOfDay && nextFreeSlotsOfDay.status == 'empty')) {
    return html`<td class='table-active disabled'>${day.getDate()}</td>`;
  }

  if (!nextFreeSlotsOfDay) {
    return html`<td class="placeholder">${day.getDate()}</td>`
  }

  return html`
    <td class=${datesMatch(day, selectedDate) ? 'bg-primary text-light' : 'active-cell'} 
      onClick="${() => handleOnClick(day)}"
    >
      ${day.getDate()}
    </td>
  `;
}