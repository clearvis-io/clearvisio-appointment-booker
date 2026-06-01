import {api} from '../helper/index.js'

export function storeStore (store) {
  store.on('@init', () => ({ store: null , storeSelection: 'no', stores: null, storeCode: null }))

  store.on('store/set', (previousValue, newStore) => {
    if (!newStore.email) {
      store.dispatch('moduleState/set', 'error.storeEmail')
    }

    return { store: newStore };
  })

  async function loadStore(storeCode, storeSelection) {
    try {
      const stores = await api.get(store, `stores?code=${storeCode}`);
      if (stores[0] == undefined) {
        store.dispatch('moduleState/set', 'error.storeCode');
        return;
      }
      if (storeSelection === 'onlyInSameChain') {
        requestStores(storeSelection, stores[0].chain);
      } else {
        store.dispatch('store/set', stores[0]);
      }
    } catch (error) {
      if (error.code == 403) {
        store.dispatch('moduleState/set', 'error.403');
      } else {
        store.dispatch('moduleState/set', 'error.storeCode');
      }
    }
  }

  async function requestStores(storeSelection, chain) {
    try {
      const calendars = await api.get(
        store,
        storeSelection === 'all' ? 'appointment_calendars' : `appointment_calendars?store.chain=${chain['@id']}`
      );
      const stores = {};
      for (const calendar of calendars) {
        if (calendar.user && calendar.store && calendar.online_reservation_allowed) {
          stores[calendar.store['@id']] = calendar.store;
        }
      }
      store.dispatch('stores/set', Object.values(stores).sort((a, b) => a.name.localeCompare(b.name)));
    } catch (error) {
      if (error.code == 403) {
        store.dispatch('moduleState/set', 'error.403');
      } else {
        store.dispatch('moduleState/set', 'error.stores');
      }
    }
  }

  store.on('stores/set', (previousValue, stores) => {
    return {stores};
  })

  store.on('storeCode/set', (previousValue, storeCode) => {
    return { storeCode };
  })

  store.on('store/setStoreSelection/set', ({ storeCode }, storeSelection) => {
    if (storeSelection === 'no' || storeSelection === 'onlyInSameChain') {
      loadStore(storeCode, storeSelection);
    } else if (storeSelection === 'all') {
      requestStores(storeSelection);
    }
    return { storeSelection };
  })
}
