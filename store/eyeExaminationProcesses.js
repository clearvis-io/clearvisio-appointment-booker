import {api} from '../helper/index.js'

export function eyeExaminationProcesses (store) {
  store.on('@init', () => ({ eyeExaminationProcesses: [] }))

  store.on('eyeExaminationProcesses/add', ({ eyeExaminationProcesses }, newProcesses) => {
    newProcesses = Array.isArray(newProcesses) ? newProcesses : [newProcesses];
    return { eyeExaminationProcesses: eyeExaminationProcesses.concat(newProcesses) };
  })

  store.on('apiInit', async () => {
    store.dispatch('eyeExaminationProcesses/add', await api.get('eye_examination_processes'));
  });
}
