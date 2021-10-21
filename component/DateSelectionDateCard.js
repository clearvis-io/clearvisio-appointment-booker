import {useStoreon} from 'storeon/preact'
import {html, datesMatch, translator as __} from '../helper/index.js'

const abbrivedDayOfTheWeek = [
  '@abbrSunday',
  '@abbrMonday',
  '@abbrTuesday',
  '@abbrWednesday',
  '@abbrThursday',
  '@abbrFriday',
  '@abbrSaturday'
];

export default ({date}) => {
  const { selectedDate, dispatch } = useStoreon('selectedDate')

  const onClick = () => dispatch('selectedDate/set', date);

  return html`
    <div class="col">
      <div class="card ${datesMatch(date, selectedDate) ? 'bg-primary text-light' : ''}" onClick="${onClick}">
        <div class="card-body user-select-none p-1">
          <h6 class="card-subtitle text-center ${!datesMatch(date, selectedDate) ? 'text-muted' : ''}">
            ${__(abbrivedDayOfTheWeek[date.getDay()])}
          </h6>
          <h5 class="card-title text-center">${date.getDate()}</h5>
        </div>
      </div>
    </div>
  `;
}
