import {useStoreon} from 'storeon/preact'
import {html, translator as __} from '../helper/index.js'
import EyeExaminationProcessListItem from './EyeExaminationProcessListItem.js'
import Spinner from './Spinner.js'
import SimpleModal from './SimpleModal.js'
import ErrorMessage from './ErrorMessage.js'

export default (props) => {
  const { eyeExaminationProcesses, detailedDescriptionModalState, store, calendars, dispatch } =
    useStoreon('eyeExaminationProcesses', 'store')

  if (!store || !calendars) {
    return null;
  }

  const storePhone = store['phone'];
  const storeMail = store['email'];

  const baseText = 'There is a configuration error in the appointment booker that prevents booking. Please contact our store on %mail% email address or book an appointment by calling our store (%tel%) and please mention the error then.'
  const baseNoPhoneText = 'Error! Appointments can not be created! There is a configuration error in the appointment booker that prevents booking. Please contact our store on %mail% email address or book an appointment by calling us and please mention the error then.'
0
  const onCloseDetailedDescriptionModal = () => dispatch(`detailedDescriptionModalState/set`, false);
  return html`
    <ul class="list-group">
      ${
        eyeExaminationProcesses == null ? html`<li class="list-group-item"><${Spinner}/></li>` :
          eyeExaminationProcesses.length ?
          eyeExaminationProcesses.map(item => html`<${EyeExaminationProcessListItem} item=${item} />`) :
          calendars.length ? html`<${ErrorMessage} message="${ !store['phone'] ? __(baseNoPhoneText, {mail: storeMail}) : __(baseText, {mail: storeMail, tel: storePhone})} ${__('There is no office hourse configured for this specialist.')}"/>`:
          html`<${ErrorMessage} message="${ !store['phone'] ? __(baseNoPhoneText, {mail: storeMail}) : __(baseText, {mail: storeMail, tel: storePhone})} ${__('There is no calendar created for this store.')}"/>`
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
