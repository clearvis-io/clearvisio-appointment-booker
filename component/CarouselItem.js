import {useStoreon} from 'storeon/preact'
import {html} from '../helper/index.js'

export default (props) => {
  const { currentStep, availableSteps } = useStoreon('currentStep', 'availableSteps')
  const index = availableSteps.indexOf(props.step);
  const currentIndex = availableSteps.indexOf(currentStep);

  if (availableSteps.indexOf(props.step) == -1) {
    return html``;
  }

  return html`
    <div class="carousel-item
      ${currentIndex - 1 == index ? 'carousel-item-prev' : ''}
      ${currentStep == props.step ? 'active' : ''}
      ${currentIndex + 1 == index ? 'carousel-item-next' : ''}
    ">
      <div class="container-sm p-1 col-sm-6">
        <${props.wrappedComponent}/>
      </div>
    </div>
  `;
}
