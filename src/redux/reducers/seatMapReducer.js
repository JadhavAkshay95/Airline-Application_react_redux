import * as ActionConstant from './../../common/actionConstant'

const seatMapReducer = (state = [], action) => {
  switch (action.type) {
    case ActionConstant.GET_SEAT_MAP_DETAILS:
      return action.seatMapDetails

    case ActionConstant.UPDATE_SEAT_MAP:
      return action.seatMap

    default:
      return state
  }
}
export default seatMapReducer
