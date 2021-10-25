import {useStoreon} from 'storeon/preact'

const switchedNameOrderLanguages = ['hu'];

const shouldSwitchNameOrder = (language) => {
  language = language || useStoreon('language').language;

  return (switchedNameOrderLanguages.indexOf(language) != -1 ||
    switchedNameOrderLanguages.indexOf(language.substring(0, 2)) != -1);
}

const format = ({first_name, last_name}, language) => {
  return shouldSwitchNameOrder(language) ?
    `${(last_name || '').trim()} ${(first_name || '').trim()}`.trim() :
    `${(first_name || '').trim()} ${(last_name || '').trim()}`.trim();
}

export default {format, shouldSwitchNameOrder};
