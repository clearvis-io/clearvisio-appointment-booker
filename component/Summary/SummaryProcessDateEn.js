import { html } from '../../helper/index.js';

export default ({summary}) => {
  return html`
    <div>
      Your appointment starts at <span class="fw-bold">${summary.dateTimeStart}</span>
    </div>
    <div class="text-muted">
      It takes up to ${summary.processLength} minutes and ends at ${summary.dateTimeEnd}
    </div>
    `;
}