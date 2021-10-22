import { html } from '../../helper/index.js';

export default (params) => {
  if (!params.processPrice) {
    return html``;
  }

  return html`
    <li class="list-group-item">
      <span class="fw-bold">Ár:</span> ${params.processPrice}
    </li>
    `;
}