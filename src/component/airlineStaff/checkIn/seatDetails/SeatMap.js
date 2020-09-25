import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Seat from './Seat';
import SeatMapHeader from './SeatMapHeader';
import SeatMapFooter from './SeatMapFooter';
import {
  decideColorOfSeatBasedOnMeal,
  decideColorOfSeat
} from './../../../admin/passenger/utility';
import PropTypes from 'prop-types';

const SeatMap = ({
  seatMapDetails,
  seatMapAllocationDetails,
  handleSeatChange,
  selectedPassenger,
  passengerList,
  handleCheckOut,
  currentUser
}) => {
  const total = [...Array(100)];
  const leftSeat = total.slice(0, seatMapDetails.totalSeat / 2);
  const rightSeat = total.slice(seatMapDetails.totalSeat / 2);
  const [seatToChange, setSeatToChange] = useState();
  const inFlight = window.location.pathname.includes('in-flight');
  const [isDisabled1, setIsDisabled1] = useState(true);
  const getPassengerInfo = index => {
    return seatMapAllocationDetails.find(
      passenger => passenger.seatDetails.seatNumber === index.toString()
    );
  };

  const getSeatMapdetails = (seatStatus, isAdd) => {
    if (isAdd) {
      seatMapDetails[seatStatus].seat = seatMapDetails[seatStatus].seat.filter(
        seat => seat !== selectedPassenger.seatDetails.seatNumber
      );
    } else {
      const check =
        seatMapDetails[seatStatus].seat &&
        seatMapDetails[seatStatus].seat.indexOf(
          selectedPassenger.seatDetails.seatNumber
        );
      if (check === undefined || check === -1) {
        seatMapDetails[seatStatus].seat.push(
          selectedPassenger.seatDetails.seatNumber
        );
      }
    }

    if (seatStatus === 'checkOut') {
      seatMapDetails.checkInSeat.seat.splice(
        seatMapDetails.checkInSeat.seat.indexOf(
          selectedPassenger.seatDetails.seatNumber
        ),
        1
      );
    }
    return seatMapDetails;
  };

  const getPassenger = () => {
    return passengerList.find(
      passenger => passenger.id === selectedPassenger.id
    );
  };

  const handleSeatChangeData = event => {
    setIsDisabled1(false);
    if (event.target.innerText) {
      setSeatToChange(event.target.innerText.toString());
    }
  };

  const handleSeatOperation = operation => {
    const passenger = getPassenger();

    switch (operation.target.value || operation) {
      case 'checkOut':
        handleCheckOut(getSeatMapdetails('checkOut', false), {
          ...passenger,
          checkOut: true
        });
        break;

      case 'checkIn':
        handleCheckOut(getSeatMapdetails('checkInSeat', false), {
          ...passenger,
          checkIn: true
        });
        break;

      case 'undoCheckIn':
        handleCheckOut(getSeatMapdetails('checkInSeat', true), {
          ...passenger,
          checkIn: false
        });
        break;

      default:
        break;
    }
  };

  const seatChangeOperation = () => {
    const passenger = getPassenger();
    const currentSeat = passenger.seatDetails.seatNumber;

    if (passenger.checkIn && !passenger.checkOut) {
      removeSeat('checkInSeat', currentSeat);
      seatMapDetails.checkInSeat.seat.push(seatToChange);
    } else if (passenger.passengerStatus.infant) {
      removeSeat('passnegerWithInfant');
      seatMapDetails.passnegerWithInfant.seat.push(seatToChange);
    } else if (passenger.passengerStatus.wheelChair) {
      removeSeat('passnegerWithWheelChair');
      seatMapDetails.passnegerWithWheelChair.seat.push(seatToChange);
    }
    handleCheckOut(seatMapDetails, {
      ...passenger,
      seatDetails: { ...passenger.seatDetails, seatNumber: seatToChange }
    });
  };

  const removeSeat = (checkInSeat, currentSeat) => {
    const index = seatMapDetails[checkInSeat].seat.indexOf(currentSeat);
    return index ? seatMapDetails[checkInSeat].seat.splice(index, 1) : null;
  };

  const handleSeatEnable = () => {
    setIsDisabled1(false);
  };

  return (
    <>
      <SeatMapHeader inFlight={inFlight} />
      <hr />
      <div>
        <Container style={{ width: '100%' }} fluid={true}>
          <Row>
            <Col>
              {leftSeat.map((seat, i) => (
                <Seat
                  key={i}
                  seatNumber={i + 1}
                  passenger={getPassengerInfo(i + 1)}
                  seatColor={
                    !inFlight
                      ? decideColorOfSeat(i + 1, seatMapDetails)
                      : decideColorOfSeatBasedOnMeal(i + 1, seatMapDetails)
                  }
                  handleSeatChange={handleSeatChange}
                  selectedPassenger={selectedPassenger}
                  handleSeatChangeData={handleSeatChangeData}
                  currentUser={currentUser}
                  isDisabled={isDisabled1}
                />
              ))}
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              {rightSeat.map((seat, i) => (
                <Seat
                  key={i}
                  seatNumber={i + 1 + seatMapDetails.totalSeat / 2}
                  seatColor={
                    !inFlight
                      ? decideColorOfSeat(
                          i + 1 + seatMapDetails.totalSeat / 2,
                          seatMapDetails
                        )
                      : decideColorOfSeatBasedOnMeal(
                          i + 1 + seatMapDetails.totalSeat / 2,
                          seatMapDetails
                        )
                  }
                  passenger={getPassengerInfo(i + 1)}
                  handleSeatChange={handleSeatChange}
                  selectedPassenger={selectedPassenger}
                  handleSeatChangeData={handleSeatChangeData}
                  currentUser={currentUser}
                  isDisabled={isDisabled1}
                />
              ))}
            </Col>
          </Row>
        </Container>

        <Row style={{ display: 'content' }}>
          <Col>
            <hr />
            {!inFlight && window.location.pathname.includes('check-in') && (
              <SeatMapFooter
                handleSeatOperation={handleSeatOperation}
                selectedPassenger={selectedPassenger}
                seatChangeOperation={seatChangeOperation}
                currentUser={currentUser}
                enableSeats={handleSeatEnable}
              />
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SeatMap;
SeatMap.propTypes = {
  seatMapDetails: PropTypes.object,
  seatMapAllocationDetails: PropTypes.array,
  handleSeatChange: PropTypes.func,
  selectedPassenger: PropTypes.object,
  passengerList: PropTypes.array,
  handleCheckOut: PropTypes.func,
  currentUser: PropTypes.object,
  isDisabled: PropTypes.bool
};
