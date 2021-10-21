import {html} from '../../helper/index.js'

export default ({dateTimeStart, processLength, dateTimeEnd, processName, examinerName, processPrice}) => {
  return html`
    <ul class="list-group text-center">
      <li class="list-group-item fw-bold">
        Foglalási adatai
      </li>
      <li class="list-group-item">
        <div>
          Az időpontja <span class="fw-bold">${dateTimeStart}</span> időpontban kezdődik
        </div>
        <div class="text-muted">
          ${processLength} percet vesz igénybe, ${dateTimeEnd}-ig tart
        </div>
      </li>
      <li class="list-group-item">
        <span class="fw-bold">${processName}</span>, vele: ${examinerName}
      </li>
      <li class="list-group-item">
        <span class="fw-bold">Ár:</span> ${processPrice}
      </li>
    </ul>
  `;
}