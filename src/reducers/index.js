import { combineReducers } from 'redux';
import cryptoCurrencies from './cryptoCurrencies';
import settings from './settings';

export default combineReducers({
    cryptoCurrencies,
    settings
});