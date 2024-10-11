import {useStoreon} from 'storeon/preact'
import DateSelectionCarouselItem from './DateSelectionCarouselItem.js'
import {html, createDateGroups, translator as __} from '../helper/index.js'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export default (props) => {
  const { selectedDate, firstEligibleDate } =
    useStoreon('selectedDate', 'firstEligibleDate');

  const dateGroups = createDateGroups(firstEligibleDate);

  const onPrevious = () => dispatch('selectedDate/set', previousDateGroup[4]);
  const onNext = () => dispatch('selectedDate/set', nextDateGroup[0]);

  var previousDateGroup, currentDateGroup, nextDateGroup;
  for (let i = 0; i < dateGroups.length; i++) {
    previousDateGroup = dateGroups[i - 1];
    currentDateGroup = dateGroups[i];
    nextDateGroup = dateGroups[i + 1];

    if (currentDateGroup.hasDate(selectedDate)) {
      break;
    }
  }

  const visibleDateGroups = {previousDateGroup, currentDateGroup, nextDateGroup};

  return html`
    <div class="dateSelection hstack gap-1">
      <button class="btn btn-outline-secondary" onClick=${onPrevious}
        disabled=${!previousDateGroup}>
        ${'<'}
      </button>
      <div class="carousel-container">
        <div>${__(months[currentDateGroup[0].getMonth()])}</div>
        <div class="carousel slide">
          <div class="carousel-inner">
            ${dateGroups.map((group) => html`<${DateSelectionCarouselItem} dateGroup=${group} visibleDateGroups=${visibleDateGroups}/>`)}
          </div>
        </div>
      </div>
      <button class="btn btn-outline-secondary" onClick=${onNext}
        disabled=${!nextDateGroup}>
        ${'>'}
      </button>
    </div>
  `;
}
