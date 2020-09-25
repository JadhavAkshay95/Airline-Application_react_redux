import React from 'react'
import {
  faCheckCircle,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button'
import './../passenger.scss'
import Moment from 'react-moment'
import PropTypes from 'prop-types'

const PassengerRow = ({
  passenger,
  handleEdit,
  handleChangeStatus,
  handleServices,
  currentUser
}) => {
  const handleManageService = event => {
    handleServices(passenger, event.target.value)
  }
  const inFlight = window.location.pathname.includes('in-flight')

  const convertString = element => {
    return element.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
      return str.toUpperCase()
    })
  }
  return (
    <tr className="passenger-row-container">
      <td>
        {passenger.name.firstName} {passenger.name.lastName}
      </td>
      <td>{passenger.seatDetails.seatNumber}</td>
      <td>
        <Moment format="YYYY/MM/DD" date={passenger.dateOfBirth} />
      </td>
      <td>{passenger.address.city}</td>
      {currentUser && (currentUser.role === 'admin' || inFlight) && (
        <td>{passenger.passportDetails.passportNumber}</td>
      )}
      <td>
        {passenger.ancillaryServices.length
          ? passenger.ancillaryServices.map(element => (
              <p key={element}> {convertString(element)}</p>
            ))
          : 'NA'}
      </td>
      {currentUser.role === 'admin' && (
        <td>{passenger.meal ? convertString(passenger.meal) : 'NA'}</td>
      )}

      {inFlight && (
        <td>{passenger.meal ? convertString(passenger.meal) : 'NA'}</td>
      )}

      {currentUser.role !== 'admin' && !inFlight && (
        <>
          <td>
            <FontAwesomeIcon
              icon={passenger.checkIn ? faCheckCircle : faTimesCircle}
              style={{
                color: passenger.checkIn ? '#00b383' : 'black'
              }}
            />
          </td>
          <td>
            <FontAwesomeIcon
              icon={passenger.checkOut ? faCheckCircle : faTimesCircle}
              style={{
                color: passenger.checkOut ? '#00b383' : 'black'
              }}
            />
          </td>
        </>
      )}

      {!inFlight && (
        <>
          <td>
            <FontAwesomeIcon
              icon={
                passenger.passengerStatus && passenger.passengerStatus.infant
                  ? faCheckCircle
                  : faTimesCircle
              }
              style={{
                color:
                  passenger.passengerStatus && passenger.passengerStatus.infant
                    ? '#00b383'
                    : 'black'
              }}
            />
          </td>

          <td>
            <FontAwesomeIcon
              icon={
                passenger.passengerStatus &&
                passenger.passengerStatus.wheelChair
                  ? faCheckCircle
                  : faTimesCircle
              }
              style={{
                color:
                  passenger.passengerStatus &&
                  passenger.passengerStatus.wheelChair
                    ? '#00b383'
                    : 'black'
              }}
            />
          </td>
        </>
      )}
      <td>
        {currentUser && currentUser.role === 'admin' && (
          <>
            <Button variant="success" value={passenger.id} onClick={handleEdit}>
              Edit
            </Button>
          </>
        )}
        {currentUser && currentUser.role === 'staff' && !inFlight && (
          <Button
            variant="success"
            onClick={handleChangeStatus}
            value={passenger.id}
          >
            Change status
          </Button>
        )}
        {currentUser && currentUser.role === 'admin' && (
          <>
            <Button
              variant="success"
              value="ancilary"
              onClick={handleManageService}
            >
              Manage services
            </Button>

            <Button
              variant="success"
              value="meal"
              onClick={handleManageService}
            >
              Meal preference
            </Button>
          </>
        )}
        {currentUser && inFlight && (
          <>
            <Button
              variant="success"
              value="ancilary"
              onClick={handleManageService}
            >
              Manage services
            </Button>

            <Button
              variant="success"
              value="meal"
              onClick={handleManageService}
            >
              Meal preference
            </Button>
          </>
        )}
      </td>
    </tr>
  )
}

export default PassengerRow
PassengerRow.propTypes = {
  passenger: PropTypes.object,
  handleEdit: PropTypes.func,
  handleChangeStatus: PropTypes.func,
  handleServices: PropTypes.func,
  currentUser: PropTypes.object
}
