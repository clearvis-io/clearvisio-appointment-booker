import { html } from '../../helper/index.js';

export default (params) => {
  if (!params.dateTimeStart || !params.dateTimeEnd || !params.processLength) {
    return html``;
  }

  return html`
    <li class="list-group-item">
      <div>
        Az időpontja <span class="fw-bold">${params.dateTimeStart}</span> időpontban kezdődik
      </div>
      <div class="text-muted">
        ${params.processLength} percet vesz igénybe, ${params.dateTimeEnd}-ig tart
      </div>
    </li>
    `;
}