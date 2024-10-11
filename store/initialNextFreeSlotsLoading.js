export function initialNextFreeSlotsLoading (store) {
  store.on('@init', () => ({ initialNextFreeSlotsLoading: true }));

  store.on('initialNextFreeSlotsLoading/set', (previousValue, initialNextFreeSlotsLoading) => {
    return { initialNextFreeSlotsLoading };
  });

  store.on('nextFreeSlotLoading/set', (previousValue, newValue) => {
    if (!newValue) {
      return { initialNextFreeSlotsLoading: false };
    }
  });

  store.on('currentStep/next', (store) => {
    if (store.currentStep == 'appointment') {
      return { initialNextFreeSlotsLoading: true };
    }
  });
}