import { render } from './web_modules/preact.js';
import { StoreContext } from './web_modules/storeon/preact.js'
import {api, html} from './helper/index.js';
import store from './store/index.js';
import {Carousel, BackButton, CloseButton} from './component/index.js'

const BookerComponent = () => {
  return html`
    <div class="clearvisio-appointment-booker fixed-top">
      <${StoreContext.Provider} value=${store}>
        <div class="bg-primary bg-gradient text-light p-2">
          <div class="container">
            <${CloseButton}/>
            <h3>
              <${BackButton}/>
              Időponty
            </h3>
          </div>
        </div>
        <div class="bg-body content container p-1">
            <${Carousel}/>
        </div>
      <//>
    </div>
  `;
}

export default class ClearvisioAppointmentBooker {
  constructor(options) {
    api.addHeader('X-AUTH-API-STORE-CODE', options.storeCode)
    for (const key in options.apiHeaders || {}) {
      api.addHeader(key, options.apiHeaders[key]);
    }
    api.setPath(options.apiPath);
    store.dispatch('apiInit');

    if (options.language) {
      store.dispatch('language/set', options.language);
    }

    var element = document.createElement('div');
    (options.element || document.body).appendChild(element);
    render(html`<${BookerComponent}/>`, element);

    store.on('close', () => element.remove());
  }

  getStore() { return store; }
}

window.ClearvisioAppointmentBooker = ClearvisioAppointmentBooker
