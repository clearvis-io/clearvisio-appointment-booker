import { html } from '../../helper/index.js';

export default (params) => {
  if (!params.processName || !params.examinerName) {
    return html``;
  }

  return html`
    <li class="list-group-item">
      <span class="fw-bold">${params.processName}</span>, vele: ${params.examinerName}
    </li>
    `;
}