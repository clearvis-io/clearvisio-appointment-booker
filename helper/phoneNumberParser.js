import {allCountries} from 'country-telephone-data';

const knownCountryCallingCodeMappings = {
  'hu_HU': {
    "06": "+36",
    "36": "+36"
  }
};

export default (locale, number) => {
  const localCountryCodeMappings = knownCountryCallingCodeMappings[locale] || {};

  number = (number || '').trim();
  var startedWithPlus = number.indexOf('+') == 0
  number = number.replace(/\D/g,'');

  if (!number.length) {
    return null;
  }
  if (startedWithPlus) {
    number = `+${number}`;
  }

  if (number.indexOf('00') == 0) {
    number = `+${number.substring(2)}`;
  }

  for (let i = 0; i < Object.keys(localCountryCodeMappings).length; i++) {
    let key = Object.keys(localCountryCodeMappings)[i];
    if (number.indexOf(key) == 0) {
      return `${localCountryCodeMappings[key]}.${number.substring(key.length)}`;
    }
  }

  for (let i = 0; i < allCountries.length; i++) {
    let {dialCode} = allCountries[i];
    if (number.indexOf(`+${dialCode}`) == 0) {
      return `+${dialCode}.${number.substring(dialCode.length + 1)}`;
    }
  }

  const firstKey = Object.keys(localCountryCodeMappings)[0];

  return `${firstKey ? localCountryCodeMappings[firstKey] : '+36'}.${number}`;
}
