import React from 'react';
import Modal from 'react-bootstrap/Modal';
import SeatMap from './SeatMap';
import PropTypes from 'prop-types';

const ChangePassengerStatus = ({
  show,
  seatMapDetails,
  seatMapAllocationDetails,
  selectedPassenger,
  passengerList,
  handleClose,
  handleCheckOut,
  currentUser
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
          <Modal.Title>
            <h3>Change passenger status</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SeatMap
            seatMapDetails={seatMapDetails}
            seatMapAllocationDetails={seatMapAllocationDetails}
            selectedPassenger={selectedPassenger}
            handleCheckOut={handleCheckOut}
            passengerList={passengerList}
            currentUser={currentUser}
          />
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>close</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ChangePassengerStatus;
ChangePassengerStatus.propTypes = {
  show: PropTypes.bool,
  seatMapDetails: PropTypes.object,
  seatMapAllocationDetails: PropTypes.array,
  selectedPassenger: PropTypes.object,
  passengerList: PropTypes.array,
  handleClose: PropTypes.func,
  handleCheckOut: PropTypes.func,
  currentUser: PropTypes.object
};
