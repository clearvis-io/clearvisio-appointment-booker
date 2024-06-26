import {useStoreon} from 'storeon/preact'
import {html} from '../helper/index.js'
import Summary from './Summary.js'

export default (props) => {
  const { currentStep, availableSteps, style, parentWidth } = useStoreon('currentStep', 'availableSteps', 'style', 'parentWidth')
  const index = availableSteps.indexOf(props.step);
  const currentIndex = availableSteps.indexOf(currentStep);

  if (availableSteps.indexOf(props.step) == -1) {
    return html``;
  }

  var needsSummaryCard = currentStep != 'process' && currentStep != 'summary' &&
    currentStep != 'storeSelection';
  if ((style === 'embedded' || style === 'embedded-safe') && parentWidth === 'small') {
    needsSummaryCard = false;
  }

  const getColumnWidth = () => {
    if ((style !== 'embedded' && style !== 'embedded-safe') || parentWidth == 'large') {
      return 'col-sm-10 col-md-8';
    }

    return parentWidth === 'medium' ? 'col-sm-10' : ''
  }

  return html`
    <div class="carousel-item
      ${currentIndex - 1 == index ? 'carousel-item-prev' : ''}
      ${currentStep == props.step ? 'active' : ''}
      ${currentIndex + 1 == index ? 'carousel-item-next' : ''}
    ">
      <div class="container-sm p-1 ${getColumnWidth()} ${style}-container">
        <div class="row">
          <div class="${needsSummaryCard ? 'col col-sm-8' : 'col'}">
            <div class="p-1">
              <${props.wrappedComponent}/>
            </div>
          </div>
          ${needsSummaryCard ? html`
            <div class="d-none d-sm-block col-4 summarycard">
              <div class="p-1">
                <${Summary} props=${props}/>
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;
}
