import {useStoreon} from '../web_modules/storeon/preact.js'

const messages = {
  hu: {
    "Are you sure you want to cancel this appointment?":
      "Biztosan megszakítja ezt az időpontot?",
    "All inputed data will be lost.":
      "Mindent megadott adat el fog veszni.",
    "No, continue editing appointment":
      "Nem, időpont foglalás folytatása",
    "Cancel appointment":
      "Időpont megszakítása"
  }
};

export default (message, params = {}) => {
  const {language} = useStoreon('language');
  const languageSpecificMessages = messages[language] ?? messages[language.substring(0, 2)];
  if (languageSpecificMessages) {
    message = languageSpecificMessages[message] ?? message;
  }

  for (const key in params) {
    message = message.replace(`/%${key}%/g`, params[key]);
  }

  return message;
}
