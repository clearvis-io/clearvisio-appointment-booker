import {html} from '../../helper/index.js'
import SummaryCustomer from './SummaryCustomer.js';

export default (params) => {
  return html`
    <ul class="list-group text-center">
      <li class="list-group-item fw-bold">
        You're appointment details
      </li>
      <li class="list-group-item">
        <div>
          The appointment starts at <span class="fw-bold">${params.dateTimeStart}</span>
        </div>
        <div class="text-muted">
          It takes ${params.processLength} minutes, ends at ${params.dateTimeEnd}
        </div>
      </li>
      <li class="list-group-item">
        <span class="fw-bold">${params.processName}</span> with ${params.examinerName}
      </li>
      ${SummaryCustomer({customer: params.customer, customerAddress: params.customerAddress})}
      <li class="list-group-item">
        <span class="fw-bold">Price:</span> ${params.processPrice}
      </li>
    </ul>
  `;
}