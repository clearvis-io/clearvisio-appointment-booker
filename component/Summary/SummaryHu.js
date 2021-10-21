import {html, dateTimeFormatter} from '../../helper/index.js'
import SummaryCustomer from './SummaryCustomer.js';

export default (params) => {
  return html`
    <ul class="list-group text-center">
      <li class="list-group-item fw-bold">
        Foglalási adatai
      </li>
      <li class="list-group-item">
        <div>
          Az időpontja <span class="fw-bold">${params.dateTimeStart}</span> időpontban kezdődik
        </div>
        <div class="text-muted">
          ${params.processLength} percet vesz igénybe, ${params.dateTimeEnd}-ig tart
        </div>
      </li>
      <li class="list-group-item">
        <span class="fw-bold">${params.processName}</span>, vele: ${params.examinerName}
      </li>
      ${SummaryCustomer({customer: params.customer, customerAddress: params.customerAddress})}
      <li class="list-group-item">
        <span class="fw-bold">Ár:</span> ${params.processPrice}
      </li>
    </ul>
  `;
}