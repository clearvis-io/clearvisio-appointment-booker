import {useStoreon} from 'storeon/preact'
import {html, translator as __} from '../../helper/index.js'

export default (props) => {
  const { appointment, showAppointmentComment, appointmentCommentRequired, commentError, dispatch } =
    useStoreon('appointment', 'showAppointmentComment', 'appointmentCommentRequired', 'commentError');

  if (!showAppointmentComment) {
    return html``;
  }

  const onInput = e => {
    const { value } = e.target;
    appointment.comment = value

    dispatch('appointment/set', appointment);
    dispatch('customerForm/set', {commentError: null});
  }

  return html`
      <div class="row mx-2">
        <div class="p-1 mb-2 w-100">
          <label class="form-label text-truncate">
            ${appointmentCommentRequired ? html`<span class="text-danger">*</span> ` : ''}
            ${__('Comment')}
          </label>
          <textarea
            class="${commentError ? 'is-invalid' : ''} form-control" value=${appointment.comment || ''} onInput=${onInput}
            invalid=${commentError ? 'was-validated' : ''}
          ></textarea>
          ${commentError ? html`<div class="invalid-feedback">${__(commentError)}</div>` : ''}
        </div>
      </div>
    `
}
