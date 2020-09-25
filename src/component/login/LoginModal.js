import Modal from 'react-bootstrap/Modal'
import GmailLogin from './GmailLogin'
import FbLogin from './FbLogin'
import Button from 'react-bootstrap/Button'
import React from 'react'
import PropTypes from 'prop-types'
import './login.scss'

const LoginModal = ({
  show,
  handleGoogleLogin,
  handleFbLogin,
  handleClose
}) => {
  return (
    <>
      <Modal
        show={show}
        size="lg"
        centered
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="add-margin">
            <p>
              <GmailLogin handleLogin={handleGoogleLogin} />
            </p>
            <p className="fb-login">
              <FbLogin handleLogin={handleFbLogin} />
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default LoginModal

LoginModal.propTypes = {
  show: PropTypes.bool,
  handleGoogleLogin: PropTypes.func,
  handleFbLogin: PropTypes.func,
  handleClose: PropTypes.func
}
