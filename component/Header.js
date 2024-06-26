import { useStoreon } from '../_snowpack/pkg/storeon/preact.js'
import { html, translator as __ } from '../helper/index.js'
import CloseButton from "./CloseButton.js"
import BackButton from "./BackButton.js"

export default (props) => {
  const { headerTitle, currentStep, style, parentWidth } = useStoreon('headerTitle', 'currentStep', 'style', 'parentWidth');


  switch (currentStep) {
    case 'storeSelection':
      var subtitle = __('Store selection');
      break;
    case 'process':
      var subtitle = __('Select eye examination type');
      break;
    case 'calendar':
      var subtitle = __('Select a vision expert');
      break;
    case 'appointment':
      var subtitle = __('Select your desired appointment time');
      break;
    case 'customer':
      var subtitle = __('Enter customer details');
      break;
    default:
      var subtitle = __('Appointment details verification');
      break;
  }

  const getColumnWidth = () => {
    if ((style !== 'embedded' && style !== 'embedded-safe') || parentWidth == 'large') {
      return 'col-sm-10 col-md-8';
    }

    return parentWidth === 'medium' ? 'col-sm-10' : ''
  }

  return html`
    <div class="booker-header bg-primary bg-gradient text-light p-2 ${style}-header">
      <div class="container ${getColumnWidth()} ${style}-header-container">
        <div class="row">
          <div class="col-8 px-1">
            <h3 class="text-truncate">
              ${headerTitle || __('Appointment booking')}
            </h3>
            <h5 class="text-truncate">
              ${subtitle}
            </h5>
          </div>
          <div class="col-4">
            <div class="btn-group btn-group-lg float-end" role="group" aria-label="Navigation buttons">
              <${BackButton}/>
              ${(style === 'embedded' || style === 'embedded-safe') ? '' :
                html`<${CloseButton}/>`
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
}
