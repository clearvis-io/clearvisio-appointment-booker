import { useStoreon } from 'storeon/preact';
import {api, availableProcessFilter} from '../helper/index.js'

export function eyeExaminationProcesses (store) {
  store.on('@init', () => ({
    eyeExaminationProcesses: [], eyeExaminationProcessId: null, unfilteredEyeExaminationProcesses: []
  }))

  store.on('eyeExaminationProcesses/set', ({ eyeExaminationProcesses, appointment, currentStep, store: storeEntity }, newProcesses) => {
    if (newProcesses.length == 1) {
      const isOnSelectionStep = currentStep === 'storeSelection' || currentStep === 'process';
      const processNotSelected = !appointment?.eye_examination_process;
      const differentProcess = appointment?.eye_examination_process?.['@id'] !== newProcesses[0]['@id'];
      
      const processChain = newProcesses[0]?.chain?.['@id'];
      const storeChain = storeEntity?.chain?.['@id'];
      const belongsToCurrentStore = processChain === storeChain;
      
      if (isOnSelectionStep && belongsToCurrentStore && (processNotSelected || differentProcess)) {
        store.dispatch('appointment/set', {eye_examination_process: newProcesses[0]});
        store.dispatch('currentStep/eyeExaminationProcessSelected');
        store.dispatch('currentStep/next');
      }
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
        store.dispatch('moduleState/set', 'error.noProcessOrLength');
      }
    }

    store.dispatch('unfilteredEyeExaminationProcesses/set', processes);
    
    const {calendars, calendarRoleCheckMode} = store.get();
    if (calendars && calendars.length > 0) {
      const belongsToStore = calendars.every(c => c?.store?.['@id'] === storeEntity['@id']);
      if (belongsToStore) {
        filter(processes, calendars, calendarRoleCheckMode);
      }
    }
  });

  store.on('calendars/set', async ({unfilteredEyeExaminationProcesses, store: storeEntity}, calendars) => {
    if (!calendars || calendars.length === 0) {
      return;
    }
    
    if (!storeEntity) {
      return;
    }
    
    if (!calendars.every(c => c?.store?.['@id'] === storeEntity['@id'])) {
      return;
    }
    
    if (!unfilteredEyeExaminationProcesses || unfilteredEyeExaminationProcesses.length === 0) {
      return;
    }
    
    const {calendarRoleCheckMode} = store.get();
    filter(unfilteredEyeExaminationProcesses, calendars, calendarRoleCheckMode);
  });

  function filter(processes, calendars, calendarRoleCheckMode) {
    store.dispatch('eyeExaminationProcesses/set',
      availableProcessFilter(processes, calendars, calendarRoleCheckMode)
    );
  }

  // Don't clear processes when step changes - they'll be overwritten when new store loads
  // Clearing them causes steps.js to advance the step prematurely
}
