import {html} from '../helper/index.js'
import {useStoreon} from 'storeon/preact'

export default (props) => {
  const { currentStep, availableSteps, dispatch } = useStoreon('currentStep', 'availableSteps')

  const onClick = () => dispatch('currentStep/previous');

  return html`
    <button type="button" onClick=${onClick}
      class="${currentStep == availableSteps[0] ? 'invisible' : ''} btn btn-outline-light mx-1">
      ←
    </button>
  `;
}
