export const REQUEST_CRYPTOCURRENCY = 'REQUEST_CRYPTOCURRENCY';
export function requestCryptocurrency(currencyId, fiatCurrency) {
    return { type: REQUEST_CRYPTOCURRENCY, currencyId }
};

export const RECEIVE_CRYPTOCURRENCY = 'RECEIVE_CRYPTOCURRENCY';
export function receiveCryptocurrency(cryptocurrency) {
    return { type: RECEIVE_CRYPTOCURRENCY, cryptocurrency }
};

export const REQUEST_CRYPTOCURRENCIES = 'REQUEST_CRYPTOCURRENCIES';
export function requestCryptocurrencies(fiatCurrency) {
    return { type: REQUEST_CRYPTOCURRENCIES, fiatCurrency }
};

export const RECEIVE_CRYPTOCURRENCIES = 'RECEIVE_CRYPTOCURRENCIES';
export function receiveCryptocurrencies(cryptocurrencies) {
    return { type: RECEIVE_CRYPTOCURRENCIES, cryptocurrencies }
};

export const SET_FIAT_CURRENCY = 'SET_FIAT_CURRENCY';
export function setFiatCurrency(fiatCurrency) {
    return { type: SET_FIAT_CURRENCY, fiatCurrency }
};

export function fetchCryptocurrency(currencyId, fiatCurrency) {
    return function (dispatch) {
        dispatch(requestCryptocurrency(currencyId, fiatCurrency))
        return fetch(`https://api.coinmarketcap.com/v1/ticker/${currencyId}/?convert=${fiatCurrency}`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json =>
                dispatch(receiveCryptocurrency(json[0]))
            )
    }
}

export function fetchCryptocurrencies(fiatCurrency) {
    return function (dispatch) {
        dispatch(requestCryptocurrencies(fiatCurrency))
        return fetch(`https://api.coinmarketcap.com/v1/ticker/?convert=${fiatCurrency}`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json =>
                dispatch(receiveCryptocurrencies(json))
            )
    }
}