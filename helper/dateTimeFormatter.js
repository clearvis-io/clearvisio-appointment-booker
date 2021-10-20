import {useStoreon} from '../web_modules/storeon/preact.js'

const dateFormats = {
  hu: '%Y. %M. %D.'
}

export default {
  formatTime: (date) => {
    date = new Date(date);

    return `${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`
  },
  formatDate: (date) => {
    const {language} = useStoreon('language');
    var dateFormat = dateFormats[language] || dateFormats[language.substring(0, 2)] || dateFormats.hu;

    date = new Date(date);
    var month = date.getMonth() + 1;

    return dateFormat
      .replace('%Y', date.getFullYear())
      .replace('%M', `${month < 10 ? '0' : ''}${month}`)
      .replace('%D', `${date.getDate() < 10 ? '0' : ''}${date.getDate()}`);
  }
}
