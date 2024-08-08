import {useStoreon} from 'storeon/preact'
import {html, translator as __} from '../helper/index.js'
import SimpleModal from './SimpleModal.js'

export default ({content}) => {
  const { dispatch, store } = useStoreon('moduleState', 'appointment', 'store');

  const onClose = () => dispatch('close');

  return html`
    <${SimpleModal} modalStateStore="globalModalState"
    headerClasses="bg-danger text-light"
    contentClasses="text-danger"
    approveButtonClasses="btn-danger"
    title="Appointment booking failed"
    content=${content}
    approveButtonLabel="OK"
    onApprove=${onClose}/>
  `
}