import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from './Logo';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Button from 'react-bootstrap/Button';
import * as LoginAction from './../../redux/actions/loginAction';
import PropTypes from 'prop-types';

export const Header = ({ currentUser, logout }) => {
  const logoutUser = () => {
    logout({});
  };

  return (
    <Container className="header" fluid="true">
      <div className="row-header">
        <Col>
          <Logo />
        </Col>
        <Col style={{ textAlign: 'end' }}>
          {currentUser && (
            <>
              <div
                style={{
                  display: 'inline',
                  margin: ' 10px',
                  color: 'white'
                }}
              >
                <span>
                  Hello {currentUser.role} {currentUser.username}
                </span>
              </div>

              <Link to="/">
                <Button variant="secondary" onClick={logoutUser}>
                  Logout
                </Button>
              </Link>
            </>
          )}
        </Col>
      </div>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: Array.isArray(state.loginReducer) ? null : state.loginReducer
  };
};
const mapDispatchToProps = {
  logout: LoginAction.logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
Header.propTypes = { currentUser: PropTypes.object, logout: PropTypes.func };
