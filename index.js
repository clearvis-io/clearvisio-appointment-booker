import { options, render } from 'preact';
import { StoreContext, useStoreon } from 'storeon/preact'
import {html, api, availableProcessFilter} from './helper/index.js';
import createStore from './store/createStore.js';
import {Carousel, BackButton, CloseButton, GlobalModal, Style} from './component/index.js'
import Header from './component/Header.js';
import { style } from './store/style.js';
import { storeStore } from './store/storeStore.js';

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
    <div class="booker-widget fixed-top ${props.style}">
      <${StoreContext.Provider} value=${props.store}>
        <${GlobalModal}/>
        <${Header}/>
        <div class="bg-body content ${props.style}-content">
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
      .then(() => {
        return Promise.all([
          this.loadEyeExaminationProcesses(options),
          this.loadCalendars()
        ]);
      })
      .then(([processes, calendars]) => {
        this.store.dispatch('eyeExaminationProcesses/set',
          availableProcessFilter(processes, calendars, options.calendarRoleCheckMode)
        );
        this.store.dispatch('calendars/set', calendars);
        store.dispatch('moduleState/set', 'idle');
        this.store.dispatch('bookerInit');
      });

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
    if (options.appointmentCommentRequired) {
      store.dispatch('appointmentCommentRequired/set', options.appointmentCommentRequired);
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
    if (options.style) {
      store.dispatch('style/set', options.style);
    }

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

  async loadEyeExaminationProcesses({eyeExaminationProcessId}) {
    if (eyeExaminationProcessId) {
      return [await api.get(this.store, `eye_examination_processes/${eyeExaminationProcessId}`)]
        .filter((process) => process);
    }
    var storeEntity = this.store.get().store;
    return await api.get(this.store, `eye_examination_processes?hasLength&chain=${storeEntity.chain['@id']}`);
  }

  async loadCalendars() {
    return await api.get(this.store,
      `appointment_calendars?groups[]=userProfilePictureRead&store=${this.store.get().store['@id']}`
    );
  }

  createElementAndRender({parentElement, colors, cssUrls}) {
    if (this.store.get().style == 'embedded-safe') {
      const shadowRoot = parentElement.attachShadow({ mode: 'open' });

      async function loadCSSFiles(cssFiles) {
        for(let x = 0; x < cssFiles.length; x++) {
          try {
            const response = await fetch(cssFiles[x]);
            if (!response.ok) {
                throw new Error('Failed to load CSS file');
            }
            let cssText = await response.text();
            cssText = cssText.replace(/:root/g, ':host');
            
            const style = document.createElement('style');
            style.textContent = cssText;
            shadowRoot.appendChild(style);
          } catch (error) {
            console.error('Error loading CSS:', error);
        }
        };
      };

      var element = document.createElement('div');
      element.id = 'embeddedShadowBooker';
      loadCSSFiles(cssUrls);
      shadowRoot.appendChild(element);
    } else {
      var element = document.createElement('div');
      (parentElement || document.body).appendChild(element);
    }
    this.store.dispatch('rootElement/set', element);
    render(html`<${BookerComponent} store=${this.store} colors=${colors} style=${this.store.get().style}/>`, element);

    this.store.on('close', () => {
      element.remove();
      if (parentElement) {
        parentElement.remove();
      }
    });
  }

  getStore() { return this.store; }
}

window.ClearvisioAppointmentBooker = ClearvisioAppointmentBooker
