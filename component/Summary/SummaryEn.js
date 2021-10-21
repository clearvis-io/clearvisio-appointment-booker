import {html} from '../../helper/index.js'

export default ({dateTimeStart, processLength, dateTimeEnd, processName, examinerName, processPrice}) => {
  return html`
    <ul class="list-group text-center">
      <li class="list-group-item fw-bold">
        You're appointment details
      </li>
      <li class="list-group-item">
        <div>
          The appointment starts at <span class="fw-bold">${dateTimeStart}</span>
        </div>
        <div class="text-muted">
          It takes ${processLength} minutes, ends at ${dateTimeEnd}
        </div>
      </li>
      <li class="list-group-item">
        <span class="fw-bold">${processName}</span> with ${examinerName}
      </li>
      <li class="list-group-item">
        <span class="fw-bold">Price:</span> ${processPrice}
      </li>
    </ul>
  `;
}