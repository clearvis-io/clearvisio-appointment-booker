import {html} from '../helper/index.js'
import store from '../store/index.js'
import {useStoreon} from '../web_modules/storeon/preact.js'

export default (props) => {
  const { currentStep, availableSteps } = useStoreon('currentStep', 'availableSteps')

  const onClick = () => store.dispatch('currentStep/previous');

  return html`
    <button type="button" onClick=${onClick}
      class="${currentStep == availableSteps[0] ? 'invisible' : ''} btn btn-outline-light mx-1">
      ←
    </button>
  `;
}
