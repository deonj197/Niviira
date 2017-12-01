import React, { Component } from 'react';

import Cover from "../images/Niviira_gold_2.jpg"
import '../styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Main-Page">

        <div className="Upper-Panel">
          <div className="Book-Cover-Wrapper">
            <img src={Cover} className="Cover"/>
            <div>
              <h3 className="Price">$17.99</h3>
              <button type="button" className="Order-Now">Order Now</button>
            </div>
          </div>
          <div className="Upper-Panel-Content">

          </div>
        </div>
      </div>
    );
  }
}

export { Home };
