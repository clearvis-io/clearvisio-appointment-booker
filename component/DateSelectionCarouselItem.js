import {html} from '../helper/index.js'
import DateSelectionDateCard from './DateSelectionDateCard.js'

export default ({dateGroup, visibleDateGroups}) => {
  const {previousDateGroup, currentDateGroup, nextDateGroup} = visibleDateGroups;

  return html`
    <div class="carousel-item
      ${previousDateGroup == dateGroup ? 'carousel-item-prev' : ''}
      ${currentDateGroup == dateGroup ? 'active' : ''}
      ${nextDateGroup == dateGroup ? 'carousel-item-next' : ''}
    ">
      <div class="row">
        ${dateGroup.map((date) => html`<${DateSelectionDateCard} date=${date}/>`)}
      </div>
    </div>
  `;
}
