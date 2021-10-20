import {api} from '../helper/index.js'

export function selectedDate (store) {
  store.on('@init', () => ({ selectedDate: new Date }))

  store.on('selectedDate/set', ( previousValue, selectedDate) => {
    return { selectedDate };
  })
}
