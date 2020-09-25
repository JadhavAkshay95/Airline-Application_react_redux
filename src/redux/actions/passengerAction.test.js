import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import configMockStore from 'redux-mock-store'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import * as ActionConstant from './../../common/actionConstant'
import * as PassengerAction from './passengerAction'

const middleWare = [thunk]
const mockStore = configMockStore(middleWare)

describe('Passenger action', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('Should create a LOAD_PASSENGER_LIST action', () => {
    // Mock data
    const passengerList = [
      {
        id: '1',
        name: {
          firstName: 'Akshay jadhav',
          lastName: 'Jadhavaa'
        },
        address: {
          flatDetails: '',
          city: 'Pune'
        }
      },
      {
        id: '2',
        name: {
          firstName: 'vikas',
          lastName: 'Jadhav'
        },
        address: {
          flatDetails: '',
          city: 'Pune'
        }
      }
    ]

    // Mock Api call
    const mock = new MockAdapter(axios)
    mock
      .onGet('http://localhost:4500/passengerList?seatDetails.flightNumber=f1')
      .reply(200, passengerList)

    // Expected Action
    const expectedAction = {
      type: ActionConstant.LOAD_PASSENGER_LIST,
      passengerList: passengerList
    }

    const store = mockStore({ passengerList: passengerList })
    // @ts-ignore
    return store.dispatch(PassengerAction.loadPassenger('f1')).then(() => {
      expect(store.getActions()[0]).toEqual(expectedAction)
    })
  })

  it('Should create a ADD_NEW_PASEENGER action', () => {
    // Mock data
    const passenger = {
      id: '2',
      name: {
        firstName: 'vikas',
        lastName: 'Jadhav'
      },
      address: {
        flatDetails: '',
        city: 'Pune'
      }
    }

    // Mock Api call
    const mock = new MockAdapter(axios)
    mock
      .onPost('http://localhost:4500/passengerList/', passenger)
      .reply(200, passenger)

    // Expected Action
    const expectedAction = {
      type: ActionConstant.ADD_NEW_PASEENGER,
      passenger: passenger
    }

    const store = mockStore({ passenger: passenger })
    // @ts-ignore
    return store.dispatch(PassengerAction.addPassenger(passenger)).then(() => {
      expect(store.getActions()[0]).toEqual(expectedAction)
    })
  })

  it('Should create a UPDATE_PASSENGER action', () => {
    // Mock data
    const passenger = {
      id: '2',
      name: {
        firstName: 'vikas',
        lastName: 'Jadhav'
      },
      address: {
        flatDetails: '',
        city: 'Pune'
      }
    }

    // Mock Api call
    const mock = new MockAdapter(axios)
    mock
      .onPut('http://localhost:4500/passengerList/2', passenger)
      .reply(200, passenger)

    // Expected Action
    const expectedAction = {
      type: ActionConstant.UPDATE_PASSENGER,
      passenger: passenger
    }

    const store = mockStore({ passenger: passenger })
    // @ts-ignore
    return (
      store
        // @ts-ignore
        .dispatch(PassengerAction.updatePassenger(passenger))
        .then(() => {
          expect(store.getActions()[0]).toEqual(expectedAction)
        })
    )
  })
})
