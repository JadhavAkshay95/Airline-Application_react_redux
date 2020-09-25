import React from 'react'
import { shallow } from 'enzyme'
import SeatMap from './SeatMap'
import { selectedPassenger, seatMapDetails } from './mockData'
const renderSeatMap = args => {
  const defaultProps = {
    seatMapDetails: {},
    seatMapAllocationDetails: [],
    handleSeatChange: () => {},
    selectedPassenger: {},
    passengerList: [],
    handleCheckOut: () => {},
    currentUser: {}
  }
  const props = { ...defaultProps, ...args }
  return shallow(<SeatMap {...props} />)
}

describe('Render SeatMap component', () => {
  it('Render SeatMap', () => {
    const seatMapAllocationDetails = [selectedPassenger]
    const wrapper = renderSeatMap({
      seatMapDetails,
      selectedPassenger,
      seatMapAllocationDetails
    })
    expect(wrapper).toMatchSnapshot()
  })
})
