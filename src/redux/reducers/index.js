import { combineReducers } from 'redux'
import passengerReducer from './passengerReducer'
import flightReducer from './flightReducer'
import seatMapReducer from './seatMapReducer'
import seatMapAllocationReducer from './seatMapAllocationReducer'
import loginReducer from './loginReducer'

const rootReducer = combineReducers({
  passengerReducer,
  flightReducer,
  seatMapReducer,
  seatMapAllocationReducer,
  loginReducer
})

export default rootReducer
