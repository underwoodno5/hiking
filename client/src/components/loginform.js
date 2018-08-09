import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';



const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

class TextFields extends React.Component {
  
  render(){
    const { classes } = this.props;

    return(
      <div>
      <Typography variant="title" color="inherit" className="flex">
      Login
    </Typography>
      <form className={classes.container} noValidate autoComplete="off">

      <TextField
      id="name"
      label="Name"
      className={classes.textField}
      margin="normal"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        ),
      }}
    />
    <TextField
     id="password-input"
     label="Password"
     className={classes.textField}
     type="password"
     margin="normal"
     InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <Lock />
        </InputAdornment>
      ),
    }}
    />
    </form>
    </div>

    );
  }
}
TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);