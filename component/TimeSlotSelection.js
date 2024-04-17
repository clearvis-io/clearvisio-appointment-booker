import {html} from '../helper/index.js'
import {useStoreon} from 'storeon/preact'
import DateSelectionCarousel from './DateSelectionCarousel.js'
import DateSelectionMonthlyCalendar from './DateSelectionMonthlyCalendar.js'
import TimeSlotListSingleColumn from './TimeSlotListSingleColumn.js'
import TimeSlotListPartOfDay from './TimeSlotListPartOfDay.js'
 
export default () => {
  const { calendarRange, timeSlotMode } = useStoreon('calendarRange', 'timeSlotMode')

  return html`
    <${calendarRange == 'fiveDays' ? DateSelectionCarousel : DateSelectionMonthlyCalendar}/>
    <${timeSlotMode == 'partOfDay' ? TimeSlotListSingleColumn : TimeSlotListPartOfDay}/>
  `;
}
