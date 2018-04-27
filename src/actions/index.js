export const SET_FIAT_CURRENCY = 'SET_FIAT_CURRENCY';

export const REQUEST_CRYPTOCURRENCIES = 'REQUEST_CRYPTOCURRENCIES';
export function requestCryptocurrencies() {
    return { type: REQUEST_CRYPTOCURRENCIES }
};

export const RECEIVE_CRYPTOCURRENCIES = 'RECEIVE_CRYPTOCURRENCIES';
export function receiveCryptocurrencies(cryptocurrencies) {
    return { type: RECEIVE_CRYPTOCURRENCIES, cryptocurrencies }
};

export function setFiatCurrency(fiatCurrency) {
    return { type: SET_FIAT_CURRENCY, fiatCurrency }
};

export function fetchCryptocurrencies() {
    return function (dispatch) {
        dispatch(requestCryptocurrencies())
        return fetch(`https://api.coinmarketcap.com/v1/ticker/`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json =>
                dispatch(receiveCryptocurrencies(json))
            )
    }
}