import {useStoreon} from 'storeon/preact'
import {html} from '../helper/index.js'
import EyeExaminationProcessListItem from './EyeExaminationProcessListItem.js'
import Spinner from './Spinner.js'

export default (props) => {
  const { eyeExaminationProcesses } = useStoreon('eyeExaminationProcesses')

  return html`
    <ul class="list-group">
      ${
        eyeExaminationProcesses.length ?
          eyeExaminationProcesses.map(item => html`<${EyeExaminationProcessListItem} item=${item} />`) :
          html`<li class="list-group-item"><${Spinner}/></li>`
      }
    </ul>
  `;
}
