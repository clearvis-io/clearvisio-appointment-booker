import { useStoreon } from '../_snowpack/pkg/storeon/preact.js'
import { html } from '../helper/index.js'
import CloseButton from "./CloseButton.js"
import BackButton from "./BackButton.js"

export default (props) => {
  const { header } = useStoreon('header');
  return html`
    <div class="bg-primary bg-gradient text-light p-2">
      <div class="container">
        <${CloseButton}/>
          <h3>
            <${BackButton}/>
            ${header.title}
          </h3>
          <h5 class="ms-5">
            ${header.subtitle}
          </h5>
       </div>
    </div>
    `;
}