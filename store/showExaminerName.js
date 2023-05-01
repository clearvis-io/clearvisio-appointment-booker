export function showExaminerName (store)  {
  store.on('@init', () => ({ showExaminerName: null }))

  store.on('showExaminerName/set', (previousValue, showExaminerName) => {
    return { showExaminerName };
  })
}
