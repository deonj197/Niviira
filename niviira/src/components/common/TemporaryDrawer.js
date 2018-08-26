import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from '@material-ui/core/List';
import HomeIcon from '@material-ui/icons/Home'
import ShopIcon from '@material-ui/icons/ShoppingCart'
import BookIcon from '@material-ui/icons/ChromeReaderMode'
import InfoIcon from '@material-ui/icons/Info'
import Divider from '@material-ui/core/Divider';
import FaBars from 'react-icons/lib/fa/bars'
import { NavLink, Link } from 'react-router-dom';


const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  drawerItem: {
    display: 'flex',
    flexDirection: 'row',
    textDecoration: 'none',
  }
};

class TemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem button>
            <NavLink to='/' className={classes.drawerItem}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </NavLink>
          </ListItem>  
          <ListItem button>
            <NavLink to='/books' className={classes.drawerItem}> 
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
              <ListItemText primary="Books" />
            </NavLink>           
          </ListItem>       
          <ListItem button>
            <NavLink to='/merchandise' className={classes.drawerItem}>
              <ListItemIcon>
                <ShopIcon />
              </ListItemIcon>
              <ListItemText primary="Shop" />
            </NavLink>
          </ListItem>
          <ListItem button>
            <NavLink to='/about' className={classes.drawerItem}>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About Us" />
            </NavLink>
          </ListItem>
        </List>
        <Divider />
        <List></List>
      </div>
    );

    const fullList = (
      <div className={classes.fullList}>
        <List></List>
        <Divider />
        <List></List>
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer('right', true)}>
          <FaBars className='menu' size={20} />
        </Button>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
