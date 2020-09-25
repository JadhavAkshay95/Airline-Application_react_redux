// @ts-nocheck
import React from 'react'
import { shallow } from 'enzyme'
import PassengerRow from './PassengerRow'

const renderPassengerRow = args => {
  const defaultProps = {
    passenger: {},
    currentUser: {},
    handleEdit: () => {},
    handleChangeStatus: () => {},
    handleServices: () => {}
  }

  const props = { ...defaultProps, ...args }
  return shallow(<PassengerRow {...props} />)
}

describe('Passenger row component', () => {
  const passenger = {
    ancillaryServices: ['testData', 'ExtraBagge'],
    id: '1',
    name: {
      firstName: 'test',
      lastName: 'test'
    },
    meal: 'veg',
    checkIn: true,
    passengerStatus: { infant: true, wheelChair: true },
    seatDetails: { seatNumber: '1' },
    address: { societyDetails: 'test' },
    passportDetails: { passportNumber: '123' }
  }

  it('Render passenger row component', () => {
    let currentUser = { role: 'admin' }
    let wrapper = renderPassengerRow({ passenger, currentUser })
    expect(wrapper.find('.passenger-row-container')).toHaveLength(1)
    expect(wrapper.find('td')).toHaveLength(10)

    currentUser = { role: 'staff' }
    // eslint-disable-next-line no-undef
    global.window = { location: { pathname: '/check-in' } }
    wrapper = renderPassengerRow({ passenger, currentUser })
    expect(wrapper.find('.passenger-row-container')).toHaveLength(1)
    expect(wrapper.find('td')).toHaveLength(10)

    // eslint-disable-next-line no-undef
    global.window = { location: { pathname: '/in-flight' } }

    wrapper = renderPassengerRow({ passenger, currentUser })
    expect(wrapper.find('.passenger-row-container')).toHaveLength(1)
    expect(wrapper.find('td')).toHaveLength(10)
  })
})
