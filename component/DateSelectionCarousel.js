import {useStoreon} from '../web_modules/storeon/preact.js'
import DateSelectionCarouselItem from './DateSelectionCarouselItem.js'
import {html, createDateGroups} from '../helper/index.js'

export default (props) => {
  const { selectedDate, dispatch } = useStoreon('selectedDate')

  const dateGroups = createDateGroups();

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
      <div class="carousel slide">
        <div class="carousel-inner">
          ${dateGroups.map((group) => html`<${DateSelectionCarouselItem} dateGroup=${group} visibleDateGroups=${visibleDateGroups}/>`)}
        </div>
      </div>
        <button class="btn btn-outline-secondary" onClick=${onNext}
          disabled=${!nextDateGroup}>
          ${'>'}
        </button>
    </div>
  `;
}
