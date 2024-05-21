import {useStoreon} from 'storeon/preact'
import {html, addressFormatter} from '../helper/index.js'

export default ({item}) => {
  const { store, dispatch, currentStep } = useStoreon('store', 'currentStep')

  const onClick = () => {
    if (currentStep !== 'storeSelection') {
      return;
    }

    dispatch('store/set', item);
    dispatch('currentStep/next');
  }

  return html`
    <li class="row list-group-item ${store == item ? 'selected' : ''}" onClick=${onClick}>
      <div class="row">
        <div class="col-11 p-0">
          <h4>${item.name}</h4>
          <p>${item.phone}</p>
          <p>${item.email}</p>
          <p>${addressFormatter.formatAddress(item)}</p>
        </div>
        <div class="col text-end p-2 next item icon">
          \u203A
        </div>
      </div>
    </li>
  `;
}
