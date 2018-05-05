import React, { Component } from 'react';
import Routes from '../Routes'
import { NavLink } from 'react-router-dom';
import Hope from "../../images/cjhope6.PNG";
import logo from '../../images/logo-black.png'
import FaBars from 'react-icons/lib/fa/bars'

import '../../styles/Header.css'


class Header extends Component {
  render() {
    return (
      <div className='header'> 
          <div className='icon-left'>
            <div className='icon-left-wrapper'>
              <img src={logo} className='logo' />
            </div>
          </div>
          <h3 className='cjHope'>HOPE</h3>
          <div className='icon-right'> 
            <div className='icon-right-wrapper'>     
              <FaBars className='menu'/>
            </div>
          </div>
          
        
        
      </div>
    );
  }
}

export { Header };
