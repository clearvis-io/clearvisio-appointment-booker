import {useStoreon} from 'storeon/preact'
import {html} from '../helper/index.js'

const fractionDigitOverrides = {
    HUF: 0
};

const createPriceFormatter = (store, language) => {
    var currency = store.price_list.currency;
    var options = {style: 'currency', currency};
    if (fractionDigitOverrides[currency] != undefined) {
        options.maximumFractionDigits = fractionDigitOverrides[currency];
        options.minimumFractionDigits = fractionDigitOverrides[currency];
    }

    return new Intl.NumberFormat(language, options);
}

export default ({process}) => {
    if (!process) {
        return html``;
    }

    const { store, language, showPrice } = useStoreon('store', 'language', 'showPrice')
    if (!showPrice) {
      return html``;
    }

    const processServices = process.process_services;

    var minPrice = null;
    var maxPrice = null;
    var priceListId = store.price_list.id;

    processServices.forEach(processService => {
        processService.service.packagings.forEach(packaging => {
            packaging.currentPrices.forEach(currentPrice => {
                if (currentPrice['price_list'].id != priceListId) {
                    return;
                }
                if (minPrice == null || minPrice > currentPrice.value) {
                    minPrice = currentPrice.value;
                }

                if (maxPrice == null || maxPrice < currentPrice.value) {
                    maxPrice = currentPrice.value;
                }
            });
        });
    });
    var priceFormatter = createPriceFormatter(store, language);

    if (minPrice == null || maxPrice  == null) {
        return html``;
    } else if (minPrice == maxPrice) {
        return html`${priceFormatter.format(minPrice)}`;
    } else {
        return html`${priceFormatter.format(minPrice)} - ${priceFormatter.format(maxPrice)}`;
    }
}
