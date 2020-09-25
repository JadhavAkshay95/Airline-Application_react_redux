import * as seatMapAction from './../actions/seatMapAction'
import seatMapReducer from './seatMapReducer'

describe('Seat map reducer', () => {
  it('Should get seatMapDetails', () => {
    const seatMapDetails = {
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
      }
    }
    const newAction = seatMapAction.getSeatMapSuccess(seatMapDetails)
    const newState = seatMapReducer([], newAction)
    expect(newState.id).toEqual(seatMapDetails.id)
  })

  it('Should update seatMapDetails', () => {
    const seatMap = {
      id: 'f1',
      totalSeat: 100,
      veg: {
        seat: ['4', '5', '7'],
        color: 'green'
      },
      nonVeg: {
        seat: [],
        color: 'red'
      },
      vegan: {
        seat: ['9', '49', '98'],
        color: 'red'
      }
    }
    const newAction = seatMapAction.UpdateSeatMapSuccess(seatMap)
    const newState = seatMapReducer([], newAction)
    expect(newState.veg.seat.length).toEqual(3)
  })
})
