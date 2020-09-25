import * as ActionConstant from './../../common/actionConstant'
import * as FlightApi from './../../api/flightApi'

export const getSeatMapSuccess = seatMapDetails => {
  return {
    type: ActionConstant.GET_SEAT_MAP_DETAILS,
    seatMapDetails
  }
}

export const getSeatMapAllocationDetailsSuccess = seatMapAllocationDetails => {
  return {
    type: ActionConstant.GET_SEAT_MAP_ALLOCATION_DETAILS,
    seatMapAllocationDetails
  }
}

export const UpdateSeatMapSuccess = seatMap => {
  return {
    type: ActionConstant.UPDATE_SEAT_MAP,
    seatMap
  }
}

export const updateSeatMap = seatMap => {
  return dispatch => {
    return FlightApi.updateSeatMap(seatMap).then(response => {
      dispatch(UpdateSeatMapSuccess(response.data))
    })
  }
}

export const getSeatMap = id => {
  return dispatch => {
    return FlightApi.getSeatMapDetails(id).then(response => {
      dispatch(getSeatMapSuccess(response.data))
    })
  }
}

export const getSeatMapAllocationDetails = id => {
  return dispatch => {
    return FlightApi.getSeatMapAllocationDetails(id).then(response => {
      dispatch(getSeatMapAllocationDetailsSuccess(response.data))
    })
  }
}
