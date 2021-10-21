const validateNonEmpty = (value, fieldConfig) => {
  if (value === undefined || value === null || value === '') {
    fieldConfig.errors.push('This field is required.');
  }
}

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmail = (value, fieldConfig) => {
  if (value === undefined || value === null || value === '') {
    return;
  }

  if (!emailValidator.test(value.toLowerCase())) {
    fieldConfig.errors.push('Invalid email address.');
  }
}

export function customerForm (store) {
  store.on('@init', () => ({ customerForm: {} }))

  store.on('customerForm/set', ({customerForm}, newValue) => {
    return { customerForm: Object.assign(customerForm, newValue) };
  });

  store.on('customerForm/validateAndNext', ({customerForm, appointment}) => {
    const {customer} = appointment;
    var foundInvalidField = false;

    Object.keys(customerForm).forEach((fieldId) => {
      customerForm[fieldId].errors = [];

      if (customerForm[fieldId].required) {
        validateNonEmpty(customer[fieldId], customerForm[fieldId]);
      }

      if (fieldId == 'email') {
        validateEmail(customer[fieldId], customerForm[fieldId]);
      }

      if (customerForm[fieldId].errors.length) {
        foundInvalidField = true;
      }
    })

    if (foundInvalidField) {
      return {customerForm};
    }

    store.dispatch('currentStep/next');
  })
}
