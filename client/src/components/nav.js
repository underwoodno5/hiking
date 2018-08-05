import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';


class Nav extends React.Component {
    state = {
        anchorEl: null,
      };
    
      handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
      };
    
      handleClose = () => {
        this.setState({ anchorEl: null });
      };


render() {
    const { anchorEl } = this.state;
    return(
        <div className="root">
            <AppBar position="static">
                <Toolbar>
                    <IconButton 
                    className="menuButton" 
                    color="inherit" 
                    aria-label="Menu"
                    aria-owns={anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                    >
                    <MenuItem onClick={this.handleClose}>Login</MenuItem>
                    </Menu>
                    <Typography variant="title" color="inherit" className="titleName">
                    East Coast Trail
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
        );
    }
}

export default Nav;