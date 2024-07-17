const availableStates = ['idle', 'loading', 'error', 'success']

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

  store.on('eyeExaminationProcesses/set', ({ moduleState }, newProcesses) => {
    if (moduleState !== 'idle') {
        store.dispatch('moduleState/set', 'idle');
        store.dispatch('bookerInit');
    }
  });
}
