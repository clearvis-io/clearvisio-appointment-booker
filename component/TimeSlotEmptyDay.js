import {useStoreon} from '../web_modules/storeon/preact.js'
import {html} from '../helper/index.js'

export default (props) => {
  const { selectedDate, nextFreeSlots } = useStoreon('appointment')

  return html`
    <li class="list-group-item">
      Bocs, ezen a napon nincs szabad időpont
    </li>
  `;
}
