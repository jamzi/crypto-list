import * as actions from './index';
import * as types from './index';

describe('actions', () => {
    it('should set fiat currency', () => {
        const fiatCurrency = 'EUR';
        const expectedAction = {
            type: types.SET_FIAT_CURRENCY,
            fiatCurrency
        }
        expect(actions.setFiatCurrency(fiatCurrency)).toEqual(expectedAction);
    });

    it('should request cryptocurrency', () => {
        const currencyId = 'bitcoin';
        const expectedAction = {
            type: types.REQUEST_CRYPTOCURRENCY,
            currencyId
        }
        expect(actions.requestCryptocurrency(currencyId)).toEqual(expectedAction);
    });

    it('should receive cryptocurrency', () => {
        const cryptocurrency = 'bitcoin';
        const expectedAction = {
            type: types.RECEIVE_CRYPTOCURRENCY,
            cryptocurrency
        }
        expect(actions.receiveCryptocurrency(cryptocurrency)).toEqual(expectedAction);
    });
})