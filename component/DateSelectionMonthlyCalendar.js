import {useStoreon} from 'storeon/preact'
import {html, createNextFreeSlotsForDateKey} from '../helper/index.js'
import {translator as __} from '../helper/index.js'
import DateSelectionMonthlyCalendarCell from './DateSelectionMonthlyCalendarCell.js';

const monthsOfYear = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];
const abbrivedDayOfTheWeek = [
  '@abbrMonday',
  '@abbrTuesday',
  '@abbrWednesday',
  '@abbrThursday',
  '@abbrFriday',
  '@abbrSaturday',
  '@abbrSunday'
];

export default () => {
  const { selectedCalendar, selectedDate, nextFreeSlots, appointment, dispatch} =
    useStoreon('selectedCalendar', 'appointment', 'nextFreeSlots', 'selectedDate')

  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const previousMonthAvailable = new Date() < new Date(year, month, 0);

  const firstDay = new Date(year, month, 1);
  const days = [];
  const daysSliced = [];
  var monthLoaded = true;

  for (let i = selectedDate.getDate(); i <= daysInMonth; i++) {
    const freeSlot = nextFreeSlots[createNextFreeSlotsForDateKey(appointment, selectedCalendar, new Date(year, month, i))];
    if (freeSlot == undefined || freeSlot.status == 'incomplete') {
      console.log('EZZ', freeSlot, new Date(year, month, i))
      monthLoaded = false;
      break;
    }
  }

  for (let i = 0 ; i < (firstDay.getDay() || 7) - 1; i++) {
    days.push(null)
  }

  for (let i = 1 ; i <= daysInMonth; i++) {
    days.push(new Date(year, month, i))
  };
  for (let i = 0; i < days.length; i += 7) {
    daysSliced.push(days.slice(i, i + 7));
  };

  const nextMonth = () => {
    dispatch('selectedDate/set', new Date(year, month + 1, 1));
  }

  const previusMonth = () => {
    dispatch('selectedDate/set', new Date(year, month, 0));
  }
  
  return html`
    <div class="container text-center calendar">
      <div class="row">
        <div class="col">
          <table class="table table caption-top placeholder-glow">
            <caption class="text-center display-6">
              <button
                class="btn btn-outline-secondary month-previus ${previousMonthAvailable ? 
                  monthLoaded ? null : 'disabled'
                  : 'disabled'}" 
                onClick="${previusMonth}"
              >
                ${'<'}
              </button>
              ${year + ' ' + __(monthsOfYear[month])}
              <button class="btn btn-outline-secondary month-next ${monthLoaded ? null : 'disabled'}" onClick="${nextMonth}">
                ${'>'}
              </button>
            </caption>
            <thead>
              <tr>
                ${abbrivedDayOfTheWeek.map(day => html`<th scope="col">${__(day)}</th>`)}
              </tr>
            </thead>
            <tbody>
              ${daysSliced.map(week => html`
                <tr>
                  ${week.map(day => day ?
                    html`
                      <${DateSelectionMonthlyCalendarCell} day=${day}/>
                    `: 
                      html`<td></td>`
                  )}
                </tr>
              `)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}