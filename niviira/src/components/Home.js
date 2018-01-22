import React, { Component } from 'react';

import Cover from "../images/Niviira_gold_2.jpg";
import Google from "../images/gplus.png";
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";
import Twitter from "../images/twitter.png";
import Youtube from "../images/youtube.png";
import ManLeft from "../images/Male-Avatar-Left.jpg";
import ManRight from "../images/Male-Avatar-Right.jpg";
import Hope from "../images/hope2.PNG";
import '../styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Main-Page">
        <div className="Body-Content">
          <div className="Upper-Panel">
            <img style={{height:800}} className="Portrait" src={ManLeft} />
            <div className="Upper-Panel-Content">
              <img style={{height:'100%'}} className="Portrait" src={Hope} />
            </div>
            <img style={{height:800}} className="Portrait" src={ManRight} />
          </div>
          <div className="Lower-Panel">
            <div className="Media-Icons">
              <img src={Google} className="Social-Media-Icon" />
              <img src={Facebook} className="Social-Media-Icon" />
              <img src={Twitter} className="Social-Media-Icon" />
              <img src={Instagram} className="Social-Media-Icon"/>
              <img src={Youtube} className="Social-Media-Icon"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Home };
