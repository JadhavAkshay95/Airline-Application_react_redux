import * as ActionConstant from './../../common/actionConstant'
import * as PassengerApi from './../../api/passengerApi'

export const loadPassengerSucess = passengerList => {
  return {
    type: ActionConstant.LOAD_PASSENGER_LIST,
    passengerList
  }
}

export const filterPassenger = (searchBy, isChecked) => {
  return {
    type: ActionConstant.FILTER_PASSENGER,
    searchBy,
    isChecked
  }
}

export const addNewPassenger = passenger => {
  return {
    type: ActionConstant.ADD_NEW_PASEENGER,
    passenger
  }
}

export const updatePassengerSuccess = passenger => {
  return {
    type: ActionConstant.UPDATE_PASSENGER,
    passenger
  }
}

export const updatePassenger = passenger => {
  return dispatch => {
    return PassengerApi.updatePassenger(passenger).then(response => {
      dispatch(updatePassengerSuccess(response.data))
    })
  }
}

export const loadPassenger = flightId => {
  return dispatch => {
    return PassengerApi.getPassengerList(flightId).then(response => {
      dispatch(loadPassengerSucess(response.data))
    })
  }
}

export const addPassenger = passenger => {
  return dispatch => {
    return PassengerApi.addPassenger(passenger).then(response => {
      dispatch(addNewPassenger(response.data))
    })
  }
}
