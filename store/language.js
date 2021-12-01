export function language (store) {
  store.on('@init', () => ({ language: navigator.language, translationOverrides: {} }))

  store.on('language/set', (currentValue, language) => {
    return { language };
  })

  store.on('translationOverrides/set', (currentValue, translationOverrides) => {
    return { translationOverrides };
  })
}
