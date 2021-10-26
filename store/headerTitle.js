export function headerTitle (store)  {
  store.on('@init', () => ({ headerTitle: null }))

  store.on('headerTitle/set', (previousValue, headerTitle) => {
    return { headerTitle };
  })
}
