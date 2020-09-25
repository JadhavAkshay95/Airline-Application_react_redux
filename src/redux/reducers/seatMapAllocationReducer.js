import * as ActionConstant from './../../common/actionConstant'

const seatMapAllocationReducer = (state = [], action) => {
  switch (action.type) {
    case ActionConstant.GET_SEAT_MAP_ALLOCATION_DETAILS:
      return action.seatMapAllocationDetails

    default:
      return state
  }
}
export default seatMapAllocationReducer
