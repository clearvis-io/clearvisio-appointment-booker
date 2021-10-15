import { render } from './web_modules/preact.js';
import { StoreContext } from './web_modules/storeon/preact.js'
import {api, html} from './helper/index.js';
import store from './store/index.js';
import {Carousel,BackButton} from './component/index.js'

const BookerComponent = () => {
  return html`
    <div class="bg-primary bg-gradient text-light p-2">
      <div class="container">
        <h3>
          <${BackButton}/>
          Időponty
        </h3>
      </div>
    </div>
    <div class="bg-body container p-1">
      <${StoreContext.Provider} value=${store}>
        <${Carousel}/>
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

    render(html`<${BookerComponent}/>`, options.element);
  }

  getStore() { return store; }
}

window.ClearvisioAppointmentBooker = ClearvisioAppointmentBooker
