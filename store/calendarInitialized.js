export function calendarInitialized (store)  {
  store.on('@init', () => ({ calendarInitialized: false }))

  store.on('calendarInitialized/set', (previousValue, calendarInitialized) => {
    return { calendarInitialized };
  })

  store.on('selectedCalendar/set', () => {
    return { calendarInitialized: false };
  })
}