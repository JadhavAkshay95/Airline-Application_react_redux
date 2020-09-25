import React from 'react'
import { shallow } from 'enzyme'
import SeatMapFooter from './SeatMapFooter'

const renderSeatMapFooter = args => {
  const defaultProps = {
    handleSeatOperation: () => {},
    selectedPassenger: () => {},
    seatChangeOperation: () => {}
  }

  const props = { ...defaultProps, ...args }
  return shallow(<SeatMapFooter {...props} />)
}

describe('Render Seat map Footer component', () => {
  it('Render buttons initially', () => {
    const selectedPassenger = {
      checkIn: false,
      checkOut: false
    }
    const wrapper = renderSeatMapFooter({ selectedPassenger })
    expect(wrapper.find('Button')).toHaveLength(2)
  })

  it('Render buttons for check-in status', () => {
    const selectedPassenger = {
      checkIn: true,
      checkOut: false
    }
    const wrapper = renderSeatMapFooter({ selectedPassenger })
    expect(wrapper).toMatchSnapshot()
  })
})
