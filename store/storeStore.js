import {api} from '../helper/index.js'

export function storeStore (store) {
  store.on('@init', () => ({ store: null , storeSelection: 'no' }))

  store.on('store/set', ({ store }, newStore) => {
    return { store: newStore };
  })

  store.on('store/setStoreSelection/set', (previousValue, storeSelection) => {
    return { storeSelection };
  })
}
