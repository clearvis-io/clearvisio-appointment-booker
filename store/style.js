export function style (store)  {
  store.on('@init', () => ({ style: 'fullScreen'}))

  store.on('style/set', (previousValue, style) => {
    return { style };
  })
}