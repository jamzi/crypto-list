import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import CryptocurrencyList from '../CryptocurrencyList/CryptocurrencyList';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CryptocurrencyList />
      </div>
    );
  }
}

export default App;
