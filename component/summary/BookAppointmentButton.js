import {html, translator as __, api, nameFormatter, ValidationError, phoneNumberParser} from '../../helper/index.js'
import {useStoreon} from 'storeon/preact'
import {useState} from 'preact/hooks';
import Spinner from '../Spinner.js'

const createCustomerAndAppointmet = async (storeContent) => {
  try {
    var customer = await createCustomer(storeContent);
  } catch (error) {
    if (error instanceof ValidationError) {
      handleCustomerValidationError(storeContent, error);
      return;
    }
    throw error;
  }

  await createConsent(storeContent, customer);
  await createAppointmet(storeContent, customer);
  storeContent.dispatch('moduleState/set', 'success');
}

const createCustomer = async (storeContent) => {
  let customer = Object.assign(
    {}, storeContent.appointment.customer, {
      medical_records_allowed: (storeContent.medicalConsent != 'disabled') ? true : null,
      country: storeContent.country,
      mobile: storeContent.appointment.customer.mobile ?
        phoneNumberParser(storeContent.store.chain.language, storeContent.appointment.customer.mobile) :
        null
    }
  );

  if ('birth' in customer) {
    customer.birth = formatBirthDate(customer.birth);
  }

  Object.keys(customer).forEach((key) => {
    if (typeof customer[key] === 'string') {
      customer[key] = customer[key].trim();
    }
  });

  return await api.post(storeContent, 'customers', customer);
}

const formatBirthDate = (birthDate) => {
  if (!birthDate || !(birthDate instanceof Date)) {
    return null;
  }
  
  const year = birthDate.getFullYear();
  const month = String(birthDate.getMonth() + 1).padStart(2, '0');
  const day = String(birthDate.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}T00:00:00+00:00`;
  
  return formattedDate;
};

const handleCustomerValidationError = async (storeContent, error) => {
  const {customerForm} = storeContent;
  var customerFormGlobalErrors = [];
  for (let i = 0; i < error.getValidations().length; i++) {
    let {propertyPath, message} = error.getValidations()[i];
    if (propertyPath == '') {
      customerFormGlobalErrors.push(message);
      continue;
    }
    if (!customerForm[propertyPath].errors) {
      customerForm[propertyPath].errors = []
    }
    customerForm[propertyPath].errors.push(message);
  }

  storeContent.dispatch('customerForm/set', {customerForm, customerFormGlobalErrors});
  storeContent.dispatch('currentStep/set', 'customer');
  storeContent.dispatch('booking/set', false);
}

const createConsent = async (storeContent, customer) => {
  await api.post(storeContent, 'customer_consents', {
    customer: customer['@id'],
    approved_at: new Date,
    medical_records_allowed: (storeContent.medicalConsent != 'disabled'),
    source: 'api'
  });
}

const createAppointmet = async (storeContent, customer) => {
  const {appointment, language, translationOverrides, constantAppointmentCommentText} = storeContent;
  let comment = constantAppointmentCommentText ? constantAppointmentCommentText : '';
  if (appointment.comment) {
    comment = (comment ? comment + "\n\n" : '') + appointment.comment;
  }

  await api.post(
    storeContent,
    'appointment_events',
    Object.assign({}, appointment, {
      customer: customer['@id'],
      eye_examination_process: appointment.eye_examination_process['@id'],
      calendar: appointment.calendar['@id'],
      comment: comment ? comment : undefined,
      title: __(
        "%customer%'s examination",
        {customer: nameFormatter.format(customer, language)},
        {language, translationOverrides}
      ),
      status: 'booked',
      should_send_confirmation_email: true,
      should_send_reminder_email: true,
      source: 'online'
    })
  );
}

export default (props) => {
  var storeContent = useStoreon(
    'appointment', 'api', 'booking', 'language', 'customerForm', 'customerFormGlobalErrors',
    'country', 'moduleState', 'store', 'translationOverrides', 'constantAppointmentCommentText',
    'medicalConsent'
  );
  const { booking, moduleState, dispatch } = storeContent;

  const onClick = async () => {
    dispatch('booking/set', true);
    try {
      await createCustomerAndAppointmet(storeContent);
    } catch (error) {
      dispatch('moduleState/set', 'error');
      throw error;
    }
  }

  return html`
    <div class="d-grid">
      <button type="button" onClick=${onClick} disabled=${moduleState != 'idle'}
        class="btn btn-primary btn-lg">
        ${booking && moduleState == 'idle' ? html`<${Spinner}/>` : __('Confirm appointment')}
      </button>
    </div>
  `;
}
