import {api} from '../helper/index.js'

export function storeStore (store) {
  store.on('@init', () => ({ store: null }))

  store.on('store/set', ({ store }, newStore) => {
    return { store: newStore };
  })
}
