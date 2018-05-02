import reducer from '../reducers/settings';
import * as types from '../actions';

describe('settings reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                fiatCurrency: 'EUR'
            }
        )
    });

    it('should set USD as fiat currency', () => {
        expect(reducer({}, {
            type: types.SET_FIAT_CURRENCY,
            fiatCurrency: 'USD'
        })).toEqual(
            {
                fiatCurrency: 'USD'
            }
        )
    });
})