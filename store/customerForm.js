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

  if (!emailValidator.test(value.trim().toLowerCase())) {
    fieldConfig.errors.push('Invalid email address.');
  }
}

const validateInput = (input, fieldConfig) => {
  if (typeof input !== 'string') return;
  
  if (/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi.test(input)) {
    fieldConfig.errors.push('Suspicious input detected: Script tags are not allowed');
    return;
  }
  
  if (/<[^>]*>/g.test(input)) {
    fieldConfig.errors.push('Suspicious input detected: HTML tags are not allowed');
    return;
  }
  
  if (/javascript:/gi.test(input)) {
    fieldConfig.errors.push('Suspicious input detected: JavaScript protocols are not allowed');
    return;
  }
  
  if (/on\w+\s*=/gi.test(input)) {
    fieldConfig.errors.push('Suspicious input detected: Event handlers are not allowed');
    return;
  }
};

export function customerForm (store) {
  store.on('@init', () => ({ customerForm: {}, commentError: null, customerFormGlobalErrors: [] }))

  store.on('customerForm/set', ({customerForm, customerFormGlobalErrors, commentError}, newValue) => {
    return {
      customerForm: Object.assign(customerForm, newValue.customerForm || {}),
      customerFormGlobalErrors: newValue.customerFormGlobalErrors || customerFormGlobalErrors,
      commentError: newValue.commentError === undefined ? commentError : newValue.commentError
    };
  });

  store.on('customerForm/validateAndNext', ({customerForm, appointment, appointmentCommentRequired}) => {
    const {customer} = appointment;
    var foundInvalidField = false;
    var commentError = null;

    if (appointmentCommentRequired && !(appointment.comment || '').trim()) {
      foundInvalidField = true;
      commentError = 'This field is required.';
    }

    Object.keys(customerForm).forEach((fieldId) => {
      customerForm[fieldId].errors = [];

      validateInput(customer[fieldId], customerForm[fieldId]);

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
      return {customerForm, customerFormGlobalErrors: [], commentError};
    }

    store.dispatch('currentStep/next');
  })
}
