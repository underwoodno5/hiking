import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import SignupField from './signupform';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';


//-------------
//-- GQL SETUP
//-------------

  //--- Parsing Queries --\\
const UsersQuery = gql`
{
  users{
    id
    name
    password
  }
}
`;

const CreateMutation = gql`
mutation($name: String!, $password: String!){
 createUser(name: $name, password: $password){
   name
   password
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

class Signup extends React.Component {

//---GQL function--\\

createUser = async (name, password) => {
  await this.props.createUser({
    variables: {
      name,
      password
    },
    update: store => {
      const data = store.readQuery({ query: UsersQuery });
      store.writeQuery({ query: UsersQuery, data });
    }
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
        <Button onClick={this.handleOpen}>Signup</Button>
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>

            <SignupField submit={this.createUser}/>
          </div>
        </Modal>
      </div>
    );
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
};

const SignupWrapped = withStyles(styles)(Signup);

export default compose(
  graphql(CreateMutation, {name: "createUser"}),
  graphql(UsersQuery)
)(SignupWrapped);