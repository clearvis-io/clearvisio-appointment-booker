import {html, dateTimeFormatter, translator as __} from '../../helper/index.js'

export default ({customer, customerAddress}) => {
  return html`
      <div class="container">
        <div class="row fw-bold">
          <span>${__('Your information')}:</span>
        </div>
        <div class="row mt-2">
          ${customer.first_name && customer.last_name ? html`
            <span><span class="fw-bold">${__('Name')}:</span> ${customer['last_name']} ${customer['first_name']}</span>
          ` : ''}
        </div>
        <div class="row">
          ${customer.birth ? html`
            <span><span class="fw-bold">${__('Date of birth')}:</span> ${dateTimeFormatter.formatDate(customer.birth)}</span>
          ` : ''}
        </div>
        <div class="row">
          ${customer.gender ? html`
            <span><span class="fw-bold">${__('Gender')}: </span> ${customer.gender == 'm' ? 'Férfi' : 'Nő'}</span>
          ` : ''}
        </div>
        <div class="row">
            ${customer.ssn ? html`
                <span><span class="fw-bold">${__('SSN')}: </span> ${customer.ssn}</span>
            ` : ''}
        </div>
        <div class="row">
          ${customerAddress ? html`
            <span><span class="fw-bold">${__('Address')}: </span> ${customerAddress}</span>
          ` : ''}
        </div>
        <div class="row">
          ${customer.mobile ? html`
            <span><span class="fw-bold">${__('Phone number')}: </span> ${customer.mobile }</span>
          ` : ''}
        </div>
        <div class="row">
          ${customer.email ? html`
            <span><span class="fw-bold">Email: </span> ${customer.email}</span>
          ` : ''}
        </div>
      </div>
  `;
}