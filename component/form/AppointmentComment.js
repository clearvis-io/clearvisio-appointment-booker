import {useStoreon} from 'storeon/preact'
import {html, translator as __} from '../../helper/index.js'

export default (props) => {
  const { appointment, showAppointmentComment, dispatch } = useStoreon('appointment', 'showAppointmentComment');

  if (!showAppointmentComment) {
    return html``;
  }

  const onInput = e => {
    const { value } = e.target;
    appointment.comment = value

    dispatch('appointment/set', appointment);
  }

  return html`
      <div class="row mx-2">
        <div class="p-1 mb-2 w-100">
          <label class="form-label text-truncate">${__('Comment')}</label>
          <textarea class="form-control" value=${appointment.comment || ''} onInput=${onInput}></textarea>
        </div>
      </div>
    `
}
