import { useStoreon } from '../_snowpack/pkg/storeon/preact.js'
import {html} from '../helper/index.js'
import DateSelectionCarousel from './DateSelectionCarousel.js'
import TimeSlotListSingleColumn from './TimeSlotListSingleColumn.js'
import TimeSlotListPartOfDay from './TimeSlotListPartOfDay.js'

export default () => {
  const { timeSlotMode } = useStoreon('timeSlotMode');

  return html`
    <${DateSelectionCarousel}/>
    <${timeSlotMode == 'partOfDay' ? TimeSlotListSingleColumn : TimeSlotListPartOfDay}/>
  `;
}
