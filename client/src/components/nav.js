import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import LoginWrapped from './login';



class Nav extends React.Component {
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
    const sideList = (
      <div className="list">
        <List>
          <ListItem>
            <Typography variant="title" color="inherit" className="flex">
              Menu
            </Typography>
          </ListItem>
          <Divider />
          <ListItem button component="a" href="#">
            <ListItemText primary="My Account" />
          </ListItem>
          <ListItem button component="a" href="#">
            <ListItemText primary="Hikes in my area" />
          </ListItem>
          <ListItem button component="a" href="#">
            <ListItemText primary="Find Hike By Name" />
          </ListItem>
        </List>
      </div>
    );



    return (
      <div>
      <div className="root">
      <AppBar position="static">
        <Toolbar>
          <IconButton 
          className="menuButton" 
          color="inherit" 
          aria-label="Menu"
          onClick={this.toggleDrawer('left', true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className="flex">
            News
          </Typography>
          <LoginWrapped>
          </LoginWrapped>
        </Toolbar>
      </AppBar>
       <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
       </Drawer>
      </div>
      </div>
    );
  }
}


export default  Nav;