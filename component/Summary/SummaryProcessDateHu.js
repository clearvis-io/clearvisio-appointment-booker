import { html } from '../../helper/index.js';

export default ({summary}) => {
  if (!summary.dateTimeStart || !summary.dateTimeEnd || !summary.processLength) {
    return html``;
  }

  return html`
    <div>
      Az időpontja <span class="fw-bold">${summary.dateTimeStart}</span> időpontban kezdődik
    </div>
    <div class="text-muted">
      ${summary.processLength} percet vesz igénybe, ${summary.dateTimeEnd}-ig tart
    </div>
    `;
}