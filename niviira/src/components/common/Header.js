import React, { Component } from 'react';
import Routes from '../Routes'
import { NavLink } from 'react-router-dom';
import Hope from "../../images/cjhope6.PNG";
import logo from '../../images/logo-black.png'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TemporaryDrawer from './TemporaryDrawer'

import '../../styles/Header.css'

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class Header extends Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: true,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
    alert('called')
  };

  render() {
    const { classes } = this.props;

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
              <TemporaryDrawer />
            </div>
          </div>
          
          
        
        
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
