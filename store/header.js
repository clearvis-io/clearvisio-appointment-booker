export function header (store)  {
  store.on('@init', () => ({ header: {} }))

  store.on('header/set', (previousValue, header) => {
    return { header };
  })
}
