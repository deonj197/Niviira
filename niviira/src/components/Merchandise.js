import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import "../styles/Merchandise.css"
import "../App.css"
import FaAngleRight from 'react-icons/lib/fa/angle-right'

class Merchandise extends Component {
  render() {
    return (
      <div className="merchandise">
        <div className='comingSoon'>
          <h1 className="comingSoon">Merchandise Coming Soon!</h1>
          <h3>Check here to find future hope brand items...</h3>
        </div>
      </div>
      /*<Parallax>
        <div className='merchandise'>
          <div className='scrollers-wrapper'>
            <div className='scrollers'>
              <div className='scroller-row'>
                <div className='item-container'>
                </div>
                <div className='item-container'>
                </div>
                <div className='item-container'>
                </div>
                <div className='item-container'>
                </div>
                <div className='more'>
                  <FaAngleRight size={30} />
                </div>
              </div>
              <div className='scroller-row'>
                <div className='item-container'>
                </div>
                <div className='item-container'>
                </div>
                <div className='item-container'>
                </div>
                <div className='item-container'>
                </div>
                <div className='more'>
                  <FaAngleRight size={30} />
                </div>
              </div>
              <div className='scroller-row'>
                <div className='item-container'>
                </div>
                <div className='item-container'>
                </div>
                <div className='item-container'>
                </div>
                <div className='item-container'>
                </div>
                <div className='more'>
                  <FaAngleRight size={30} />
                </div>
              </div>
              <div className='view-all'>
                <div className='view-all-button'>
                  <h2>VIEW ALL</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>*/
    );
  }
}

export { Merchandise };
