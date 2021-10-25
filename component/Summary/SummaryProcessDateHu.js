import { html } from '../../helper/index.js';

export default ({summary}) => {
  return html`
      Az időpontja <span class="fw-bold">${summary.dateTimeStart}</span> időpontban kezdődik
    `;
}
