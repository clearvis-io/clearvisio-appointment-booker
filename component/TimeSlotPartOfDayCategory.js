import {html, translator as __} from '../helper/index.js'
import TimeSlotButton from './TimeSlotButton.js'

export default ({title, slots}) => {
	return slots.length ? 
		html`
			<div class="pt-3">
				<h4>${__(title)}:</h4>
				${slots.map((slot) => html`<${TimeSlotButton} slot=${slot}/>`)}
			</div>
		` :
		null;
}