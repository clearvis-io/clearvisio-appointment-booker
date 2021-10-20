import {useStoreon} from '../web_modules/storeon/preact.js'

const messages = {
  hu: {
    "Are you sure you want to cancel this appointment?":
      "Biztosan megszakítja ezt az időpontot?",
    "All inputed data will be lost.": "Mindent megadott adat el fog veszni.",
    "No, continue editing appointment": "Nem, időpont foglalás folytatása",
    "Cancel appointment": "Időpont megszakítása",
    "Appointment booking failed": "Időpontfoglalás nem sikerült",
    "Due to an unexpected error appointment could not be booked, please restart the process":
      "Az időpontfoglalás közben nem várt hiba történt, kérjük kezdje újra a folyamatot",
    "None of our colleagues was available for the selected process":
      "Egy munkatársunk sem volt elérhető a választott protokolhoz",
    "First free": "Első szabad",
    "For finding the nearest free time slot.": "A lehető legkorábbi időpont választásához.",
    '@abbrSunday': 'V',
    '@abbrMonday': 'H',
    '@abbrTuesday': 'K',
    '@abbrWednesday': 'Sze',
    '@abbrThursday': 'Cs',
    '@abbrFriday': 'P',
    '@abbrSaturday': 'Szo',
    'January': 'Január',
    'February': 'Február',
    'March': 'Március',
    'April': 'Április',
    'May': 'Május',
    'June': 'Június',
    'July': 'Július',
    'August': 'Augusztus',
    'September': 'Szeptember',
    'October': 'Október',
    'November': 'November',
    'December': 'December'
  },
  en: {
    '@abbrSunday': 'Sun',
    '@abbrMonday': 'Mon',
    '@abbrTuesday': 'Tue',
    '@abbrWednesday': 'Wed',
    '@abbrThursday': 'Thu',
    '@abbrFriday': 'Fri',
    '@abbrSaturday': 'Sat',
    'January': 'January',
    'February': 'February',
    'March': 'March',
    'April': 'April',
    'May': 'May',
    'June': 'June',
    'July': 'July',
    'August': 'August',
    'September': 'September',
    'October': 'October',
    'November': 'November',
    'December': 'December'
  }
};

export default (message, params = {}) => {
  const {language} = useStoreon('language');
  const languageSpecificMessages = messages[language] || messages[language.substring(0, 2)] || messages['en'];
  message = languageSpecificMessages[message] || message;

  for (const key in params) {
    message = message.replace(`/%${key}%/g`, params[key]);
  }

  return message;
}
