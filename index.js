import { render } from 'preact';
import { StoreContext, useStoreon } from 'storeon/preact'
import {html, api} from './helper/index.js';
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
    <div class="fixed-top">
      <${StoreContext.Provider} value=${props.store}>
        <${GlobalModal}/>
        <${Header}/>
        <div class="bg-body content">
          <${Carousel}/>
        </div>
      <//>
    </div>
  `;
}

export default class ClearvisioAppointmentBooker {
  constructor(options) {
    var store = createStore();
    this.store = store;
    this.setupCustomerFields(options);
    this.setupApi(options);
    this.loadStore(options.storeCode)
      .then(() => {
        return Promise.all([
          this.loadEyeExaminationProcesses(),
          this.loadCalendars()
        ]);
      })
      .then(() => {
        store.dispatch('moduleState/set', 'idle');
        this.store.dispatch('bookerInit');
      });

    if (options.calendarStepShouldBeHidden) {
      store.dispatch('calendarStepShouldBeHidden/set', true);
    }
    if (options.firstEligibleTime) {
      store.dispatch('firstEligibleTime/set', options.firstEligibleTime);
    }
    if (options.language) {
      store.dispatch('language/set', options.language);
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

    this.createElementAndRender(options);
  }

  setupCustomerFields({customerFields, requiredCustomerFields}) {
    var config = {};
    requiredCustomerFields =
      ['first_name', 'last_name', 'acceptPrivacyPolicy', 'acceptMedicalRecordsUse'].concat(requiredCustomerFields || ['email']);
    ['first_name', 'last_name', 'acceptPrivacyPolicy', 'acceptMedicalRecordsUse']
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

  async loadEyeExaminationProcesses() {
    var storeEntity = this.store.get().store;
    var processes = await api.get(this.store, `eye_examination_processes?hasLength&chain=${storeEntity.chain['@id']}`);
    this.store.dispatch('eyeExaminationProcesses/set', processes);
  }

  async loadCalendars() {
    this.store.dispatch(
      'calendars/set',
      await api.get(
        this.store,
        `appointment_calendars?groups[]=userProfilePictureRead&store=${this.store.get().store['@id']}`
      )
    );
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
