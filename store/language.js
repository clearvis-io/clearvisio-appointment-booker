export function language (store) {
  store.on('@init', () => ({ language: navigator.language }))

  store.on('language/set', (currentValue, language) => {
    return { language };
  })
}
