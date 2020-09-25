import * as passengerAction from './../actions/passengerAction'
import passengerReducer from './passengerReducer'

describe('passenger reducer', () => {
  it('Should return passenger list', () => {
    const passengerList = [{ id: 1 }]
    const action = passengerAction.loadPassengerSucess(passengerList)
    const newState = passengerReducer([], action)
    expect(newState.length).toEqual(1)
  })

  it('Should filter passenger list', () => {
    const initialState = [
      {
        name: {
          firstName: 'Akshay',
          lastName: 'Jadhav'
        },
        passportDetails: {
          passportNumber: '1'
        },
        checkIn: true,
        dateOfBirth: '11/10/2011'
      },
      {
        name: {
          firstName: 'Vikas',
          lastName: 'Jadhav'
        },
        address: {
          city: 'pune'
        },
        passengerStatus: {
          infant: true,
          wheelChair: true
        },
        checkIn: false
      }
    ]

    let filterAction = passengerAction.filterPassenger('passport', true)
    let newState = passengerReducer(initialState, filterAction)
    expect(newState.length).toEqual(1)

    filterAction = passengerAction.filterPassenger('address', true)
    newState = passengerReducer(initialState, filterAction)
    expect(newState.length).toEqual(1)

    filterAction = passengerAction.filterPassenger('infant', true)
    newState = passengerReducer(initialState, filterAction)
    expect(newState.length).toEqual(1)

    filterAction = passengerAction.filterPassenger('dob', true)
    newState = passengerReducer(initialState, filterAction)
    expect(newState.length).toEqual(1)

    filterAction = passengerAction.filterPassenger('wheelChair', true)
    newState = passengerReducer(initialState, filterAction)
    expect(newState.length).toEqual(1)

    filterAction = passengerAction.filterPassenger('checkeIn', true)
    newState = passengerReducer(initialState, filterAction)
    expect(newState.length).toEqual(1)

    filterAction = passengerAction.filterPassenger('unCheck', true)
    newState = passengerReducer(initialState, filterAction)
    expect(newState.length).toEqual(1)

    filterAction = passengerAction.filterPassenger('unCheck', false)
    newState = passengerReducer(initialState, filterAction)
    expect(newState.length).toEqual(2)
  })

  it('Should add new passenger', () => {
    const passenger = {
      id: '1',
      name: {
        firstName: 'Test',
        lastName: 'test'
      }
    }
    const newAction = passengerAction.addNewPassenger(passenger)
    const newState = passengerReducer([], newAction)
    expect(newState.length).toEqual(1)
  })

  it('Should update passenger', () => {
    const initialState = [
      {
        id: '1',
        name: {
          firstName: 'Test',
          lastName: 'test'
        }
      }
    ]
    const passenger = {
      id: '1',
      name: {
        firstName: 'Akshay',
        lastName: 'test'
      }
    }
    const newAction = passengerAction.updatePassengerSuccess(passenger)
    const newState = passengerReducer(initialState, newAction)
    expect(newState[0].name.firstName).toEqual(passenger.name.firstName)
  })
})
