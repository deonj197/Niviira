import React, { Component } from 'react';

import Cover from "../images/Niviira_gold_2.jpg";
import Google from "../images/google-plus.svg";
import Facebook from "../images/facebook.svg";
import Instagram from "../images/instagram.svg";
import Twitter from "../images/twitter.svg";
import BarnesAndNoble from "../images/Barnes_and_Noble_logo.svg";
import Amazon from "../images/Amazon_logo.svg";
import Walmart from "../images/Walmart_logo.svg";
import '../styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Main-Page">
        <div className="Body-Content">
          <div className="Upper-Panel">
            <div className="Book-Cover-Wrapper">
              <img src={Cover} className="Cover"/>
              <div className="Book-Info">
                <h2 style={{color:'#FFD600'}}>Available Now</h2>
                <h3>Book One:</h3>
                <h4>Niviira XXIV - Divinity Begins</h4>
                <h4 className="Price">$17.99</h4>
                <button type="button" className="Order-Now">Order Now</button>
              </div>
            </div>
            <div className="Upper-Panel-Content">
              <h2 className="Upper-Panel-Header">Let The Journey Begin</h2>
              <p>"Insert Quote Here"</p>
            </div>
          </div>
          <div className="Lower-Panel">
            <div className="Lower-Panel-Left">
              <div className="Sellers">
                <h2>Sellers</h2>
              </div>
              <div className="Media-Icons">
                <img src={BarnesAndNoble} className="BarnesAndNoble"/>
                <img src={Amazon} className="BarnesAndNoble"/>
                <img src={Walmart} className="BarnesAndNoble"/>
              </div>
              <div className="View-All-Wrapper">
                <button className="View-All">VIEW ALL</button>
              </div>
            </div>
            <div className="Lower-Panel-Right">
              <div className="Connect">
                <h2>Connect With Us</h2>
              </div>
              <div className="Media-Icons">
                <img src={Google} className="Social-Media-Icon"/>
                <img src={Facebook} className="Social-Media-Icon"/>
                <img src={Instagram} className="Social-Media-Icon"/>
                <img src={Twitter} className="Social-Media-Icon"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Home };
