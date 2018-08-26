import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './common/Header';

import '../App.css';

// Page imports
import { Home } from './Home';
import { Books } from './Books';
import { Merchandise } from './Merchandise';
import { About } from './About';

const Routes = () => {
  return (
    <Router>
     
        <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/books" component={Books}/>
        <Route exact path="/merchandise" component={Merchandise}/>
        <Route exact path="/about" component={About}/>
        <Header />
        </div>
     
    </Router>
  );
}

export default Routes;
