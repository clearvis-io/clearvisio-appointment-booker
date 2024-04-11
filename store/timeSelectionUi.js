export function timeSelectionUi (store)  {
    store.on('@init', () => ({ calendarRange: 'fiveDays', timeSlotMode: 'singleColumn' }))
  
    store.on('timeSelectionUi/timeSlotMode/set', (previousValue, timeSlotMode) => {
      return { timeSlotMode };
    })
    store.on('timeSelectionUi/calendarRange/set', (previousValue, calendarRange) => {
      return { calendarRange };
    })
  }
  