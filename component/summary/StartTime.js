import { dateTimeFormatter, html } from '../../helper/index.js'
import {useStoreon} from 'storeon/preact'

export default (props) => {
  const { appointment } = useStoreon('appointment');

  return html`
    <span class="fw-bold">
      ${appointment.start ? dateTimeFormatter.formatDateTime(appointment.start) : null}
    </span>
  `;
}
