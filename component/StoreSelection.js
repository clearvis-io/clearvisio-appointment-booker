import {useStoreon} from 'storeon/preact'
import {html} from '../helper/index.js'
import StoreItem from './StoreItem.js'

export default (props) => {
	const { stores } = useStoreon('stores')

  return html`
		${
			stores !== null ?
			(stores.sort((store1, store2) => store1.name.localeCompare(store2.name)), 
			stores.map(item => html`<${StoreItem} item=${item}/>`)) :
				html`
				<div class="card-body">
					<p class="card-text placeholder-glow">
						<span class="placeholder m-1 col-12 placeholder-lg"></span>
						<span class="placeholder m-1 col-12 placeholder-lg"></span>
						<span class="placeholder m-1 col-12 placeholder-lg"></span>
					</p>
				</div>`
		}
	`;
}