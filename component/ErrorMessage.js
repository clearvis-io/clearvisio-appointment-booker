import {html} from '../helper/index.js'

export default ({message}) => {
  return html`
    <div class="alert alert-danger mt-3" role="alert">
      ${message}
    </div>
  `;
}