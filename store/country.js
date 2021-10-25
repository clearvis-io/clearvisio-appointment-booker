export function country (store)  {
  store.on('@init', () => ({ country: 'HU' }))

  store.on('country/set', (previousValue, country) => {
    return { country };
  })
}
