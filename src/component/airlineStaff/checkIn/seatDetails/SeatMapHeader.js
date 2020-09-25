import React from 'react'
import Seat from './Seat'
import './seat.scss'
import { Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'

const SeatMapHeader = ({ inFlight }) => {
  return (
    <>
      <h1>Seat Map</h1>
      <Row>
        <Col>
          {!inFlight ? (
            <div>
              <Seat isActive={false} seatColor="#ff794d" /> Passenger with
              wheelchair |
              <Seat isActive={false} seatColor="#4dff4d" />
              Passenger checkin |
              <Seat isActive={false} seatColor="#ffff4d" />
              Passenger with infant |
              <Seat isActive={false} seatColor="blue" />
              Passenger checkout
              <Seat
                isActive={false}
                className="seatMapFooter"
                currentSeat={true}
              />
              Current seat |
              <Seat isActive={false} seatColor="white" />
              Vacant seat
            </div>
          ) : (
            <>
              <Seat isActive={false} seatColor="#79ff4d" />
              <span>Veg Passenger</span> |
              <Seat isActive={false} seatColor="#ffa64d" />
              <span>Non-veg Passenger</span> |
              <Seat isActive={false} seatColor="#00bfff" />
              <span>Vegan</span> |
              <Seat isActive={false} seatColor="white" /> |
              <span>Vacant seat</span>
            </>
          )}
        </Col>
      </Row>
    </>
  )
}

export default SeatMapHeader
SeatMapHeader.propTypes = { inFlight: PropTypes.bool }
