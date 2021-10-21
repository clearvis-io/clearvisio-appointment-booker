import {html} from '../../helper/index.js'

export default (props) => {
  const onInput = e => {
    const { value } = e.target;
    props.onInput(value);
  }

  return html`
    <select type="text" class="form-select ${props.class || ''} ${props.invalid ? 'is-invalid' : ''}"
      onInput=${onInput} value=${props.value}>
      ${props.emptySelection ? html`<option value="">${props.emptySelection}</option>` : ''}
      ${props.options.map(({value, label}) => html`<option value="${value}">${label}</option>`)}
    </select>
  `;
}
