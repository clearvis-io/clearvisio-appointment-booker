import { api } from '../helper/index.js'
import { translator as __ } from '../helper/index.js'


export function slotSelection(store) {
  store.on('@init', () => ({ inProgress: false, errorMessage: null }))

  store.on('slotSelection/inProgress/set', (previousValue, inProgress) => {
    return { inProgress };
  })
  store.on('slotSelection/errorMessage/set', (previousValue, errorMessage) => {
    return { errorMessage };
  })

  store.on('appointment/selectSlot', async (storeContent, slot) => {
    const { appointment, calendars, currentStep } = storeContent;

    if (currentStep !== 'appointment') {
      return;
    }

    var calendar = null;
    for (let i = 0; i < calendars.length; i++) {
      if (slot.calendar['@id'] == calendars[i]['@id']) {
        var calendar = calendars[i];
      }
    }
    if (!calendar) {
      throw new Error('Could not find calendar');
    }

    store.dispatch('slotSelection/inProgress/set', true);

    try {
      const draftEvent = {
        title: __('Event draft', {}, storeContent),
        calendar: calendar['@id'],
        status: 'draft',
        start: slot.start,
        end: slot.end,
        source: 'online'
      }
      const storeContentForApi = { ...storeContent, dispatch: store.dispatch };

      const postedAppointment = appointment['id'] ? 
        await api.put(storeContentForApi, appointment['id'], draftEvent) :
        await api.post(storeContentForApi, 'appointment_events', draftEvent);

      var id = postedAppointment['@id'];
    } catch (error) {
      console.log(error)
      store.dispatch('slotSelection/errorMessage/set', 'Nem sikerült a foglalás válasszon másik időpontot vagy kezdje újra.');
      return;
    } finally {
      store.dispatch('slotSelection/inProgress/set', false);
    }

    store.dispatch(
      'appointment/set',
      { start: slot.start, end: slot.end, calendar: calendar, id: id }
    );
    store.dispatch('currentStep/next');
  });
}