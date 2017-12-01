import React, { Component } from 'react';
import '../../styles/Header.css'


class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="titleWrapper">
          <h1 className="title">Niviira</h1>
        </div>
        <div className="navWrapper">
          <ul className="navBar">
            <li>
              <button className="navItemActiive">Home</button>
            </li>
            <li>
              <button className="navItem">Books</button>
            </li>
            <li>
              <button className="navItem">Merchandise</button>
            </li>
            <li>
              <button className="navItem">About</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export { Header };
