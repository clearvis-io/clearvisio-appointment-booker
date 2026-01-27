import {api} from '../helper/index.js'

export function storeStore (store) {
  store.on('@init', () => ({ store: null , storeSelection: 'no', stores: null }))

  store.on('store/set', ({ storeSelection, stores }, newStore) => {
    if (storeSelection !== 'no' && stores == null) {
      requestStores(newStore, storeSelection);
    }

    if (!newStore.email) {
      store.dispatch('moduleState/set', 'error.storeEmail')
    }

    return { store: newStore };
  })

  async function requestStores({chain}, storeSelection) {
    const calendars = await api.get(
      store,
      storeSelection == 'all' ? 'appointment_calendars' : `appointment_calendars?store.chain=${chain['@id']}`
    );

    const stores = {}
    for (const calendar of calendars) {
      if (calendar.user && calendar.store && calendar.online_reservation_allowed) {
        stores[calendar.store['@id']] = calendar.store
      }
    }

    store.dispatch('stores/set', Object.values(stores).sort((a, b) => a.name.localeCompare(b.name)));
  }

  store.on('stores/set', (previousValue, stores) => {
    return {stores};
  })

  store.on('store/setStoreSelection/set', (previousValue, storeSelection) => {
    return { storeSelection };
  })
}
