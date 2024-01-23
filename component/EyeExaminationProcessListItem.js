import {useStoreon} from 'storeon/preact'
import {html, translator as __} from '../helper/index.js'
import ProcessPrice from './ProcessPrice.js'

export default (props) => {
  const { appointment, dispatch, currentStep } = useStoreon('appointment', 'currentStep')

  const onClick = () => {
    if (currentStep !== 'process') {
      return;
    }

    dispatch('appointment/set', {eye_examination_process: props.item});
    dispatch('currentStep/eyeExaminationProcessSelected');
    dispatch('currentStep/next');
  }

  const onShowDetailedDescriptionModal = (e) => {
    e.stopPropagation();
    dispatch('detailedDescriptionModalState/set', props.item.detailed_description);
  }

  return html`
    <li class="row list-group-item ${appointment.eye_examination_process == props.item ? 'selected' : ''}" onClick=${onClick}>
      <div class="row">
        <div class="col-11 p-0">
          <h4>${props.item.name}</h4>
          <p class="${props.item.description && props.item.description.length > 0 ? '' : 'd-none'}">
            ${props.item.description}
            ${props.item.detailed_description && props.item.detailed_description.length > 0 ?
                html` <a href="#" onClick=${onShowDetailedDescriptionModal}>${__('More...')}</a>` : ''}
          </p>
          <span class="badge bg-primary me-1">${props.item.length} ${__('@abbrMinute')}</span>
          <span class="badge bg-primary"><${ProcessPrice} process=${props.item}/></span>
        </div>
        <div class="col text-end p-2 next item icon">
          \u203A
        </div>
      </div>
    </li>
  `;
}
