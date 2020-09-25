import React from 'react'
import { shallow } from 'enzyme'
import SeatMapHeader from './SeatMapHeader'

const renderSeatMapHeader = args => {
  const defaultProps = {
    inFlight: false
  }

  const props = { ...defaultProps, ...args }
  return shallow(<SeatMapHeader {...props} />)
}

describe('Render Seat map header component', () => {
  it('Render Seats for check-in', () => {
    const wrapper = renderSeatMapHeader({ inFlight: false })
    expect(wrapper.find('Seat')).toHaveLength(6)
  })

  it('Render Seats for in-flight', () => {
    const wrapper = renderSeatMapHeader({ inFlight: true })
    expect(wrapper.find('Seat')).toHaveLength(4)
  })
})
