import {html} from '../helper/index.js'

export default () => {
  return html`
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
    </div>
  `;
}
