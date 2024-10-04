import {useStoreon} from 'storeon/preact'
import DateSelectionCarouselItem from './DateSelectionCarouselItem.js'
import {html, createDateGroups, createNextFreeSlotsForDateKey, translator as __} from '../helper/index.js'
import { useEffect } from 'preact/hooks';

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
  const { selectedDate, appointment, dispatch, nextFreeSlots, selectedCalendar, firstEligibleDate, calendarInitialized } =
    useStoreon('selectedDate', 'appointment', 'nextFreeSlots', 'selectedCalendar', 'firstEligibleDate', 'calendarInitialized');

  const dateGroups = createDateGroups(firstEligibleDate);

  const onPrevious = () => dispatch('selectedDate/set', previousDateGroup[4]);
  const onNext = () => dispatch('selectedDate/set', nextDateGroup[0]);

  var date = new Date(Date.now() + 864e5), key, found = false;

  while (nextFreeSlots[key = createNextFreeSlotsForDateKey(appointment, selectedCalendar, date)]) {
    if (nextFreeSlots[key].status !== 'empty') {
      found = true;
      break;
    }

    date.setDate(date.getDate() + 1);
  }

  if (found) {
    useEffect(() => {
      if (firstEligibleDate && !calendarInitialized) {
        console.log('BENNE', date)
        dispatch('selectedDate/set', date);
        dispatch('calendarInitialized/set',true);
      }
    }, [date]);
  }

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
