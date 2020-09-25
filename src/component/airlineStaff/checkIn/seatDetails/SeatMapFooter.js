import React, { useState } from 'react';
import './seat.scss';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const SeatMapFooter = ({
  handleSeatOperation,
  selectedPassenger,
  seatChangeOperation,
  enableSeats
}) => {
  const [showSeatChangeMessage, setShowSeatChangeMessage] = useState(false);

  const showMessage = () => {
    if (showSeatChangeMessage) {
      seatChangeOperation();
    } else {
      setShowSeatChangeMessage(true);
      enableSeats(true);
    }
  };
  return (
    <div className="seatMapFooter">
      {showSeatChangeMessage && (
        <h3>
          Select the seat you want change and then click on seat change button
        </h3>
      )}
      {selectedPassenger &&
        !selectedPassenger.checkIn &&
        !selectedPassenger.checkOut && (
          <>
            <Button
              onClick={handleSeatOperation}
              value="checkIn"
              variant="primary"
            >
              Check In
            </Button>
            <Button variant="dark" value="seatChange" onClick={showMessage}>
              Seat change
            </Button>
          </>
        )}
      {selectedPassenger &&
        selectedPassenger.checkIn &&
        !selectedPassenger.checkOut && (
          <>
            <Button
              onClick={handleSeatOperation}
              value="undoCheckIn"
              variant="warning"
            >
              Undo checkIn
            </Button>
            <Button
              variant="success"
              onClick={handleSeatOperation}
              value="checkOut"
            >
              Check out
            </Button>
            <Button variant="dark" value="seatChange" onClick={showMessage}>
              Seat change
            </Button>
          </>
        )}
    </div>
  );
};

export default SeatMapFooter;
SeatMapFooter.propTypes = {
  handleSeatOperation: PropTypes.func,
  selectedPassenger: PropTypes.object,
  seatChangeOperation: PropTypes.func,
  enableSeats: PropTypes.func
};
