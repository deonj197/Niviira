import React, { Component } from 'react';
import Background from "./images/woods.jpg";
import './App.css';
import { Header } from './components/common';
import { Home } from './components/Home';
import Routes from './components/Routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={Background} className='Background-Image'/>
        <div className="Backdrop-View">
            <Routes />
        </div>
      </div>
    );
  }
}

export default App;
