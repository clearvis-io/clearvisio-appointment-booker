export function customerForm (store) {
  store.on('@init', () => ({ customerForm: {} }))

  store.on('customerForm/set', ({customerForm}, newValue) => {
    return { customerForm: Object.assign(customerForm, newValue) };
  })
}
