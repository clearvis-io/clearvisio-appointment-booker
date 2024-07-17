export function parentWidth (store)  {
  store.on('@init', () => ({ parentWidth: null }))

  store.on('parentWidth/set', (previousValue, parentWidth) => {
    return { parentWidth };
  })
}