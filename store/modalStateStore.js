export function modalStateStore (key, {visible} = {visible: false}) {
  return (store) => {
    store.on('@init', () => ({[key]: visible}))

    store.on(`${key}/set`, (fullValue, value) => {
      return {[key]: value}
    })
  }
}
