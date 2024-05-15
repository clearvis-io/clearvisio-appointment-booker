import {api} from '../helper/index.js'

export function storeStore (store) {
  store.on('@init', () => ({ store: null }))

  store.on('store/set', (perviousStoreValue, newStore) => {
    if (!newStore['email']){
      store.dispatch('moduleState/set', 'error.storeEmail')
    } else {
      return { store: newStore };
    }
  })
}
