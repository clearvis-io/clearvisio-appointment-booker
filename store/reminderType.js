export function reminderType (store)  {
  store.on('@init', () => ({ reminderType: 'email' }))

  store.on('reminderType/set', (previousValue, reminderType) => {
    return { reminderType };
  })
}
