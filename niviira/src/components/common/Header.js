import React, { Component } from 'react';
import '../../styles/Header.css'


class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="titleWrapper">
          <p className="title">Niviira</p>
        </div>
        <div className="navWrapper">
          <ul className="navBar">
            <li className="navItemActiive">Home</li>
            <li className="navItem">Books</li>
            <li className="navItem">Merchandise</li>
            <li className="navItem">About</li>
          </ul>
        </div>
      </div>
    );
  }
}

export { Header };
