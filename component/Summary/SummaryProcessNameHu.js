import { html } from '../../helper/index.js';

export default ({summary}) => {
  return html`
    <span class="fw-bold">${summary.processName}</span>, vele: ${summary.examinerName}
    `;
}