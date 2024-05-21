import { render } from 'preact';
import { StoreContext, useStoreon } from 'storeon/preact'
import {html, api, availableProcessFilter} from './helper/index.js';
import createStore from './store/createStore.js';
import {Carousel, BackButton, CloseButton, GlobalModal, Style} from './component/index.js'
import Header from './component/Header.js';

const knownCustomerFields = [
  'first_name',
  'last_name',
  'birth',
  'gender',
  'ssn',
  'state',
  'postal_code',
  'city',
  'street_address',
  'mobile',
  'email'
];

const BookerComponent = (props) => {
  return html`
    <${Style} colors=${props.colors}/>
    <div class="booker-widget fixed-top">
      <${StoreContext.Provider} value=${props.store}>
        <${GlobalModal}/>
        <${Header}/>
        <div class="bg-body content">
          <${Carousel}/>
          <div class="content-spacer"></div>
        </div>
      <//>
    </div>
  `;
}

export default class ClearvisioAppointmentBooker {
  constructor(options) {
    var store = createStore();
    this.store = store;
    if (!options.medicalConsent) {
      options.medicalConsent = 'explicit';
    }
    this.setupCustomerFields(options);
    this.setupApi(options);
    this.loadStore(options.storeCode)

    if (options.calendarStepShouldBeHidden) {
      store.dispatch('calendarStepShouldBeHidden/set', options.calendarStepShouldBeHidden);
    }
    if (options.calendarRoleCheckMode) {
      store.dispatch('calendarRoleCheckMode/set', options.calendarRoleCheckMode);
    }
    if (options.showFirstAvailableUserItem !== undefined) {
      store.dispatch('showFirstAvailableUserItem/set', options.showFirstAvailableUserItem);
    }
    if (options.showExaminerName !== undefined) {
      store.dispatch('showExaminerName/set', options.showExaminerName);
    }
    if (options.firstEligibleTime) {
      store.dispatch('firstEligibleTime/set', options.firstEligibleTime);
    }
    if (options.language) {
      store.dispatch('language/set', options.language);
    }
    if (options.translationOverrides) {
      store.dispatch('translationOverrides/set', options.translationOverrides);
    }
    if (options.headerTitle) {
      store.dispatch('headerTitle/set', options.headerTitle);
    }
    if (options.country) {
      store.dispatch('country/set', options.country);
    }
    if (options.priceComment) {
      store.dispatch('priceComment/set', options.priceComment);
    }
    if (options.showPrice !== undefined) {
      store.dispatch('showPrice/set', options.showPrice);
    }
    if (options.privacyPolicyLink) {
      store.dispatch('privacyPolicyLink/set', options.privacyPolicyLink);
    }
    if (options.showAppointmentComment) {
      store.dispatch('showAppointmentComment/set', options.showAppointmentComment);
    }
    if (options.autoselectNextFreeSlot) {
      store.dispatch('autoselectNextFreeSlot/set', options.autoselectNextFreeSlot);
    }
    if (options.constantAppointmentCommentText) {
      store.dispatch('constantAppointmentCommentText/set', options.constantAppointmentCommentText);
    }
    if (options.locationName !== undefined) {
      store.dispatch('locationName/set', options.locationName);
    }
    if (options.locationAddress !== undefined) {
      store.dispatch('locationAddress/set', options.locationAddress);
    }
    if (options.showLocation !== undefined) {
      store.dispatch('showLocation/set', options.showLocation);
    }
    if (options.confirmationStatus !== undefined) {
      store.dispatch('appointment/set', {confirmation_status: options.confirmationStatus});
    }
    if (options.timeSlotMode) {
      store.dispatch('timeSelectionUi/timeSlotMode/set', options.timeSlotMode);
    }
    if (options.calendarRange) {
      store.dispatch('timeSelectionUi/calendarRange/set', options.calendarRange);
    }
    if (options.eyeExaminationProcessId) {
      store.dispatch('eyeExaminationProcessId/set', options.eyeExaminationProcessId);
    }

    store.dispatch('store/setStoreSelection/set', options.storeSelection ?? 'no');

    store.dispatch('medicalConsent/set', options.medicalConsent);

    this.createElementAndRender(options);
  }

  setupCustomerFields({customerFields, requiredCustomerFields, medicalConsent}) {
    var config = {};
    requiredCustomerFields =
      ['first_name', 'last_name', 'acceptPrivacyPolicy']
        .concat((medicalConsent != 'disabled') ? ['acceptMedicalRecordsUse'] : [])
        .concat(requiredCustomerFields || ['email']);
    ['first_name', 'last_name', 'acceptPrivacyPolicy']
      .concat((medicalConsent != 'disabled') ? ['acceptMedicalRecordsUse'] : [])
      .concat(customerFields || ['mobile', 'email'])
      .forEach((key) => {
        config[key] = {required: requiredCustomerFields.indexOf(key) != -1}
      });

    this.store.dispatch('customerForm/set', {customerForm: config});
  }

  setupApi(options) {
    this.store.dispatch(
      'api/addHeaders',
      Object.assign({'X-AUTH-API-STORE-CODE': options.storeCode}, options.apiHeaders || {})
    );
    this.store.dispatch('api/setPath', options.apiPath);
  }

  async loadStore(storeCode) {
    var stores = await api.get(this.store, `stores?code=${storeCode}`);
    this.store.dispatch('store/set', stores[0]);
  }

  createElementAndRender({parentElement, colors}) {
    var element = document.createElement('div');
    (parentElement || document.body).appendChild(element);
    render(html`<${BookerComponent} store=${this.store} colors=${colors}/>`, element);

    this.store.on('close', () => element.remove());
  }

  getStore() { return this.store; }
}

window.ClearvisioAppointmentBooker = ClearvisioAppointmentBooker
