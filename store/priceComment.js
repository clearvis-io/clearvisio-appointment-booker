export function priceComment (store)  {
  store.on('@init', () => ({ priceComment: null }))

  store.on('priceComment/set', (previousValue, priceComment) => {
    return { priceComment };
  })
}
