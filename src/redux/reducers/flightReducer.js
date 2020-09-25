import * as ActionConstant from './../../common/actionConstant';

const flightReducer = (state = [], action) => {
  switch (action.type) {
    case ActionConstant.GET_FLIGHT_LIST:
      return action.flightList;

    case ActionConstant.GET_FLIGHT_DETAILS:
      return action.flightDetails;

    case ActionConstant.UPDATE_FLIGHT_DETAILS:
      return action.flightDetails;

    default:
      return state;
  }
};
export default flightReducer;
