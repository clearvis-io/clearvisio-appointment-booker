import {html} from '../helper/index.js'
import {useStoreon} from 'storeon/preact'
import DateSelectionCarousel from './DateSelectionCarousel.js'
import DateSelectionMonthlyCalendar from './DateSelectionMonthlyCalendar.js'
import TimeSlotListSingleColumn from './TimeSlotListSingleColumn.js'
import TimeSlotListPartOfDay from './TimeSlotListPartOfDay.js'
import slotSpinner from './slotSpinner.js'
import ErrorMessage from './ErrorMessage.js'

 
export default () => {
  const { calendarRange, timeSlotMode, inProgress, errorMessage} = 
    useStoreon('calendarRange', 'timeSlotMode', 'inProgress', 'errorMessage')

  return html`
    ${inProgress ? html`<${slotSpinner}/>` : html`
      <${calendarRange == 'fiveDays' ? DateSelectionCarousel : DateSelectionMonthlyCalendar}/>
      ${errorMessage != null ? html`<${ErrorMessage}/>` : null}
      <${timeSlotMode == 'singleColumn' ? TimeSlotListSingleColumn : TimeSlotListPartOfDay}/>
    `}
  `;
}
