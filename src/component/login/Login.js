import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as LoginAction from './../../redux/actions/loginAction';
import './login.scss';
import LoginSideInfo from './LoginSideInfo';
import LoginModal from './LoginModal';
import PropTypes from 'prop-types';

export const Login = ({ history, setCurrentUser, getCurrentUser }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const openLoginModal = () => {
    setShow(true);
  };

  const handleFbLogin = async response => {
    await setCurrentUser({
      role: 'staff',
      username: response.email
    });
    await getCurrentUser();
    history.push('/staff-home');
    handleClose();
  };

  const handleGoogleLogin = async response => {
    await setCurrentUser({
      role: 'admin',
      username: response.username
    });
    await getCurrentUser();

    history.push('/admin/flight-list');
    handleClose();
  };

  return (
    <Container fluid="true" className="login-container">
      <Row>
        <Col>
          <div className="login-logo">
            <img
              alt={require('../../images/aa.png')}
              src={require('../../images/aa.png')}
            />
          </div>
        </Col>
        <LoginModal
          show={show}
          handleClose={handleClose}
          handleGoogleLogin={handleGoogleLogin}
          handleFbLogin={handleFbLogin}
        />
        <LoginSideInfo showLoginModal={openLoginModal} />
      </Row>
    </Container>
  );
};

export const mapStateToProps = state => {
  return {
    currentUser: Array.isArray(state.loginReducer) ? null : state.loginReducer
  };
};

const mapDispatchToProps = {
  setCurrentUser: LoginAction.setCurrentUser,
  getCurrentUser: LoginAction.getCurrentUser
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
Login.propTypes = {
  history: PropTypes.object,
  setCurrentUser: PropTypes.func,
  getCurrentUser: PropTypes.func
};
