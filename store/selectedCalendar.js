export function selectedCalendar (store)  {
  store.on('@init', () => ({ selectedCalendar: null }))

  store.on('selectedCalendar/set', (previousValue, selectedCalendar) => {
    return { selectedCalendar };
  })
}
