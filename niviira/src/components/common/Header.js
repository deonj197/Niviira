import React, { Component } from 'react';
import Routes from '../Routes'
import { Link } from 'react-router-dom';

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
                <Link className="LinkActive" to="/">Home</Link>
            </li>
            <li>
                <Link className="Link" to="/books">Books</Link>
            </li>
            <li>
                <Link className="Link" to="/merchandise">Merchandise</Link>
            </li>
            <li>
              <Link className="Link" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export { Header };
