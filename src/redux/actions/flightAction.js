import * as ActionConstant from './../../common/actionConstant';
import * as FlightApi from './../../api/flightApi';

export const loadFlightSuccess = flightList => {
  return {
    type: ActionConstant.GET_FLIGHT_LIST,
    flightList
  };
};

export const getFlightSuccess = flightDetails => {
  return {
    type: ActionConstant.GET_FLIGHT_DETAILS,
    flightDetails
  };
};

export const updateSeatMapSuccess = seatMap => {
  return {
    type: ActionConstant.UPDATE_SEAT_MAP,
    seatMap
  };
};

export const updateFlightDetailsSuccess = flightDetails => {
  return {
    type: ActionConstant.UPDATE_FLIGHT_DETAILS,
    flightDetails
  };
};

export const updateFlightDetails = flight => {
  return dispatch => {
    return FlightApi.updateFlight(flight).then(response => {
      dispatch(updateFlightDetailsSuccess(response.data));
    });
  };
};

export const updateSeatMap = seatMap => {
  return dispatch => {
    return FlightApi.updateSeatMap(seatMap).then(response => {
      dispatch(updateSeatMapSuccess(response.data));
    });
  };
};

export const loadFlight = () => {
  return dispatch => {
    return FlightApi.getFlightList().then(response => {
      dispatch(loadFlightSuccess(response.data));
    });
  };
};

export const getFlight = id => {
  return dispatch => {
    return FlightApi.getFlight(id).then(response => {
      dispatch(getFlightSuccess(response.data));
    });
  };
};
