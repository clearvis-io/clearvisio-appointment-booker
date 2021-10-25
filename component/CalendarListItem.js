import {useStoreon} from 'storeon/preact'
import {html} from '../helper/index.js'

export default (props) => {
  const { selectedCalendar, dispatch } = useStoreon('selectedCalendar')

  const onClick = () => {
    dispatch('selectedCalendar/set', props.item['@id'] ? props.item : null);
    dispatch('currentStep/next');
  }

  return html`
    <li class="user-select-none list-group-item" onClick=${onClick}>
      <div class="avatar me-2 float-start">
        ${
          props.item.user.profile_picture ?
          html`<img class="image" src="data:image/*;base64,${props.item.user.profile_picture}"/>` :
          html`<h2 class="p-1 text-muted text-center image">?</h2>`
        }
        <input class="form-check-input" type="radio"
          checked=${selectedCalendar == props.item || (!props.item['@id'] && !selectedCalendar)} />
      </div>
      <div class="fw-bold">${props.item.user.name}</div>
      ${props.item.user.description || ''}
    </li>
  `;
}
