import { html } from '../../helper/index.js';

export default ({summary}) => {
  return html`
      Your appointment starts at <span class="fw-bold">${summary.dateTimeStart}</span>
    `;
}
