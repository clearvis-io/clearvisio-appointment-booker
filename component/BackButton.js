import {html} from '../helper/index.js'
import {useStoreon} from 'storeon/preact'

export default (props) => {
  const { currentStep, availableSteps, dispatch, booking } = useStoreon('currentStep', 'availableSteps', 'booking')

  const onClick = () => dispatch('currentStep/previous');

  return html`
    <button type="button" onClick=${onClick}
      class="${(currentStep == availableSteps[0] || booking) ? 'invisible' : ''} btn btn-outline-light">
      ←
    </button>
  `;
}
