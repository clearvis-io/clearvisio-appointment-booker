import {useStoreon} from 'storeon/preact'
import {html} from '../helper/index.js'
import EyeExaminationProcessListItem from './EyeExaminationProcessListItem.js'
import Spinner from './Spinner.js'
import SimpleModal from './SimpleModal.js'
import ErrorMessage from './ErrorMessage.js'

export default (props) => {
  const { eyeExaminationProcesses } = useStoreon('eyeExaminationProcesses')
  const { detailedDescriptionModalState, dispatch } = useStoreon('detailedDescriptionModalState')

  const onCloseDetailedDescriptionModal = () => dispatch(`detailedDescriptionModalState/set`, false);

  return html`
    <ul class="list-group">
      ${
        eyeExaminationProcesses == null ? html`<li class="list-group-item"><${Spinner}/></li>` :
          eyeExaminationProcesses.length ?
          eyeExaminationProcesses.map(item => html`<${EyeExaminationProcessListItem} item=${item} />`) :
          html`<${ErrorMessage} message="Jelenleg ebben az üzletben CRM rendszer konfigurációja nem engedi meg bármilyen elérhető vizsgálat típus választását"/>`
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
