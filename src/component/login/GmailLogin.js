import React from 'react';
import GoogleLogin from 'react-google-login';
import PropTypes from 'prop-types';

const GmailLogin = ({ handleLogin }) => {
  return (
    <GoogleLogin
      clientId="37487767547-1g4akkokm58ig8k1et84qm50tpoo891b.apps.googleusercontent.com"
      buttonText="LOGIN WITH GOOGLE"
      onSuccess={handleLogin}
    />
  );
};

export default GmailLogin;
GmailLogin.propTypes = { handleLogin: PropTypes.func };
