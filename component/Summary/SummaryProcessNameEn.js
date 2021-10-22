import { html } from '../../helper/index.js';

export default ({summary}) => {
  if (!summary.processName || !summary.examinerName) {
    return html``;
  }

  return html`
    <span class="fw-bold">${summary.processName}</span> with: ${summary.examinerName}
    `;
}