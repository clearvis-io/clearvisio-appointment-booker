import {useStoreon} from 'storeon/preact'
import {html, datesMatch, translator as __} from '../helper/index.js'

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
  const { selectedDate, dispatch } = useStoreon('selectedDate')
  
  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const previoudMonthAvailable = new Date() < new Date(year, month, 0);

  const firstDay = new Date(year, month, 1);
  const days = [];
  const daysSliced = [];

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

  const handleOnClick = (day) => {
    dispatch('selectedDate/set', day);
  }
  
  return html`
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <table class="table table caption-top calendar">
            <caption>
              <button
                class="btn btn-outline-secondary month-previus ${previoudMonthAvailable ? null : 'disabled'}" 
                onClick="${previusMonth}"
              >
                ${'<'}
              </button>
              ${year + ' ' + __(monthsOfYear[month])}
              <button class="btn btn-outline-secondary month-next" onClick="${nextMonth}">
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
                      <td
                        class="${
                          day < new Date() ?
                            'disabled' :
                            datesMatch(day, selectedDate) ? 'bg-primary text-light' : null
                        }" 
                        onClick="${() => handleOnClick(day)}"
                      >
                        ${day.getDate()}
                      </td>
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