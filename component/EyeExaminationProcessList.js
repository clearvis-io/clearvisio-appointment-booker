import {useStoreon} from 'storeon/preact'
import {html} from '../helper/index.js'
import EyeExaminationProcessListItem from './EyeExaminationProcessListItem.js'
import Spinner from './Spinner.js'
import SimpleModal from './SimpleModal.js'
import ErrorMessage from './ErrorMessage.js'

export default (props) => {
  const { eyeExaminationProcesses, store } = useStoreon('eyeExaminationProcesses', 'store')
  const { detailedDescriptionModalState, dispatch, calendars} = useStoreon('detailedDescriptionModalState', 'calendars')

  if (store != null) {
    var tel = store['phone'];
    var mail = store['email'];
  }
  const baseText = "Hiba! Időpontfoglalás nem lehetséges! Az időpontfoglaló beállítási hibája miatt nem lehetséges az online időpontfoglalás. Kérjük keresse szaküzletünket a "+ tel +" telefonszámon vagy "+ mail +" email címen és jelezze nekünk ezt a hibát a telefonos időpontkérés során:"
  
  const onCloseDetailedDescriptionModal = () => dispatch(`detailedDescriptionModalState/set`, false);
  return html`
    <ul class="list-group">
      ${
        eyeExaminationProcesses == null ? html`<li class="list-group-item"><${Spinner}/></li>` :
          eyeExaminationProcesses.length ?
          eyeExaminationProcesses.map(item => html`<${EyeExaminationProcessListItem} item=${item} />`) : 
          calendars.length ? html`<${ErrorMessage} message="${baseText} Nincs munkaóra beállítva a látásszakértőknek."/>`:
          html`<${ErrorMessage} message="${baseText} Nincs naptár létrehozva az üzlethez."/>`
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