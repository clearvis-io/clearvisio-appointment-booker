import {useStoreon} from 'storeon/preact'
import html from './html.js'
import PrivacyPolicyLink from '../component/PrivacyPolicyLink.js'
import StartTime from '../component/summary/StartTime.js'

const messages = {
  hu: {
    "Are you sure you want to cancel this appointment?":
      "Biztosan megszakítja a foglalást?",
    "All inputed data will be lost.": "Mindent megadott adat el fog veszni.",
    "No, continue editing appointment": "Nem, időpontfoglalás folytatása",
    "Cancel appointment": "Foglalás megszakítása",
    "Appointment booking failed": "Időpontfoglalás nem sikerült",
    "Due to an unexpected error appointment could not be booked, please restart the process":
      "Az időpontfoglalás közben nem várt hiba történt, kérjük kezdje újra a folyamatot",
    "None of our colleagues is available for the selected process":
      "Egy munkatársunk sem elérhető a választott protokollhoz",
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
    'December': 'December',
    'There are no free appointment times for this day': 'Nincsenek szabad időpontok erre a napra',
    "The next free slot is available on %date%": "A következő szabad időpont dátuma: %date%",
    'Go to date': 'Ugrás dátumra',
    'Click here to search for the next free appointment':
      'Kattintson ide a következő szabad időpont kereséséhez',
    'Last name': 'Vezetéknév',
    'First name': 'Keresztnév',
    'Birth': 'Születési dátum',
    'Gender': 'Nem',
    'SSN': 'TAJ szám',
    'Country': 'Ország',
    'State': 'Állam',
    'Postal code': 'Irányítószám',
    'City': 'Város',
    'Street address': 'Utca',
    'Mobile': 'Mobil',
    'Select another process': 'Másik protokoll választása',
    '@abbrMinute': 'p.',
    'Not specified': 'Nincs megadva',
    'Male': 'Férfi',
    'Female': 'Nő',
    'Next': 'Tovább',
    'This field is required.': 'Ez a mező kötelező.',
    'Invalid email address.': 'Hibás email cím.',
    'Your information': 'Az Ön adatai',
    'Name': 'Név',
    'Date of birth': 'Születési dátum',
    'Address': 'Cím',
    'Phone number': 'Telefonszám',
    'Appointment details verification': 'Foglalási adatok ellenőrzése',
    'Appointment summary': 'Foglalási összesítő',
    'Price': 'Ár',
    'Confirm appointment': 'Időpontfoglalás jóváhagyása',
    "%customer%'s examination": '%customer% vizsgálata',
    'Your appointment have been recorded.': 'Foglalását rögzítettük.',
    'The examination will start at %start%, please arrive 5 minutes early.':
      'A vizsgálat kezdete: %start%, kérjük érkezzen 5 perccel korábban.',
    'If you have any further questions, please contact us through our customer service.':
      'Ha további kérdése van, keresse fel ügyfélszolgálatunkat.',
    'Appointment booked!': 'Időpont lefoglalva!',
    'examiner: %examiner%': 'végzi: %examiner%',
    'It takes up to %length% minutes': 'Időtartam: %length% perc',
    'I have accepted the privacy policy': html`Elfogadom az <${PrivacyPolicyLink}>adatkezelési tájékoztatóban<//> foglaltakat`,
    'I agree to the use of my medical records according to privacy policy': 'Hozzájárulok egészségügyi adataim adatkezelési tájékoztatóban foglaltak szerinti kezeléséhez',
    'Privacy policy': 'Adatkezelési tájékoztató',
    'Close': 'Bezárás',
    'Start Time': 'Időpont',
    'Subject': 'Tárgy',
    'Location': 'Helyszín',
    'Appointment booking': 'Időpontfoglalás',
    'Select eye examination type': 'Vizsgálattípus választása',
    'Select a vision expert': 'Látásszakértő választása',
    'Select your desired appointment time': 'Időpont választása',
    'Enter customer details': 'Ügyféladatok megadása'
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
    'December': 'December',
    '@abbrMinute': 'm.',
    'I have accepted the privacy policy': html`I accept the terms of <${PrivacyPolicyLink}>privacy policy<//>`,
    'Your appointment starts at startTime': html`Your appointment starts at <${StartTime}//>`
  }
};

export default (message, params = {}, storeContent) => {
  storeContent = storeContent || useStoreon('language', 'translationOverrides');
  let language = storeContent.language;

  const languageSpecificMessages = messages[language] || messages[language.substring(0, 2)] || messages.en;
  message = storeContent.translationOverrides[message] || languageSpecificMessages[message] || message;

  for (const key in params) {
    message = message.replace(new RegExp('%' + key + '%', 'g'), params[key]);
  }

  return message;
}
