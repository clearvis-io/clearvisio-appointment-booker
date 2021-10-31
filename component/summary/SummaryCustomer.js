import {html, dateTimeFormatter, nameFormatter, translator as __} from '../../helper/index.js'

export default ({customer, customerAddress}) => {
  return html`
      <div>
        <div class="mb-1">
          ${__('Your information')}:
        </div>
        <div class="fw-bold">
          ${customer.first_name && customer.last_name ? html`${__('Name')}: ${nameFormatter.format(customer)}` : ''}
        </div>
        <div>
          ${customer.birth ? html`${__('Date of birth')}: ${dateTimeFormatter.formatDate(customer.birth)}` : ''}
        </div>
        <div>
          ${customer.gender ? html`${__('Gender')}: ${customer.gender == 'm' ? 'Férfi' : 'Nő'}` : ''}
        </div>
        <div>
            ${customer.ssn ? html`${__('SSN')}: ${customer.ssn}` : ''}
        </div>
        <div>
          ${customerAddress ? html`${__('Address')}: ${customerAddress}` : ''}
        </div>
        <div>
          ${customer.mobile ? html`${__('Phone number')}: ${customer.mobile }` : ''}
        </div>
        <div>
          ${customer.email ? html`Email: ${customer.email}` : ''}
        </div>
      </div>
  `;
}
