import React from 'react'
import { shallow } from 'enzyme'
import { FlightList } from './FlightList'

const renderFlight = args => {
  const defaultProps = {
    flightList: [],
    match: {},
    loadFlight: () => {}
  }

  const props = { ...defaultProps, ...args }
  return shallow(<FlightList {...props} />)
}

describe('Render flight component', () => {
  it('Render flight list', () => {
    const flightList = [
      {
        id: 'f1',
        flightCompany: {
          name: 'Air India',
          logo: 'airindia.jpg',
          type: 'Economy'
        },
        time: {
          boardingTime: '12.55 AM',
          deparatureTime: '3',
          duration: '2 hr',
          type: 'non-stop'
        },
        flightSource: 'Pune',
        flightDest: 'Bengluru',
        stops: [],
        facility: {
          checkinBaggage: '15 kg',
          paidMeal: 'yes'
        },
        totalSeat: 100,
        passengerId: [1, 2]
      }
    ]
    const wrapper = renderFlight({ flightList })
    expect(wrapper).toMatchSnapshot()
  })
})
