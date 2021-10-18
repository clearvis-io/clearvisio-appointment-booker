import { render } from './web_modules/preact.js';
import { StoreContext } from './web_modules/storeon/preact.js'
import {html} from './helper/index.js';
import createStore from './store/createStore.js';
import {Carousel, BackButton, CloseButton, GlobalModal} from './component/index.js'

const BookerComponent = (props) => {
  return html`
    <div class="clearvisio-appointment-booker fixed-top">
      <${StoreContext.Provider} value=${props.store}>
        <${GlobalModal}/>
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
    var store = createStore();
    this.store = store;
    store.dispatch(
      'api/addHeaders',
      Object.assign({'X-AUTH-API-STORE-CODE': options.storeCode}, options.apiHeaders || {})
    );
    store.dispatch('api/setPath', options.apiPath);
    store.dispatch('apiInit');

    if (options.language) {
      store.dispatch('language/set', options.language);
    }

    var element = document.createElement('div');
    (options.element || document.body).appendChild(element);
    render(html`<${BookerComponent} store=${store}/>`, element);

    store.on('close', () => element.remove());
  }

  getStore() { return this.store; }
}

window.ClearvisioAppointmentBooker = ClearvisioAppointmentBooker
