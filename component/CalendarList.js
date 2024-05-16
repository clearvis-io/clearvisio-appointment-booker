import {useStoreon} from 'storeon/preact'
import {html, availableCalendarFilter, translator as __} from '../helper/index.js'
import CalendarListItem from './CalendarListItem.js'
import Spinner from './Spinner.js'

export default (props) => {
  const {appointment, showFirstAvailableUserItem, dispatch} = useStoreon('appointment', 'showFirstAvailableUserItem');
  const calendars = availableCalendarFilter(useStoreon('calendars', 'appointment', 'calendarRoleCheckMode'));
  
  const firstAvailableUser = {
    user: {
      name: __('First free'),
      description: __('For finding the nearest free time slot.')
    }
  };

  const onBack = () => dispatch('currentStep/previous');

  return html`
    <ul class="list-group">
      ${
        appointment.eye_examination_process && calendars?
        (
          calendars.length ?
            html`
              ${showFirstAvailableUserItem ? html`<${CalendarListItem} item=${firstAvailableUser} />` : ''}
              ${calendars.map(item => html`<${CalendarListItem} item=${item} />`)}
            ` :
            html`
              <li class="list-group-item text-center">
                ${__('None of our colleagues is available for the selected process')}
                <button class="btn m-2 btn-primary" onClick="${onBack}">
                  ${__('Select another process')}
                </button>
              </li>
          `
        ) :
        html`
        <li class="list-group-item">
          <div class="row">
            <div class="col-auto">
              <div class="avatar me-2">
                  <img class="placeholder image"/>
              </div>
            </div>
            <div class="col-8">
              <div class="placeholder fw-bold col-6"></div>
              <div class="card-body">
                <p class="card-text placeholder-glow">
                  <span class="placeholder m-1 placeholder-lg"></span>
                  <span class="placeholder m-1 placeholder-lg"></span>
                  <span class="placeholder m-1 placeholder-lg"></span>
                </p>
              </div>
            </div>
            <div class="col text-end p-2 next item icon">
              \u203A
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-auto">
              <div class="avatar me-2">
                  <img class="placeholder image"/>
              </div>
            </div>
            <div class="col-8">
              <div class="placeholder fw-bold col-6"></div>
              <div class="card-body">
                <p class="card-text placeholder-glow">
                  <span class="placeholder m-1 placeholder-lg"></span>
                  <span class="placeholder m-1 placeholder-lg"></span>
                  <span class="placeholder m-1 placeholder-lg"></span>
                </p>
              </div>
            </div>
            <div class="col text-end p-2 next item icon">
              \u203A
            </div>
          </div>
        </li>`
      }
    </ul>
  `;
}
