import React from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const PassengerFormHeader = ({ handleFormClose, passenger }) => {
  return (
    <div className="form-header">
      {passenger.id ? <h2>Update passenger</h2> : <h2>Add new passenger</h2>}
      <a href="true" onClick={handleFormClose}>
        <FontAwesomeIcon icon={faTimes} style={{ float: 'right' }} />
      </a>
      <hr />
    </div>
  )
}

export default PassengerFormHeader
PassengerFormHeader.propTypes = {
  handleFormClose: PropTypes.func,
  passenger: PropTypes.object
}
