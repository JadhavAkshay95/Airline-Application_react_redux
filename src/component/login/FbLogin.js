import React from 'react';
import FacebookLogin from 'react-facebook-login';
import PropTypes from 'prop-types';
import './login.scss';

export const FbLogin = ({ handleLogin }) => {
  return (
    <FacebookLogin
      className="fb-login"
      appId="888455274942887"
      autoLoad={false}
      fields="name,email,picture"
      callback={handleLogin}
      icon="fa-facebook"
    />
  );
};

export default FbLogin;
FbLogin.propTypes = { handleLogin: PropTypes.func };
