import {html, dateTimeFormatter} from '../../helper/index.js'
import SummaryCustomer from './SummaryCustomer.js';
import SummaryPriceHu from './SummaryPriceHu.js';
import SummaryProcessDateHu from './SummaryProcessDateHu.js';
import SummaryProcessName from './SummaryProcessNameHu.js';

export default (params) => {
  return html`
    <ul class="list-group text-center">
      <li class="list-group-item fw-bold">
        Foglalási adatai
      </li>
      ${SummaryProcessDateHu(params)}
      ${SummaryProcessName(params)}
      ${SummaryCustomer({customer: params.customer, customerAddress: params.customerAddress})}
      ${SummaryPriceHu(params)}
    </ul>
  `;
}