import {html} from '../helper/index.js'
import {useStoreon} from 'storeon/preact'
import {translator as __} from '../helper/index.js'

export default () => {
  const {errorMessage} =   useStoreon('errorMessage')
  return html`
    <div class="alert alert-danger mt-3" role="alert">
      ${errorMessage}
    </div>
  `;
}