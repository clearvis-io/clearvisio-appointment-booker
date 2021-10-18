export function modalStateStore (key) {
  return (store) => {
    store.on('@init', () => ({[key]: false}))

    store.on(`${key}/set`, (fullValue, value) => {
      console.log('set történ', value);
      return {[key]: value}
    })
  }
}
