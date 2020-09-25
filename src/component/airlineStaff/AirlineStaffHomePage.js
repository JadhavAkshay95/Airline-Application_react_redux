import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './airlinestaff.scss'
import ServiceCard from './ServiceCard'
import PropTypes from 'prop-types'

const AirlineStaffHomePage = ({ history }) => {
  const handleServiceNavigation = event => {
    event.target.value === 'Check-in'
      ? history.push('/staff-home/check-in/flight-list')
      : history.push('/staff-home/in-flight/flight-list')
  }

  return (
    <div className="airline-staff-dashboard-container">
      <div className="title">
        <h1>Airline staff</h1>
        <hr />
      </div>
      <Container fluid="true">
        <Row>
          <Col>
            <ServiceCard
              handleServiceNavigation={handleServiceNavigation}
              serviceType="Check-in"
              serviceDesc="Hassle-free Flight Bookings, Offers on Multiple Airlines, Instant Discounts! Multiple Offers Everyday. Easy & Fast Booking. Cashback On Every Booking. Hurry! 24*7 Customer Service! Best Deals Guaranteed. No Cost EMI. 15 Mil. Happy Customers."
            />
          </Col>
          <Col>
            <ServiceCard
              handleServiceNavigation={handleServiceNavigation}
              serviceType="In-flight"
              serviceDesc="Hassle-free Flight Bookings, Offers on Multiple Airlines, Instant Discounts! Multiple Offers Everyday. Easy & Fast Booking. Cashback On Every Booking. Hurry! 24*7 Customer Service! Best Deals Guaranteed. No Cost EMI. 15 Mil. Happy Customers."
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AirlineStaffHomePage
AirlineStaffHomePage.propTypes = { history: PropTypes.object }
