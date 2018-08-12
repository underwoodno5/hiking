import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import SignupField from './signupform';


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

const CreateUserMutation = gql`
mustation($name: String!){
    createUser(name: $name){
        id
        name
    }
} 
`;

class Signup extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  createUser = (name) => {

  }

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

export default compose (
    graphql(CreateUserMutation, {name: "createUser"})
)(SignupWrapped);