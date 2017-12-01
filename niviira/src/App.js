import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/common';
import { Home } from './components/Home';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Header />
      </div>
    );
  }
}

export default App;
