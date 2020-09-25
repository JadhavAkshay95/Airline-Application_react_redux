import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './flight.scss';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { faPlane, faStepBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PropTypes from 'prop-types';

const FlightList = ({ flightList, history, currentUser }) => {
  return (
    <>
      {currentUser && currentUser.role !== 'admin' && (
        <div>
          <a className="backLink" href="#" onClick={() => history.goBack()}>
            <FontAwesomeIcon
              style={{ color: '#00b383', margin: '0px 5px' }}
              icon={faStepBackward}
            />
            <span>back</span>
          </a>
        </div>
      )}
      <h1>Flight list</h1>
      <div>
        <Container fluid="true" style={{ marginTop: '1%' }}>
          <div
            style={{
              boxShadow: '0px 0px 5px #00b383',
              margin: '10px',
              padding: '10px'
            }}
          >
            <Row>
              <Col></Col>
              <Col>
                <h3>Airline company</h3>
              </Col>
              <Col>
                <h3>From</h3>
              </Col>
              <Col></Col>
              <Col>
                <h3>To</h3>
              </Col>
              <Col>
                <h3>Arrival time</h3>
              </Col>
              <Col>
                <h3>Flight details</h3>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <hr></hr>
      {flightList.length &&
        flightList.map(flight => (
          <div key={flight.id} className="flight-list">
            <Container fluid="true">
              <Row>
                <Col>
                  <img
                    style={{
                      height: '100px',
                      width: '100px'
                    }}
                    alt={require(`../../../../images/${flight.flightCompany.logo}`)}
                    src={require(`../../../../images/${flight.flightCompany.logo}`)}
                  />
                </Col>
                <Col>
                  <h4> {flight.flightCompany.name}</h4>
                </Col>
                <Col>
                  <div className={classes.fromLocation}>
                    <div>{flight.flightSource}</div>
                  </div>
                </Col>
                <Col>
                  <FontAwesomeIcon
                    style={{ color: '#00b383', margin: ' 0px 10px' }}
                    icon={faPlane}
                  />
                </Col>
                <Col>
                  <div>
                    <div>{flight.flightDest}</div>
                  </div>
                </Col>
                <Col>
                  <div>{flight.time.boardingTime}</div>
                </Col>
                <Col>
                  <Link to={`${window.location.pathname}/${flight.id}`}>
                    Flight Details
                  </Link>
                </Col>
              </Row>
            </Container>
          </div>
        ))}
    </>
  );
};

export default FlightList;
FlightList.propTypes = {
  flightList: PropTypes.array,
  history: PropTypes.object,
  currentUser: PropTypes.object
};
