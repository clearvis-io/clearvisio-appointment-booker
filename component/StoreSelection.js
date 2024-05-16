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
				<li class="list-group-item">
          <div class="row">
            <div class="col-auto">
              <div class="avatar me-2">
                  <img class="placeholder image"/>
              </div>
            </div>
            <div class="col-8">
              <div class="placeholder fw-bold col-6"></div>
              <div class="card-body">
                <p class="card-text placeholder-glow">
                  <span class="placeholder m-1 placeholder-lg"></span>
                  <span class="placeholder m-1 placeholder-lg"></span>
                  <span class="placeholder m-1 placeholder-lg"></span>
                </p>
              </div>
            </div>
            <div class="col text-end p-2 next item icon">
              \u203A
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-auto">
              <div class="avatar me-2">
                  <img class="placeholder image"/>
              </div>
            </div>
            <div class="col-8">
              <div class="placeholder fw-bold col-6"></div>
              <div class="card-body">
                <p class="card-text placeholder-glow">
                  <span class="placeholder m-1 placeholder-lg"></span>
                  <span class="placeholder m-1 placeholder-lg"></span>
                  <span class="placeholder m-1 placeholder-lg"></span>
                </p>
              </div>
            </div>
            <div class="col text-end p-2 next item icon">
              \u203A
            </div>
          </div>
        </li>`
		}
	`;
}