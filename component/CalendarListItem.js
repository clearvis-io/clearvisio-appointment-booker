import {useStoreon} from 'storeon/preact'
import {html} from '../helper/index.js'

export default (props) => {
  const { selectedCalendar, dispatch } = useStoreon('selectedCalendar')

  const onClick = () => {
    dispatch('selectedCalendar/set', props.item['@id'] ? props.item : null);
    dispatch('currentStep/next');
  }

  return html`
    <li class="list-group-item${selectedCalendar == props.item || (!props.item['@id'] && !selectedCalendar) ? ' selected' : ''}" onClick=${onClick}>
      <div class="row">
        <div class="col-auto">
          <div class="avatar me-2">
            ${
              props.item.user.profile_picture ?
              html`<img class="image" src="data:image/*;base64,${props.item.user.profile_picture}"/>` :
              html`<h2 class="p-1 text-muted text-center image">?</h2>`
            }
          </div>
        </div>
        <div class="col-8">
          <div class="fw-bold">${props.item.user.name}</div>
          ${props.item.user.description || ''}
        </div>
        <div class="col text-end p-2">
          \u00BB
        </div>
      </div>
    </li>
  `;
}
