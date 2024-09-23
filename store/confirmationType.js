export function confirmationType (store)  {
  store.on('@init', () => ({ confirmationType: 'email' }))

  store.on('confirmationType/set', (previousValue, confirmationType) => {
    return { confirmationType };
  })
}
