import {html} from '../helper/index.js'
import {translator as __} from '../helper/index.js'

export default () => {
  return html`
    <ul class="list-inline text-center">
      <li class="list-inline-item">
        <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
      </li>
      <li class="list-inline-item">
        ${__('Booking the appointment')}
      </li>
    </ul>
    
  `;
}