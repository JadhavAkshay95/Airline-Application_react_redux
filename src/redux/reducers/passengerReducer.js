import * as ActionConstant from './../../common/actionConstant'

const passengerReducer = (state = [], action) => {
  const filterPassenger = () => {
    if (action.isChecked) {
      switch (action.searchBy) {
        case 'passport':
          return [...state].filter(
            passeneger =>
              passeneger.passportDetails &&
              passeneger.passportDetails.passportNumber
          )

        case 'address':
          return [...state].filter(
            passeneger => passeneger.address && passeneger.address.city
          )

        case 'dob':
          return [...state].filter(
            passeneger => passeneger && passeneger.dateOfBirth
          )

        case 'infant':
          return [...state].filter(
            passeneger =>
              passeneger.passengerStatus && passeneger.passengerStatus.infant
          )

        case 'wheelChair':
          return [...state].filter(
            passeneger =>
              passeneger.passengerStatus &&
              passeneger.passengerStatus.wheelChair
          )

        case 'checkeIn':
          return [...state].filter(passeneger => passeneger.checkIn)

        case 'unCheck':
          return [...state].filter(passeneger => !passeneger.checkIn)

        default:
          return state
      }
    } else {
      return state
    }
  }

  switch (action.type) {
    case ActionConstant.LOAD_PASSENGER_LIST:
      return action.passengerList

    case ActionConstant.FILTER_PASSENGER:
      return filterPassenger()

    case ActionConstant.ADD_NEW_PASEENGER:
      return [...state, action.passenger]

    case ActionConstant.UPDATE_PASSENGER:
      return state.map(passenger =>
        passenger.id === action.passenger.id ? action.passenger : passenger
      )
    default:
      return state
  }
}

export default passengerReducer
