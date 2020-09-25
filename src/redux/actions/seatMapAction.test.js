import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import configMockStore from 'redux-mock-store'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import * as ActionConstant from './../../common/actionConstant'
import * as SeatMapAction from './seatMapAction'

const middleWare = [thunk]
const mockStore = configMockStore(middleWare)

describe('Seatmap action', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('Should create a GET_SEAT_MAP_DETAILS action', () => {
    // Mock data
    const seatMapDetails = {
      id: 'f1',
      totalSeat: 100,
      veg: {
        seat: ['4', '5'],
        color: 'green'
      },
      passnegerWithInfant: {
        seat: ['49', '5', '98'],
        color: 'blue'
      },
      passnegerWithWheelChair: {
        seat: ['5', '49', '[object Object]'],
        color: 'red'
      }
    }

    // Mock Api call
    const mock = new MockAdapter(axios)
    mock.onGet('http://localhost:4500/seatMap/f1').reply(200, seatMapDetails)

    // Expected Action
    const expectedAction = {
      type: ActionConstant.GET_SEAT_MAP_DETAILS,
      seatMapDetails: seatMapDetails
    }

    const store = mockStore({ seatMapDetails: seatMapDetails })
    // @ts-ignore
    return store.dispatch(SeatMapAction.getSeatMap('f1')).then(() => {
      expect(store.getActions()[0]).toEqual(expectedAction)
    })
  })

  it('Should create a UPDATE_SEAT_MAP action', () => {
    // Mock data
    const seatMap = {
      id: 'f1',
      totalSeat: 100,
      veg: {
        seat: ['1'],
        color: 'green'
      },
      passnegerWithInfant: {
        seat: ['49', '5', '98'],
        color: 'blue'
      },
      passnegerWithWheelChair: {
        seat: ['5', '49'],
        color: 'red'
      }
    }

    // Mock Api call
    const mock = new MockAdapter(axios)
    mock.onPut('http://localhost:4500/seatMap/f1', seatMap).reply(200, seatMap)

    // Expected Action
    const expectedAction = {
      type: ActionConstant.UPDATE_SEAT_MAP,
      seatMap: seatMap
    }

    const store = mockStore({ seatMap: seatMap })
    // @ts-ignore
    return store.dispatch(SeatMapAction.updateSeatMap(seatMap)).then(() => {
      expect(store.getActions()[0]).toEqual(expectedAction)
    })
  })

  it('Should create a GET_SEAT_MAP_ALLOCATION_DETAILS action', () => {
    // Mock data
    const seatMapAllocationDetails = {
      id: 'f1',
      totalSeat: 100,
      veg: {
        seat: ['4', '5'],
        color: 'green'
      },
      passnegerWithInfant: {
        seat: ['49', '5', '98'],
        color: 'blue'
      },
      passnegerWithWheelChair: {
        seat: ['5', '49', '[object Object]'],
        color: 'red'
      }
    }

    // Mock Api call
    const mock = new MockAdapter(axios)
    mock
      .onGet('http://localhost:4500/passengerList?seatDetails.flightNumber=f1')
      .reply(200, seatMapAllocationDetails)

    // Expected Action
    const expectedAction = {
      type: ActionConstant.GET_SEAT_MAP_ALLOCATION_DETAILS,
      seatMapAllocationDetails
    }

    const store = mockStore({
      seatMapAllocationDetails: seatMapAllocationDetails
    })
    // @ts-ignore
    return (
      store
        // @ts-ignore
        .dispatch(SeatMapAction.getSeatMapAllocationDetails('f1'))
        .then(() => {
          expect(store.getActions()[0]).toEqual(expectedAction)
        })
    )
  })
})
