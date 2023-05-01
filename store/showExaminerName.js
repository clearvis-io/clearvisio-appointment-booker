export function showExaminerName (store)  {
  store.on('@init', () => ({ showOptometristName: null }))

  store.on('showExaminerName/set', (previousValue, showOptometristName) => {
    return { showExaminerName };
  })
}
