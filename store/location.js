export function location (store)  {
  store.on('@init', () => ({ locationName: null, locationAddress: null, showLocation: true }))

  store.on('locationName/set', (previousValue, locationName) => {
    return { locationName };
  })

  store.on('locationAddress/set', (previousValue, locationAddress) => {
    return { locationAddress };
  })

  store.on('showLocation/set', (previousValue, showLocation) => {
    return { showLocation };
  })
}
