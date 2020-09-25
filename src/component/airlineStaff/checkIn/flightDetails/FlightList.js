import React, { useEffect } from 'react'
import Flight from './Flight'
import * as FlightAction from './../../../../redux/actions/flightAction'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export const FlightList = ({
  flightList,
  loadFlight,
  currentUser,
  history
}) => {
  useEffect(() => {
    loadFlight()
  }, [])
  return (
    <>
      <Flight
        flightList={flightList}
        history={history}
        currentUser={currentUser}
      />
      <br></br> <br></br>
      <br></br>
    </>
  )
}

const mapStateToProps = state => {
  return {
    flightList: state.flightReducer,
    currentUser: Array.isArray(state.loginReducer) ? null : state.loginReducer
  }
}

const mapDispatchToProps = {
  loadFlight: FlightAction.loadFlight
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightList)
FlightList.propTypes = {
  flightList: PropTypes.array,
  loadFlight: PropTypes.func,
  currentUser: PropTypes.object,
  history: PropTypes.object
}
