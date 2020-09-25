import Button from 'react-bootstrap/Button'
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const LoginSideInfo = ({ showLoginModal }) => {
  return (
    <>
      <Col>
        <Row>
          <Col>
            <div className="flight-intro">
              <h1 className="app-title">
                <FontAwesomeIcon
                  style={{ color: '#00b383', margin: ' 0px 10px' }}
                  icon={faPaperPlane}
                />
                Airline Application
              </h1>
              <h4 style={{ color: '#00b383' }}> Come, fly high with us!</h4>
              <hr></hr>
              <Button onClick={showLoginModal}>Click here to login</Button>
              <hr></hr>
              <h3 className="flight-intro-desc">
                Airlines - Book Domestic and international Airlines in India at
                Lowest airfares at Airline.com. Best deals on Low cost airline
                tickets booking reservation, Airlines operating in India. Get
                cheap fares Airlines Tickets deals online at Make Trip India.
              </h3>
              <hr></hr>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="flight-intro-desc-more">
              Airline user friendly navigation helps you find cheap airline
              tickets; in addition to features such as checking check in,
              checkout status, meal pref etc. Come, fly high with us!
            </h5>
          </Col>
        </Row>
        <div></div>
      </Col>
    </>
  )
}

export default LoginSideInfo
LoginSideInfo.propTypes = { showLoginModal: PropTypes.func }
