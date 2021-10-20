import {html} from '../helper/index.js'
import DateSelectionCarousel from './DateSelectionCarousel.js'

export default () => {
  return html`
    <${DateSelectionCarousel}/>
    <ul class="list-group">
      <li class="list-group-item">TimeSlotSelection</li>
    </ul>
  `;
}
