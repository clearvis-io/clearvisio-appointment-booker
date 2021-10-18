export function modalStateStore (key) {
  return (store) => {
    store.on('@init', () => ({[key]: false}))

    store.on(`${key}/set`, (fullValue, value) => {
      return {[key]: value}
    })
  }
}
