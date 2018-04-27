import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Header from '../Header/Header';
import CryptocurrencyList from '../CryptocurrencyList/CryptocurrencyList';
import CryptocurrencyDetails from '../CryptocurrencyDetails/CryptocurrencyDetails';
import Settings from '../Settings/Settings';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">List</Link></li>
            <li><Link to="/currency/bitcoin">Detail</Link></li>
          </ul>
          <Header />
          <Route exact path="/" component={CryptocurrencyList} />
          <Route path="/currency/:currencyId" component={CryptocurrencyDetails} />
          <Route path="/settings" component={Settings} />
        </div>
      </Router>
    );
  }
}

export default App;
