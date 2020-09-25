import * as seatMapAction from './../actions/seatMapAction'
import seatMapAllocationReducer from './seatMapAllocationReducer'

describe('Seat map allocation reducers', () => {
  it('Should get seat map details when passed GET_SEAT_MAP_ALLOCATION_DETAILS action', () => {
    const initialState = []
    const seatMapAllocationDetails = [
      {
        id: 'f1',
        totalSeat: 100,
        veg: {
          seat: ['4', '5'],
          color: 'green'
        },
        nonVeg: {
          seat: [],
          color: 'red'
        },
        vegan: {
          seat: ['9', '49', '98'],
          color: 'red'
        },
        checkInSeat: {
          seat: ['49', '[object Object]'],
          color: 'green'
        },
        checkOut: {
          seat: [],
          color: 'skyblue'
        },
        passnegerWithInfant: {
          seat: ['49', '5'],
          color: 'blue'
        },
        passnegerWithWheelChair: {
          seat: ['5', '49', '100'],
          color: 'red'
        }
      }
    ]
    const newState = seatMapAction.getSeatMapAllocationDetailsSuccess(
      seatMapAllocationDetails
    )
    seatMapAllocationReducer(initialState, newState)
    expect(newState.seatMapAllocationDetails.length).toEqual(1)
  })
})
