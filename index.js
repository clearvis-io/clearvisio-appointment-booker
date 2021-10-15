import { render } from './web_modules/preact.js';
import { StoreContext } from './web_modules/storeon/preact.js'
import {api, html} from './helper/index.js';
import store from './store/index.js';
import {EyeExaminationProcessList} from './component/index.js'

const BookerComponent = () => {
  return html`
    <div class="container">
      <h1>Időponty</h1>
      <${StoreContext.Provider} value=${store}>
        <${EyeExaminationProcessList}/>
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
}

window.ClearvisioAppointmentBooker = ClearvisioAppointmentBooker
