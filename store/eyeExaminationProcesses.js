import {api} from '../helper/index.js'

export function eyeExaminationProcesses (store) {
  store.on('@init', () => ({ eyeExaminationProcesses: [] }))

  store.on('eyeExaminationProcesses/set', ({ eyeExaminationProcesses }, newProcesses) => {
    if (newProcesses.length == 1) {
      store.dispatch('appointment/set', {eye_examination_process: newProcesses[0]});
      store.dispatch('currentStep/eyeExaminationProcessSelected');
    }

    return { eyeExaminationProcesses: newProcesses };
  })
}
