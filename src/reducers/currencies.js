import { REQUEST_CRYPTOCURRENCY, REQUEST_CRYPTOCURRENCIES, RECEIVE_CRYPTOCURRENCY, RECEIVE_CRYPTOCURRENCIES } from '../actions';

const initialState = {
    isFetching: false,
    cryptocurrencies: []
}

const currencies = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_CRYPTOCURRENCY:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_CRYPTOCURRENCY:
            return Object.assign({}, state, {
                isFetching: false,
                cryptocurrencies: updateObjectInArray(state.cryptocurrencies, action.cryptocurrency.id)
            });
        case REQUEST_CRYPTOCURRENCIES:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_CRYPTOCURRENCIES:
            return Object.assign({}, state, {
                isFetching: false,
                cryptocurrencies: action.cryptocurrencies
            });
        default:
            return state;
    }
}

function updateObjectInArray(array, action) {
    return array.map((item, index) => {
        if (index !== action.index) {
            return item;
        }
        
        return {
            ...item,
            ...action.item
        };
    });
}

export default currencies;