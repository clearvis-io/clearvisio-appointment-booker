export function rootElement (store)  {
  store.on('@init', () => ({ rootElement: null }))

  store.on('rootElement/set', (previousValue, rootElement) => {
    return { rootElement };
  })
}