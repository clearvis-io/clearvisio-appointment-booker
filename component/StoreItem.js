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

  const address = addressFormatter.formatAddress(item);

  return html`
    <li class="storeItem row list-group-item ${store == item ? 'selected' : ''}" onClick=${onClick}>
      <div class="row">
        <div class="col-11 p-0">
          <h4>${item.name}</h4>
          ${item.phone ? html`<span class="iconHolder">\u{1F57B}</span> ${item.phone}<br/>` : ''}
          ${item.email ? html`<span class="iconHolder">\u{2709}</span> ${item.email}<br/>` : ''}
          ${address ? html`<span class="iconHolder">\u{1F588}</span> ${address}` : ''}
        </div>
        <div class="col text-end p-2 next item icon">
          \u203A
        </div>
      </div>
    </li>
  `;
}
