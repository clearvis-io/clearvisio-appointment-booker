import { useStoreon } from 'storeon/preact';
import {api, availableProcessFilter} from '../helper/index.js'

export function eyeExaminationProcesses (store) {
  store.on('@init', () => ({
    eyeExaminationProcesses: [], eyeExaminationProcessId: null, unfilteredEyeExaminationProcesses: []
  }))

  store.on('eyeExaminationProcesses/set', ({ eyeExaminationProcesses }, newProcesses) => {
    if (newProcesses.length == 1) {
      store.dispatch('appointment/set', {eye_examination_process: newProcesses[0]});
      store.dispatch('currentStep/eyeExaminationProcessSelected');
    }

    return { eyeExaminationProcesses: newProcesses };
  })

  store.on('eyeExaminationProcessId/set', (previousValue, eyeExaminationProcessId) => {
    return {eyeExaminationProcessId};
  })

  store.on('unfilteredEyeExaminationProcesses/set', (previousValue, unfilteredEyeExaminationProcesses) => {
    return {unfilteredEyeExaminationProcesses};
  })

  store.on('store/set', async ({eyeExaminationProcessId}, storeEntity) => {
    var processes = null;
    if (eyeExaminationProcessId) {
      processes = [await api.get(store, `eye_examination_processes/${eyeExaminationProcessId}`)]
        .filter((process) => process);
      if (processes[0].length == null) {
        store.dispatch('moduleState/set', 'error.noLength')
      }
    } else {
      processes = await api.get(store, `eye_examination_processes?hasLength&chain=${storeEntity.chain['@id']}`);
      if (processes.length == 0) {
        store.dispatch('moduleState/set', 'error.noLength');
      }
    }

    store.dispatch('unfilteredEyeExaminationProcesses/set', processes);

    const {calendars, calendarRoleCheckMode} = store.get();

    if (calendars && calendars.length) {
      filter(processes, calendars, calendarRoleCheckMode);
    }
  });

  store.on('calendars/set', async ({unfilteredEyeExaminationProcesses}, calendars) => {
    const {calendarRoleCheckMode} = store.get();

    if (unfilteredEyeExaminationProcesses && unfilteredEyeExaminationProcesses.length) {
      filter(unfilteredEyeExaminationProcesses, calendars, calendarRoleCheckMode);
    }
  });

  function filter(processes, calendars, calendarRoleCheckMode) {
    store.dispatch('eyeExaminationProcesses/set',
      availableProcessFilter(processes, calendars, calendarRoleCheckMode)
    );
  }
}
