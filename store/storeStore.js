import {api} from '../helper/index.js'

export function storeStore (store) {
  store.on('@init', () => ({ store: null , storeSelection: 'no', stores: null }))

  store.on('store/set', ({ storeSelection, stores }, newStore) => {
    if (storeSelection !== 'no' && stores == null) {
      requestStores(newStore, storeSelection);
    }

  store.on('store/set', (perviousStoreValue, newStore) => {
    if (!newStore['email']){
      store.dispatch('moduleState/set', 'error.storeEmail')
    }
    return { store: newStore };
  })
  
  async function requestStores({chain}, storeSelection) {
    store.dispatch('stores/set', await api.get(
      store,
      storeSelection == 'all' ? 'stores' : `stores?chain=${chain['@id']}`
    ));
  } 

  store.on('stores/set', (previousValue, stores) => {
    return {stores};
  })

  store.on('store/setStoreSelection/set', (previousValue, storeSelection) => {
    return { storeSelection };
  })
}