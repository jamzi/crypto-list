import { REQUEST_CRYPTOCURRENCIES, RECEIVE_CRYPTOCURRENCIES } from '../actions';

const initialState = {
    isFetching: false,
    cryptocurrencies: []
}

const currencies = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_CRYPTOCURRENCIES:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_CRYPTOCURRENCIES:
            return Object.assign({}, state, {
                isFetching: false,
                cryptocurrencies: action.cryptocurrencies
            })
        default:
            return state;
    };
};

export default currencies;