export function booking (store)  {
  store.on('@init', () => ({ booking: false }))

  store.on('booking/set', (previousValue, booking) => {
    return { booking };
  })
}
