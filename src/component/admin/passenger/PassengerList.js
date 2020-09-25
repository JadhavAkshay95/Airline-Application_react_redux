import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as PassengerAction from '../../../redux/actions/passengerAction';
import * as SeatMapAction from '../../../redux/actions/seatMapAction';
import * as FlightAction from '../../../redux/actions/flightAction';
import PassengerTable from './passengerTable/PassengerTable';
import PassengerForm from './passengerForm/PassengerForm';
import '../../../index.css';
import ChangePassengerStatus from '../../airlineStaff/checkIn/seatDetails/ChangePassengerStatus';
import ChangeMealPrefModal from '../../airlineStaff/inFlight/ChangeMealPrefModal';
import ManageServicesModal from '../../airlineStaff/inFlight/ManageServicesModal';
import Button from 'react-bootstrap/Button';
import * as initialState from './passengerInitialState';
import PassengerFilter from './passengerFilter';
import { handleMealChangeData, handleInfantChangeData } from './utility';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStepBackward,
  faFastBackward
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom/cjs/react-router-dom';

export const PassengerList = ({
  passengerList,
  loadPassenger,
  addPassenger,
  match,
  seatMapDetails,
  seatMapAllocationDetails,
  updatePassenger,
  updateSeatMap,
  filterPassenger,
  currentUser,
  history,
  getFlight,
  flight
}) => {
  const [showForm, setShowForm] = useState(false);
  const [showStatusForm, setShowStatusForm] = useState(false);
  const [selectedPassenger, setSelectedPassenger] = useState({});
  const [showMealPrefModal, setShowMealPrefModal] = useState(false);
  const [showAncilaryModal, setshowAncilaryModal] = useState(false);
  const [totalSeat, setTotalSeat] = useState([]);
  useEffect(() => {
    loadPassenger(match.params.id);
    getFlight(match.params.id);
  }, [loadPassenger]);

  const checkForAvailableSeats = () => {
    if (totalSeat.length === 0) {
      for (let i = 1; i <= 100; i++) {
        totalSeat.push(i.toString());
      }
    }
    if (passengerList.length) {
      passengerList.forEach(passenger => {
        totalSeat.splice(Number(passenger.seatDetails.seatNumber) - 1, 1);
      });
    }
    setTotalSeat(totalSeat);
  };

  const handleFormClose = e => {
    e.preventDefault();
    setPassenger(initialState.initialState);
    setShowForm(false);
  };

  const handleEdit = event => {
    checkForAvailableSeats();
    const passenger = passengerList.find(
      passenger => passenger.id === event.target.value
    );
    totalSeat.push(passenger.seatDetails.seatNumber);
    setTotalSeat(totalSeat);
    setPassenger(passenger);
    setShowForm(true);
  };

  const submitHandler = event => {
    event.seatDetails.flightNumber = match.params.id;
    addPassenger(event);
    setPassenger(initialState.initialState);
    setShowForm(false);
  };

  const updateHandler = event => {
    updatePassenger(event);
    setPassenger(initialState.initialState);
    setShowForm(false);
  };

  const handleChangeStatus = event => {
    setShowStatusForm(true);
    const passenger = passengerList.find(
      passenger => passenger.id === event.target.value
    );
    setSelectedPassenger(passenger);
  };

  const handleClose = () => {
    setShowStatusForm(false);
    setshowAncilaryModal(false);
    setShowMealPrefModal(false);
  };

  const handleServices = (event, operation) => {
    setSelectedPassenger(event);
    switch (operation) {
      case 'meal':
        setShowMealPrefModal(true);
        break;
      case 'ancilary':
        setshowAncilaryModal(true);
        break;
      default:
        break;
    }
  };

  const [passenger, setPassenger] = useState(initialState.initialState);

  const handleCheckOut = async (seatMapToUpdate, passengerToUpdate) => {
    await updateSeatMap(seatMapToUpdate);
    await updatePassenger(passengerToUpdate);
    handleClose();
  };

  const handleModalSubmit = event => {
    if (event.target.value === 'meal') {
      const MealChangeData = handleMealChangeData(
        seatMapDetails,
        selectedPassenger
      );
      handleCheckOut(
        MealChangeData.seatMapDetails,
        MealChangeData.selectedPassenger
      );
    } else {
      const infantChangeData = handleInfantChangeData(
        seatMapDetails,
        selectedPassenger
      );
      handleCheckOut(
        infantChangeData.seatMapDetails,
        infantChangeData.selectedPassenger
      );
    }
  };

  const handleMealOptionChange = event => {
    setSelectedPassenger({ ...selectedPassenger, meal: event.target.value });
  };

  const handleCheckBoxChange = event => {
    console.log(flight.facility);
    if (event.target.name === 'ansillary') {
      event.target.checked
        ? setSelectedPassenger({
            ...selectedPassenger,
            ancillaryServices: [
              ...selectedPassenger.ancillaryServices,
              event.target.value
            ]
          })
        : setSelectedPassenger({
            ...selectedPassenger,
            ancillaryServices: selectedPassenger.ancillaryServices.filter(
              service => service !== event.target.value
            )
          });
    } else {
      event.target.checked
        ? setSelectedPassenger({
            ...selectedPassenger,
            shoppingItems: [
              ...selectedPassenger.shoppingItems,
              event.target.value
            ]
          })
        : setSelectedPassenger({
            ...selectedPassenger,
            shoppingItems: selectedPassenger.shoppingItems.filter(
              service => service !== event.target.value
            )
          });
    }
  };

  const handleAnsilaryCheckBoxChange = event => {
    setSelectedPassenger({
      ...selectedPassenger,
      passengerStatus: {
        ...selectedPassenger.passengerStatus,
        [event.target.value]: event.target.checked
      }
    });
  };

  const handleShowPassenger = () => {
    checkForAvailableSeats();
    setShowForm(true);
  };
  const filters = [];

  const filterByFormField = event => {
    filterPassenger(event.target.value, event.target.checked);
    if (!event.target.checked && filters.length === 0) {
      const index = filters.indexOf(event.target.value);
      if (index) {
        filters.splice(index, 1);
      }
      loadPassenger(match.params.id);
    } else {
      filters.push(event.target.value);
    }
  };

  return (
    <div className="passenger-list-container">
      <div>
        <div>
          <div className="passenger-list-title">
            <div className="passenger-list-title-desc">
              <h1 style={{ position: 'relative', right: '10%' }}>
                Passenger List
              </h1>
            </div>
            {currentUser && currentUser.role === 'admin' ? (
              <Button
                className="add-passenger-button"
                style={{}}
                variant="primary"
                onClick={handleShowPassenger}
              >
                Add new passenger
              </Button>
            ) : (
              <>
                <Link className="backLink" to={'/staff-home'}>
                  <FontAwesomeIcon
                    style={{ color: '#00b383', margin: ' 0px 10px' }}
                    icon={faFastBackward}
                  />
                  Go to dashboard
                </Link>
              </>
            )}
            <a className="backLink" href="#" onClick={() => history.goBack()}>
              <FontAwesomeIcon
                style={{ color: '#00b383', margin: '0px 5px' }}
                icon={faStepBackward}
              />
              <span>back</span>
            </a>
          </div>
        </div>
        <hr></hr>
        <br />
        <PassengerFilter
          currentUser={currentUser}
          filterByFormField={filterByFormField}
          handleShowPassenger={handleShowPassenger}
        />

        <PassengerForm
          show={showForm}
          handleFormClose={handleFormClose}
          submitHandler={submitHandler}
          updateHandler={updateHandler}
          passenger={passenger}
          totalSeat={totalSeat}
        />

        <PassengerTable
          passengerList={passengerList}
          handleEdit={handleEdit}
          handleChangeStatus={handleChangeStatus}
          handleServices={handleServices}
          currentUser={currentUser}
        />

        <ChangePassengerStatus
          show={showStatusForm}
          seatMapDetails={seatMapDetails}
          seatMapAllocationDetails={seatMapAllocationDetails}
          selectedPassenger={selectedPassenger}
          passengerList={passengerList}
          handleClose={handleClose}
          handleCheckOut={handleCheckOut}
          currentUser={currentUser}
        />
        {Object.keys(selectedPassenger).length !== 0 && (
          <>
            <ChangeMealPrefModal
              show={showMealPrefModal}
              selectedPassenger={selectedPassenger}
              closeMealModal={() => setShowMealPrefModal(false)}
              handleModalSubmit={handleModalSubmit}
              handleMealOptionChange={handleMealOptionChange}
            />

            <ManageServicesModal
              show={showAncilaryModal}
              selectedPassenger={selectedPassenger}
              closeManageServiceModal={handleClose}
              handleModalSubmit={handleModalSubmit}
              handleCheckBoxChange={handleCheckBoxChange}
              handleAnsilaryCheckBoxChange={handleAnsilaryCheckBoxChange}
              history={history}
              match={match}
              flightFacility={flight.facility.filter(facility => {
                return facility.isSelected;
              })}
              flightShoppingItems={flight.shoppingItems.filter(item => {
                return item.isSelected;
              })}
            />
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    flight: state.flightReducer,
    passengerList: state.passengerReducer,
    seatMapDetails: state.seatMapReducer,
    seatMapAllocationDetails: state.seatMapAllocationReducer,
    currentUser: Array.isArray(state.loginReducer) ? null : state.loginReducer
  };
};

const mapDispatchToProps = {
  loadPassenger: PassengerAction.loadPassenger,
  addPassenger: PassengerAction.addPassenger,
  updatePassenger: PassengerAction.updatePassenger,
  updateSeatMap: FlightAction.updateSeatMap,
  filterPassenger: PassengerAction.filterPassenger,
  getSeatMap: SeatMapAction.getSeatMap,
  getFlight: FlightAction.getFlight
};

export default connect(mapStateToProps, mapDispatchToProps)(PassengerList);
PassengerList.propTypes = {
  passengerList: PropTypes.array,
  loadPassenger: PropTypes.func,
  addPassenger: PropTypes.func,
  match: PropTypes.object,
  seatMapDetails: PropTypes.object,
  seatMapAllocationDetails: PropTypes.array,
  updatePassenger: PropTypes.func,
  updateSeatMap: PropTypes.func,
  filterPassenger: PropTypes.func,
  currentUser: PropTypes.object,
  history: PropTypes.object,
  getFlight: PropTypes.func,
  flight: PropTypes.object
};
