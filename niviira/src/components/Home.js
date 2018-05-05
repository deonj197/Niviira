import React, { Component } from 'react';

import Cover from "../images/Niviira_gold_2.jpg";
import LinkedIn from "../images/linkedin.png";
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";
import Twitter from "../images/twitter.png";
import Youtube from "../images/youtube.png";
import ManLeft from "../images/Male-Avatar-Left.jpg";
import ManRight from "../images/Male-Avatar-Right.jpg";
import Hope from "../images/hope2.PNG";
import Background from "../images/day_detroit.jpg";
import '../styles/Home.css';
import { Parallax } from 'react-scroll-parallax';

class Home extends Component {
  render() {
    return (
      <Parallax
          offsetYMin={-50}
          offsetYMax={50}>
        <div className="Main-Page">
          <div className="Body-Content">
            <div className="Upper-Panel">
              {/*<img style={{height:800}} className="Portrait" src={ManLeft} />*/}
              <div className="Upper-Panel-Content">
               
              </div>
              {/*<img style={{height:800}} className="Portrait" src={ManRight} />*/}
            </div>
            <div className="Lower-Panel">
              <div className="Media-Icons">
                <a>
                  <img src={LinkedIn} className="Social-Media-Icon" />
                </a>
                <a href="https://www.facebook.com/TheCjHope/">
                  <img src={Facebook} className="Social-Media-Icon" />
                </a>
                <a href="https://twitter.com/TheCjHope">
                  <img src={Twitter} className="Social-Media-Icon" />
                </a>
                <a href="https://www.instagram.com/TheCjHope/">
                  <img src={Instagram} className="Social-Media-Icon"/>
                </a>
                <a alt="Coming Soon">
                  <img src={Youtube} className="Social-Media-Icon"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    );
  }
}

export { Home };
