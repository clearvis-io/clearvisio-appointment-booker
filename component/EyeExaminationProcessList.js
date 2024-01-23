import {useStoreon} from 'storeon/preact'
import {html} from '../helper/index.js'
import EyeExaminationProcessListItem from './EyeExaminationProcessListItem.js'
import Spinner from './Spinner.js'
import SimpleModal from './SimpleModal.js'

export default (props) => {
  const { eyeExaminationProcesses } = useStoreon('eyeExaminationProcesses')
  const { detailedDescriptionModalState, dispatch } = useStoreon('detailedDescriptionModalState')

  const onCloseDetailedDescriptionModal = () => dispatch(`detailedDescriptionModalState/set`, false);

  return html`
    <ul class="list-group">
      ${
        eyeExaminationProcesses.length ?
          eyeExaminationProcesses.map(item => html`<${EyeExaminationProcessListItem} item=${item} />`) :
          html`<li class="list-group-item"><${Spinner}/></li>`
      }
    </ul>

    <${SimpleModal} modalStateStore="detailedDescriptionModalState"
      title="Detailed description"
      content=${detailedDescriptionModalState ? html([detailedDescriptionModalState]) : false}
      approveButtonLabel="Close"
      onApprove=${onCloseDetailedDescriptionModal}
    />
  `;
}
