import { html, translator as __} from '../../helper/index.js';
import ProcessPrice from '../ProcessPrice.js';

export default ({summary}) => {
  return html`
      <span class="fw-bold">${__('Price')}:</span> <${ProcessPrice} process=${summary.process}/>
    `;
}