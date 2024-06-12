import {html} from '../helper/index.js'
import { StoreContext } from 'storeon/preact'
import {Carousel, GlobalModal, Style} from '../component/index.js'
import Header from '../component/Header.js';

export default (props) => {
  return html`
    <${Style} colors=${props.colors}/>
    <div class="modal" style="display: block">
      <div class="modal-dialog fit-content">
        <div class="modal-content">
          <div class="modal-body modal-xl booker-widget">
            <${StoreContext.Provider} value=${props.store}>
              <${GlobalModal}/>
              <${Header}/>
              <div class="bg-body content">
                <${Carousel}/>
                <div class="content-spacer"></div>
              </div>
            <//>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show"></div>
  `;
}