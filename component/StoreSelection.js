import {useStoreon} from 'storeon/preact'
import {html} from '../helper/index.js'
import StoreItem from './StoreItem.js'
import StoreItemPlaceHolder from './StoreItemPlaceHolder.js'

export default (props) => {
	const { stores } = useStoreon('stores')

  if (stores !== null) {
    stores.sort((store1, store2) => store1.name.localeCompare(store2.name));

    return stores.map(item => html`<${StoreItem} item=${item}/>`);
  }

  return html`<${StoreItemPlaceHolder}/>`;
}