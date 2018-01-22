import React, { Component } from 'react';
import Routes from '../Routes'
import { NavLink } from 'react-router-dom';
import Hope from "../../images/cjhope6.PNG";

import '../../styles/Header.css'


class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="titleWrapper">
          <img style={{height:'50%'}} src={Hope} />
        </div>
        <div className="navWrapper">
          <ul className="navBar">
            <li>
                <NavLink exact className="Link" activeClassName="LinkActive" to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className="Link" activeClassName="LinkActive" to="/books">Books</NavLink>
            </li>
            <li>
                <NavLink className="Link" activeClassName="LinkActive" to="/merchandise">Merchandise</NavLink>
            </li>
            <li>
              <NavLink className="Link" activeClassName="LinkActive" to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export { Header };
