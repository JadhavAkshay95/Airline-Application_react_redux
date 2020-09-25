import React from 'react'
import { shallow } from 'enzyme'
import AirlineStaffHomePage from './AirlineStaffHomePage'

const renderAirlineStaffHomePage = args => {
  const defaultProps = {
    history: {}
  }

  const props = { ...defaultProps, ...args }
  return shallow(<AirlineStaffHomePage {...props} />)
}

describe('Render airline staff home page component', () => {
  it('Render airline staff header', () => {
    const wrapper = renderAirlineStaffHomePage()
    expect(wrapper.find('h1').text()).toBe('Airline staff')
  })
})
