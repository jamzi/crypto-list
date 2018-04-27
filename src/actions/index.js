export const SET_FIAT_CURRENCY = 'SET_FIAT_CURRENCY';

export const REQUEST_CRYPTOCURRENCY = 'REQUEST_CRYPTOCURRENCY';
export function requestCryptocurrency(currencyId) {
    return { type: REQUEST_CRYPTOCURRENCY, currencyId }
};

export const RECEIVE_CRYPTOCURRENCY = 'RECEIVE_CRYPTOCURRENCY';
export function receiveCryptocurrency(cryptocurrency) {
    return { type: RECEIVE_CRYPTOCURRENCY, cryptocurrency }
};

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

export function fetchCryptocurrency(currencyId) {
    return function (dispatch) {
        dispatch(requestCryptocurrency(currencyId))
        return fetch(`https://api.coinmarketcap.com/v1/ticker/${currencyId}/`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json =>
                dispatch(receiveCryptocurrency(json[0]))
            )
    }
}

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