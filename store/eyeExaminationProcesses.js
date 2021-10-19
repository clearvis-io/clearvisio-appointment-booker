import {api} from '../helper/index.js'

export function eyeExaminationProcesses (store) {
  store.on('@init', () => ({ eyeExaminationProcesses: [] }))

  store.on('eyeExaminationProcesses/set', ({ eyeExaminationProcesses }, newProcesses) => {
    return { eyeExaminationProcesses: newProcesses };
  })
}
