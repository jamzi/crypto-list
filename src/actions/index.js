export const ADD_CRYPTOCURRENCIES = 'ADD_CRYPTOCURRENCIES';
export const UPDATE_CRYPTOCURRENCY = 'UPDATE_CRYPTOCURRENCY';
export const SET_FIAT_CURRENCY = 'SET_FIAT_CURRENCY';

export function addCryptoCurrencies(currencies) {
    return { type: ADD_CRYPTOCURRENCIES, currencies }
};

export function updateCryptocurrency(cryptoCurrency) {
    return { type: UPDATE_CRYPTOCURRENCY, cryptoCurrency }
};

export function setFiatCurrency(fiatCurrency) {
    return { type: SET_FIAT_CURRENCY, fiatCurrency }
};