import { SET_FIAT_CURRENCY } from '../actions';

const initialState = {
    fiatCurrency: 'EUR'
}

const settings = (state = initialState, action) => {
    switch (action.type) {
        case SET_FIAT_CURRENCY:
            return Object.assign({}, state, {
                fiatCurrency: action.fiatCurrency
            });
        default:
            return state;
    }
}

export default settings;