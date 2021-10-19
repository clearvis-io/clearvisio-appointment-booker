const availableStates = ['idle', 'loading', 'error']

export function moduleState (store) {
  store.on('@init', () => ({ moduleState: 'loading' }))

  store.on('moduleState/set', ({moduleState}, newValue) => {
    newValue = (availableStates.indexOf(newValue) != -1) ? newValue : moduleState
    if (newValue == 'idle') {
      store.dispatch('globalModalState/set', false);
    } else {
      store.dispatch('globalModalState/set', true);
    }

    return { moduleState: newValue };
  })
}
