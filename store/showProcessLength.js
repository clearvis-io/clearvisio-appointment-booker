export function showProcessLength (store)  {
    store.on('@init', () => ({ showProcessLength: true }))

    store.on('showProcessLength/set', (previousValue, showProcessLength) => {
      return { showProcessLength };
    })
  }
