import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import gql from 'graphql-tag';



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

class SignupField extends React.Component {

    state={
        text: ""
    };

    handleChange = (e) => {
        const newText = e.target.value;
        console.log(newText);
        this.setState({
            text: newText
        });
    };

    handleKeyDown = (e) => {
        if(e.key === 'enter'){
            this.props.submit(this.state.text);
        }
    };

  
  render(){
    const { classes } = this.props;
    const {text} = this.state 
   

    return(
      <div>
      <Typography variant="title" color="inherit" className="flex">
      Signup
    </Typography>
      <form className={classes.container} noValidate autoComplete="off">
      <TextField
      id="name"
      label="Name"
      onChange = {this.handleChange}
      onKeyDown = {this.handleKeyDown}
      className={classes.textField}
      value={text}
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
SignupField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignupField);