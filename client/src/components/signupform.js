import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';





class SignupForm extends React.Component {


  //sets initial states so we con't get a component error
    state={
        name: '',
        password:''
    };

  //these two functions handle the logging of keys typed into our entry forms
    handleName = e =>{
      const newName = e.target.value;
      this.setState({
          name: newName
      });
  };

  handlePass = e =>{
      const newPassword = e.target.value;
      this.setState({
          password: newPassword
      });
  };

  //clears our entry forms and submits the data on enter press
  handleKeyDown = e => {
    if (e.key === "Enter"){
        this.props.submit(this.state.name, this.state.password);
        this.setState({ name:"", password:""});
    }
};

render(){
  const { name } = this.state;
  const {password} = this.state;

    return(
      <div>
      <Typography variant="title" color="inherit" className="flex">
      Signup
    </Typography>
      <form className="container" noValidate autoComplete="off">
      <TextField
      label="Name"
      onChange={this.handleName}
      onKeyDown={this.handleKeyDown}
      className="textField"
      value={name}
      fullWidth margin="normal" 
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        ),
      }}
    />
    <TextField
     label="Password"
     onChange={this.handlePass}
     onKeyDown={this.handleKeyDown}
     className="textField"
     value={password}
     fullWidth margin="normal"
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

export default SignupForm;