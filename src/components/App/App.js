import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

import rootReducer from './../../reducers';
import Header from '../Header/Header';
import CryptocurrencyList from '../CryptocurrencyList/CryptocurrencyList';
import CryptocurrencyDetails from '../CryptocurrencyDetails/CryptocurrencyDetails';
import Settings from '../Settings/Settings';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={CryptocurrencyList} />
            <Route path="/currency/:currencyId" component={CryptocurrencyDetails} />
            <Route path="/settings" component={Settings} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
