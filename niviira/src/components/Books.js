import React, { Component } from 'react';
import "../styles/Books.css"
import "../App.css"

class Books extends Component {
  render() {
    return (
      <div className="main-page">
        <div className='comingSoon'>
          <h1 className="comingSoon">Info Coming Soon!</h1>
          <h3>Check here to find info about new and future books!</h3>
        </div>
      </div>
    );
  }
}

export { Books };
