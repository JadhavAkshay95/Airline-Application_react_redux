/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import { PassengerFilter } from './passengerFilter'

const renderPassengerFilter = args => {
  const defaultProps = {
    filterPassenger: {},
    currentUser: {},
    filterByFormField: () => {}
  }

  const props = { ...defaultProps, ...args }
  return shallow(<PassengerFilter {...props} />)
}

describe('Passenger filter component', () => {
  it('Should show filters based ', () => {
    // @ts-ignore
    global.window = { location: { pathname: '/admin' } }
    const currentUser = { role: 'admin' }
    const wrapper = renderPassengerFilter({ currentUser })
    expect(wrapper).toMatchSnapshot()
  })
})
