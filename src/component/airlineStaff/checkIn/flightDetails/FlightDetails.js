import React, { useEffect, useState } from 'react';
import * as FlightAction from './../../../../redux/actions/flightAction';
import * as SeatMapAction from './../../../../redux/actions/seatMapAction';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import './flight.scss';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import SeatMap from './../seatDetails/SeatMap';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { faStepBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddServicesModal from '../../checkIn/flightDetails/AddServicesModal';

export const FlightDetails = ({
  getFlight,
  flight,
  updateFlightDetails,
  seatMapDetails,
  getSeatMap,
  match,
  getSeatMapAllocationDetails,
  seatMapAllocationDetails,
  currentUser,
  history
}) => {
  const [isLoading, setLoading] = useState(true);
  const [showServiceModal, setshowServiceModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await getFlight(match.params.id);
      await getSeatMap(match.params.id);
      await getSeatMapAllocationDetails(match.params.id);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <>
        <Spinner
          className="spinner"
          animation="border"
          role="status"
          variant="primary"
        >
          <span className="sr-only">Loading...</span>
        </Spinner>
      </>
    );
  }

  const closeManageServiceModal = () => {
    setshowServiceModal(false);
  };

  const handleModalSubmit = () => {
    updateFlightDetails(flight);
    setshowServiceModal(false);
  };

  const showModal = () => {
    setshowServiceModal(true);
  };

  return (
    <>
      <a className="backLink" href="#" onClick={() => history.goBack()}>
        <FontAwesomeIcon
          style={{ color: '#00b383', margin: '0px 5px' }}
          icon={faStepBackward}
        />
        <span>back</span>
      </a>
      <h1>Flight Details</h1>
      <Card key={flight.id} style={{ margin: '10px 0px' }}>
        <Card.Header>
          <Row>
            <Col>
              <div className="shadow p-3 mb-5 bg-white flightCart">
                <div
                  className="fromLocation"
                  style={{
                    height: '100px',
                    width: '100px',
                    display: 'inline-block'
                  }}
                >
                  <img
                    style={{
                      height: '100px',
                      width: '100px'
                    }}
                    alt={require(`../../../../images/${flight.flightCompany.logo}`)}
                    src={require(`../../../../images/${flight.flightCompany.logo}`)}
                  />
                </div>
                <div>
                  <h4> {flight.flightCompany.name}</h4>
                  <h5> {flight.flightCompany.type}</h5>
                </div>
              </div>
            </Col>
            <Col>
              <div className="shadow p-3 mb-5 bg-white flightCart">
                <h3>Time</h3>
                <hr></hr>
                <div>
                  <p>
                    <span style={{ margin: '10px' }}>
                      Boarding Time : {flight.time.boardingTime}
                    </span>
                    <span> Deparature Time : {flight.time.deparatureTime}</span>
                  </p>
                </div>
                <div>
                  Duration: {flight.time.duration}
                  <div>{flight.time.type}</div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="shadow p-3 mb-5 bg-white flightCart">
                <h3>Location </h3> <hr></hr>
                <div>Source : {flight.flightSource}</div>
                <div>Destination : {flight.flightDest}</div>
              </div>
            </Col>
            <Col>
              <div className="shadow p-3 mb-5 bg-white flightCart">
                <h3>
                  Total Stops : {flight && flight.stops && flight.stops.length}
                </h3>
                <hr></hr>
                {flight && flight.stops && flight.stops.length !== 0 && (
                  <div>Stops: {flight.stops.join(', ')}</div>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            {flight.facility.length && (
              <Col>
                <div className="shadow p-3 mb-5 bg-white rounded">
                  <h3>Services</h3> <hr></hr>
                  {flight.facility.some(item => item.isSelected)
                    ? flight.facility.map(
                        facility =>
                          facility.isSelected && (
                            <>
                              <span className="items" key={facility.label}>
                                {facility.label}
                              </span>
                            </>
                          )
                      )
                    : 'NA'}
                </div>
              </Col>
            )}
            {flight.shoppingItems.length && (
              <Col>
                <div className="shadow p-3 mb-5 bg-white rounded">
                  <h5>Shopping Items</h5> <hr></hr>
                  {flight.shoppingItems.some(item => item.isSelected)
                    ? flight.shoppingItems.map(
                        items =>
                          items.isSelected && (
                            <>
                              <span className="items" key={items.label}>
                                {items.label}
                              </span>
                            </>
                          )
                      )
                    : 'NA'}
                </div>
              </Col>
            )}
            <Col>
              <Link to={`${match.url}/passengerList`} style={{ margin: '10%' }}>
                <Button
                  variant="primary"
                  className="flight-button"
                  key={'flight-button2'}
                >
                  Show Passenger List
                </Button>
              </Link>
              {currentUser && currentUser.role === 'admin' && (
                <Button
                  key={'flight - button1'}
                  variant="primary"
                  className="flight-button"
                  onClick={() => showModal()}
                >
                  Manage Services
                </Button>
              )}
            </Col>
            <Col></Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Container fluid="true" >
            {
              <Row>
                {currentUser && currentUser.role !== 'admin' && (
                  <Col className="shadow p-3 mb-5 bg-white rounded">
                    <SeatMap
                      seatMapDetails={seatMapDetails}
                      seatMapAllocationDetails={seatMapAllocationDetails}
                      isDisabled={true}
                    />
                  </Col>
                )}
              </Row>
            }
          </Container>
        </Card.Body>
      </Card>
      <AddServicesModal
        flight={flight}
        show={showServiceModal}
        closeManageServiceModal={closeManageServiceModal}
        handleModalSubmit={handleModalSubmit}
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    flight: state.flightReducer,
    seatMapDetails: state.seatMapReducer,
    seatMapAllocationDetails: state.seatMapAllocationReducer,
    currentUser: Array.isArray(state.loginReducer) ? null : state.loginReducer
  };
};

const mapDispatchToProps = {
  getFlight: FlightAction.getFlight,
  updateFlightDetails: FlightAction.updateFlightDetails,
  getSeatMap: SeatMapAction.getSeatMap,
  getSeatMapAllocationDetails: SeatMapAction.getSeatMapAllocationDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(FlightDetails);
FlightDetails.propTypes = {
  getFlight: PropTypes.func,
  flight: PropTypes.shape({
    facility: PropTypes.array,
    shoppingItems: PropTypes.array,
    stops: PropTypes.array,
    flightSource: PropTypes.string,
    flightDest: PropTypes.string,
    flightCompany: PropTypes.object,
    time: PropTypes.object,
    id: PropTypes.string
  }),
  seatMapDetails: PropTypes.object,
  getSeatMap: PropTypes.func,
  match: PropTypes.object,
  getSeatMapAllocationDetails: PropTypes.func,
  seatMapAllocationDetails: PropTypes.array,
  currentUser: PropTypes.object,
  history: PropTypes.object,
  updateFlightDetails: PropTypes.func
};
