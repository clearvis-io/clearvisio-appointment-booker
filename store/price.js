export function price (store)  {
  store.on('@init', () => ({ showPrice: true }))

  store.on('showPrice/set', (previousValue, showPrice) => {
    return { showPrice };
  })
}
