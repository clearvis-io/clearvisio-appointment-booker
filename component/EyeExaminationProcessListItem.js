import {useStoreon} from 'storeon/preact'
import {html, translator as __} from '../helper/index.js'
import ProcessPrice from './ProcessPrice.js'

export default (props) => {
  const { appointment, dispatch } = useStoreon('appointment')

  const onClick = () => {
    dispatch('appointment/set', {eye_examination_process: props.item});
    dispatch('currentStep/next');
  }

  return html`
    <li class="user-select-none list-group-item" onClick=${onClick}>
      <div class="form-check">
        <div class="container">
          <div class="row">
            <span class="col-5">
              <input class="form-check-input" type="radio"
                checked=${appointment.eye_examination_process == props.item} />
              <span class="ms-1 fw-bold">
                ${props.item.name}
              </span>
            </span>
            <span class="text-muted me-4 col-2">
              ${props.item.length} ${__('@abbrMinute')}
            </span>
            <span class="col-4 text-end">${ProcessPrice(props.item['process_services'])}</span>
          </div>
          <div class="row">
            <div class="col ms-1">${props.item.description || ''}</div>
          </div>
        </div>
      </div>
    </li>
  `;
}
