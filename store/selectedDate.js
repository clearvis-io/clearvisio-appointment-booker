import {api} from '../helper/index.js'

export function selectedDate (store) {
  store.on('@init', () => {
    var date = new Date;
    date.setDate(date.getDate() + 1);

    return { selectedDate: date }
  });

  store.on('selectedDate/set', ( previousValue, selectedDate) => {
    return { selectedDate };
  })
}
