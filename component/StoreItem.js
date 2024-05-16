import {useStoreon} from 'storeon/preact'
import {html} from '../helper/index.js'

export default (props) => {

  const { store, dispatch, currentStep } = useStoreon('store', 'currentStep')

  const onClick = () => {
    if (currentStep !== 'storeSelection') {
      return;
    }
    
    dispatch('store/set', props.item);
    dispatch('currentStep/next');
  }

  return html`
  <li class="row list-group-item ${store == props.item ? 'selected' : ''}" onClick=${onClick}>
      <div class="row">
        <div class="col-11 p-0">
          <h4>${props.item.name}</h4>
          <p>${props.item.phone}</p>
          <p>${props.item.email}</p>
        </div>
        <div class="col text-end p-2 next item icon">
          \u203A
        </div>
      </div>
    </li>
  `;
}
