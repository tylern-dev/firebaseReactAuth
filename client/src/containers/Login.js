import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Error from '../components/Error';
import withAuth from '../HOC/AuthenticationHOC';

const Login = ({ signIn, changeValue, error }) => (
  <Fragment>
    <h1>Login Page</h1>
    <form onSubmit={signIn}>
      <label htmlFor="email">Email:
        <input id="email" type="text" name="email" onChange={changeValue} />
      </label>
      <label htmlFor="password">Password:
        <input id="password" type="password" name="password" onChange={changeValue} />
      </label>
      <button type="submit">Log In</button>
    </form>
    <Error error={error} />
  </Fragment>
);

Login.propTypes = {
  signIn: PropTypes.func.isRequired,
  changeValue: PropTypes.func.isRequired,
  error: PropTypes.string,
};


export default withAuth(Login);
