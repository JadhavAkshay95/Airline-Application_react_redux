import React from 'react';
import './seat.scss';
import PropTypes from 'prop-types';

const Seat = ({
  seatNumber,
  seatColor,
  selectedPassenger,
  isActive = true,
  currentSeat,
  handleSeatChangeData,
  isDisabled = false
}) => {
  const tooltip = `Seat Number : ${seatNumber}`;
  const inFlight = window.location.pathname.includes('in-flight');

  return (
    <>
      {!inFlight && selectedPassenger ? (
        <button
          className={
            isActive &&
            selectedPassenger.seatDetails.seatNumber === seatNumber.toString()
              ? 'selectedSeat'
              : 'seat'
          }
          style={{ backgroundColor: seatColor }}
          title={isActive ? tooltip : null}
          value={seatNumber}
          onClick={handleSeatChangeData}
          disabled={isDisabled ? isDisabled : seatColor !== 'white'}
        >
          <span>{seatNumber}</span>
        </button>
      ) : (
        <button
          disabled={isDisabled ? isDisabled : seatColor !== 'white'}
          style={{ backgroundColor: seatColor }}
          className={currentSeat ? 'selectedSeat' : 'seat'}
          title={isActive ? tooltip : null}
          value={seatNumber}
        >
          <span>{seatNumber}</span>
        </button>
      )}
    </>
  );
};
export default Seat;
Seat.propTypes = {
  seatNumber: PropTypes.number,
  seatColor: PropTypes.string,
  selectedPassenger: PropTypes.object,
  isActive: PropTypes.bool,
  currentSeat: PropTypes.bool,
  handleSeatChangeData: PropTypes.func,
  isDisabled: PropTypes.bool
};
