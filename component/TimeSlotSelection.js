import {html} from '../helper/index.js'
import {useStoreon} from 'storeon/preact'
import DateSelectionCarousel from './DateSelectionCarousel.js'
import DateSelectionMonthlyCalendar from './DateSelectionMonthlyCalendar.js'
import TimeSlotListSingleColumn from './TimeSlotListSingleColumn.js'
import TimeSlotListPartOfDay from './TimeSlotListPartOfDay.js'
import SlotSpinner from './SlotSpinner.js'
import ErrorMessage from './ErrorMessage.js'

export default () => {
  const { calendarRange, timeSlotMode, slotSelection} = 
    useStoreon('calendarRange', 'timeSlotMode','slotSelection')

  return html`
    ${slotSelection.inProgress ? html`<${SlotSpinner}/>` : html`
      <${calendarRange == 'fiveDays' ? DateSelectionCarousel : DateSelectionMonthlyCalendar}/>
      ${slotSelection.errorMessage != null ? html`<${ErrorMessage} message=${slotSelection.errorMessage}/>` : null}
      <${timeSlotMode == 'singleColumn' ? TimeSlotListSingleColumn : TimeSlotListPartOfDay}/>
    `}
  `;
}