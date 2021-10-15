import {useStoreon} from '../web_modules/storeon/preact.js'
import {html} from '../helper/index.js'

export default (props) => {
  const { eyeExaminationProcesses } = useStoreon('eyeExaminationProcesses')

  return html`
    <ul class="list-group">
      ${
        eyeExaminationProcesses.length ?
          eyeExaminationProcesses.map(item => html`<li class="list-group-item">${item.name}</li>`) :
          html`<li class="d-flex justify-content-center list-group-item"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></li>`
      }
    </ul>
  `;
}
