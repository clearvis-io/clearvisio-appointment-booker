export function rootElement (store)  {
  store.on('@init', () => ({ rootElement: '' }))

  store.on('rootElement/set', (previousValue, rootElement) => {
    return { rootElement };
  })
}