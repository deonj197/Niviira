import React, { Component } from 'react';
import Background from "./images/day_detroit.jpg";
import './App.css';
import { Header } from './components/common';
import { Home, Books, Merchandise } from './components';
import Routes from './components/Routes'
import { Parallax } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';

class App extends Component {
  render() {
    return (
          <div className='App'>
            
        
         
            <Routes />

          </div>


    );
  }
}

export default App;
