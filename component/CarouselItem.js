import {useStoreon} from 'storeon/preact'
import {html} from '../helper/index.js'
import Summary from './Summary.js'

export default (props) => {
  const { currentStep, availableSteps } = useStoreon('currentStep', 'availableSteps')
  const index = availableSteps.indexOf(props.step);
  const currentIndex = availableSteps.indexOf(currentStep);

  if (availableSteps.indexOf(props.step) == -1) {
    return html``;
  }

  var needsSummaryCard = currentStep != 'process' && currentStep != 'summary';

  return html`
    <div class="carousel-item
      ${currentIndex - 1 == index ? 'carousel-item-prev' : ''}
      ${currentStep == props.step ? 'active' : ''}
      ${currentIndex + 1 == index ? 'carousel-item-next' : ''}
    ">
      <div class="${needsSummaryCard ? 'content container with summary' : 'content container-sm p-1 col-sm-6'}">
        <div class="row">
          <div class="${needsSummaryCard ? 'col-8 content' : 'col'}">
            <${props.wrappedComponent}/>
          </div>
          ${needsSummaryCard ? html`
            <div class="col-4 summarycard">
              <${Summary} props=${props}/>
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;
}
