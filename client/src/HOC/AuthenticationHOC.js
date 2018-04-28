import React from 'react';
import { loginAPI } from '../utils/authAPI';

const withAuth = Component => class AuthService extends React.Component {
  state={
    email: '',
    password: '',
  }


  changeValue = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  signIn = (event) => {
    event.preventDefault();
    loginAPI({ ...this.state });
  }

  signUp = (event) => {
    event.preventDefault();
  }

  authProps = {
    signIn: this.signIn,
    signUp: this.signUp,
    changeValue: this.changeValue,
  }

  render() {
    return (
      <Component {...this.props} {...this.authProps} />
    );
  }
};


export default withAuth;

