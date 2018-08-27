import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import LoginForm from './loginform';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';



//-------------
//-- GQL SETUP
//-------------

 //--- Parsing Queries --\\


  const CheckMutation = gql`
  mutation($namecheck: String!, $passcheck: String!){
   checkUser(namecheck: $namecheck, passcheck: $passcheck){
     namecheck
     passcheck
     id
    }
  }
  `;

//----------------
//-- MODAL STYLES
//----------------
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class Login extends React.Component {
  //---GQL function--\\

checkUser = async (namecheck, passcheck) => {
  await this.props.checkUser({
    variables: {
      namecheck,
      passcheck
    },
  });
}

//---Modal setup--\\

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div  className="login">
        <Button onClick={this.handleOpen}>Login</Button>
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>

            <LoginForm submit={this.checkUser} />
          </div>
        </Modal>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const LoginWrapped = withStyles(styles)(Login);

export default compose(
  graphql(CheckMutation, {name: "checkUser"}),
)(LoginWrapped);