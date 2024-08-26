import {useStoreon} from 'storeon/preact'
import {html, translator as __} from '../helper/index.js'
import EyeExaminationProcessListItem from './EyeExaminationProcessListItem.js'
import Spinner from './Spinner.js'
import SimpleModal from './SimpleModal.js'
import ErrorMessage from './ErrorMessage.js'

export default (props) => {
  const { eyeExaminationProcesses, detailedDescriptionModalState, store, calendars, dispatch } = useStoreon('eyeExaminationProcesses', 'store', 'calendars')
    
  const onCloseDetailedDescriptionModal = () => dispatch(`detailedDescriptionModalState/set`, false);
  
  if (eyeExaminationProcesses == null || !store) {
    return html`
      <ul class="list-group">
        <li class="list-group-item"><${Spinner}/></li>
      </ul>
    `
  }

  if (eyeExaminationProcesses.length) {
    return html`
      <ul class="list-group">
        ${eyeExaminationProcesses.map(item => html`<${EyeExaminationProcessListItem} item=${item} />`)}
      </ul>
      <${SimpleModal} modalStateStore="detailedDescriptionModalState"
        title="Detailed description"
        content=${detailedDescriptionModalState ? html([detailedDescriptionModalState]) : false}
        approveButtonLabel="Close"
        onApprove=${onCloseDetailedDescriptionModal}
      />
    `
  }

  return html`
    <ul class="list-group">
      <${ErrorMessage} message="
        ${
          !store['phone'] ?
            __(
              'Error! Appointments can not be created! There is a configuration error in the appointment booker that prevents booking. Please contact our store on %mail% email address or book an appointment by calling us and please mention the error then.',
              { mail: store['email'] }
            ) :
            __(
              'There is a configuration error in the appointment booker that prevents booking. Please contact our store on %mail% email address or book an appointment by calling our store (%tel%) and please mention the error then.',
              { mail: store['email'], tel: store['phone'] }
            )
        }
        ${
          calendars && calendars.length ?
            __('There is no office hourse configured for this specialist.') :
            __('There is no calendar created for this store.')
        }
      "/>
    </ul>
  `
}
