import {useStoreon} from '../web_modules/storeon/preact.js'
import {html} from '../helper/index.js'
import EyeExaminationProcessListItem from './EyeExaminationProcessListItem.js'

export default (props) => {
  const { eyeExaminationProcesses } = useStoreon('eyeExaminationProcesses')

  return html`
    <ul class="list-group">
      ${
        eyeExaminationProcesses.length ?
          eyeExaminationProcesses.map(item => html`<${EyeExaminationProcessListItem} item=${item} />`) :
          html`<li class="d-flex justify-content-center list-group-item"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></li>`
      }
    </ul>
  `;
}
