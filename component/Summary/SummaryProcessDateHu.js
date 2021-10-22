import { html } from '../../helper/index.js';

export default ({summary}) => {
  return html`
    <div>
      Az időpontja <span class="fw-bold">${summary.dateTimeStart}</span> időpontban kezdődik
    </div>
    <div class="text-muted">
      ${summary.processLength} percet vesz igénybe, ${summary.dateTimeEnd}-ig tart
    </div>
    `;
}