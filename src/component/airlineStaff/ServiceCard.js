import React from 'react'
import Button from 'react-bootstrap/Button'
import './airlinestaff.scss'
import PropTypes from 'prop-types'

const ServiceCard = ({ serviceType, serviceDesc, handleServiceNavigation }) => {
  return (
    <>
      <div className="cart">
        <Button
          className="button"
          value={serviceType}
          variant="primary"
          onClick={handleServiceNavigation}
        >
          {serviceType} services
        </Button>
        <div className="description">
          <p>{serviceDesc}</p>
        </div>
      </div>
    </>
  )
}

export default ServiceCard
ServiceCard.propTypes = {
  serviceType: PropTypes.string,
  serviceDesc: PropTypes.string,
  handleServiceNavigation: PropTypes.func
}
