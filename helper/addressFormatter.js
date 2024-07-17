import {useStoreon} from 'storeon/preact'

const formatAddress = ({ postal_code, city, street_address }) => {
  const {language} = useStoreon('language')

  const postalCode = postal_code || '';
  const cityFormatted = city || '';
  const streetAddress = street_address || '';

  const itemsGiven = [postalCode, cityFormatted, streetAddress].filter(item => item.trim()).length;

  if (itemsGiven === 0) {
    return '';
  }

  if (itemsGiven === 1) {
    return (cityFormatted || streetAddress || '').trim();
  }

  let formattedAddress;

  switch (language) {
    case 'ro':
    case 'hr':
      formattedAddress = `${streetAddress}, ${postalCode} ${cityFormatted}`;
      break;
    case 'hu':
    default: 
      formattedAddress = `${postalCode} ${cityFormatted}, ${streetAddress}`;
  }

  return formattedAddress.trim();
}

export default {formatAddress};
