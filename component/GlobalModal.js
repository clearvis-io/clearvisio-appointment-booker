import {useStoreon} from 'storeon/preact'
import {html, dateTimeFormatter, translator as __} from '../helper/index.js'
import SimpleModal from './SimpleModal.js'

export default (props) => {
  const { moduleState, appointment, dispatch, store} = useStoreon('moduleState', 'appointment', 'store');

  const onClose = () => dispatch('close');

  if (store != null) { 
    var tel = store["phone"];
    var mail = store["email"]; 
  }
  const baseText = "Az időpontfoglaló beállítási hibája miatt nem lehetséges az online időpontfoglalás. Kérjük keresse szaküzletünket a " + tel + " telefonszámon vagy " + mail + " email címen és jelezze nekünk ezt a hibát a telefonos időpontkérés során:"
  const baseNoPhoneText = "Az időpontfoglaló beállítási hibája miatt nem lehetséges az online időpontfoglalás. Kérjük keresse szaküzletünket a " + mail + " email címen vagy jelezze nekünk ezt a hibát a telefonos időpontkérés során:"
  switch (moduleState) {
    case 'success':
      return html`
        <${SimpleModal} modalStateStore="globalModalState"
          headerClasses="bg-success text-light"
          contentClasses="text"
          approveButtonClasses="btn-success"
          title="Appointment booked!"
          content="
            ${__('Your appointment have been recorded.')}
            ${__(
              'The examination will start at %start%, please arrive 5 minutes early.',
              {start: dateTimeFormatter.formatTime(appointment.start)}
            )}
            ${__('If you have any further questions, please contact us through our customer service.')}
          "
          approveButtonLabel="OK"
          onApprove=${onClose}/>
      `;
    case 'error':
      return html`
        <${SimpleModal} modalStateStore="globalModalState"
          headerClasses="bg-danger text-light"
          contentClasses="text-danger"
          approveButtonClasses="btn-danger"
          title="Appointment booking failed"
          content="Due to an unexpected error appointment could not be booked, please restart the process"
          approveButtonLabel="OK"
          onApprove=${onClose}/>
      `;
    case 'error.storeCode':
      return html`
        <${SimpleModal} modalStateStore="globalModalState"
          headerClasses="bg-danger text-light"
          contentClasses="text-danger"
          approveButtonClasses="btn-danger"
          title="Hiba! Időpontfoglalás nem lehetséges!"
          content="${ !store['phone'] ? baseNoPhoneText : baseText} Téves üzlet kód"
          approveButtonLabel="OK"
          onApprove=${onClose}/>
      `;
    case 'error.403':
      return html`
        <${SimpleModal} modalStateStore="globalModalState"
          headerClasses="bg-danger text-light"
          contentClasses="text-danger"
          approveButtonClasses="btn-danger"
          title="Hiba! Időpontfoglalás nem lehetséges!"
          content="${ !store['phone'] ? baseNoPhoneText : baseText} Hibás API kulcs vagy inaktív API felhasználó."
          approveButtonLabel="OK"
          onApprove=${onClose}/>
      `;
    case 'error.noLenght':
      return html`
        <${SimpleModal} modalStateStore="globalModalState"
          headerClasses="bg-danger text-light"
          contentClasses="text-danger"
          approveButtonClasses="btn-danger"
          title="Hiba! Időpontfoglalás nem lehetséges!"
          content="${ !store['phone'] ? baseNoPhoneText : baseText} A vizsgálati protokollokhoz nincs időtartam megadva."
          approveButtonLabel="OK"
          onApprove=${onClose}/>
      `;
    case 'error.storeEmail':
      return html`
        <${SimpleModal} modalStateStore="globalModalState"
          headerClasses="bg-danger text-light"
          contentClasses="text-danger"
          approveButtonClasses="btn-danger"
          title="Hiba! Időpontfoglalás nem lehetséges!"
          content=${ !store['phone'] ? html`
            Az időpontfoglaló beállítási hibája miatt nem lehetséges az online időpontfoglalás. Kérjük keresse szaküzletünket és jelezze nekünk ezt a hibát a telefonos időpontkérés során: Nincs email cím beállítva a szaküzlethez111.
          ` : 
          html`
            Az időpontfoglaló beállítási hibája miatt nem lehetséges az online időpontfoglalás. Kérjük keresse szaküzletünket a ${tel} telefonszámon és jelezze nekünk ezt a hibát a telefonos időpontkérés során: Nincs email cím beállítva a szaküzlethez.
          `}
          approveButtonLabel="OK"
          onApprove=${onClose}/>
      `;
    case 'error.missingConfiguredProcessId':
      return html`
        <${SimpleModal} modalStateStore="globalModalState"
          headerClasses="bg-danger text-light"
          contentClasses="text-danger"
          approveButtonClasses="btn-danger"
          title="Hiba! Időpontfoglalás nem lehetséges!"
          content="${ !store['phone'] ? baseNoPhoneText : baseText} Az időpontfoglalóban beállított vizsgálati protokollt időközben törölték."
          approveButtonLabel="OK"
          onApprove=${onClose}/>
      `;
    default:
      return html`
        <${SimpleModal} modalClasses="modal-fullscreen" modalStateStore="globalModalState"/>
      `;
  }
}
