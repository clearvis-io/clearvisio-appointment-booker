import {html} from '../helper/index.js'
import { StoreContext } from 'storeon/preact'
import {Carousel, GlobalModal, Style} from '../component/index.js'
import Header from '../component/Header.js';

export default (props) => {
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