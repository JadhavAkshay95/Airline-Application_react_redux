import React from 'react'
import { shallow } from 'enzyme'
import ChangeMealPrefModal from './ChangeMealPrefModal'

const renderChangeMealPrefModal = args => {
  const defaultProps = {
    show: null,
    selectedPassenger: {},
    closeMealModal: () => {},
    handleModalSubmit: () => {},
    handleMealOptionChange: () => {}
  }
  const props = { ...defaultProps, ...args }
  return shallow(<ChangeMealPrefModal {...props} />)
}

describe('Render login side info component', () => {
  it('Render login side info', () => {
    const selectedPassenger = {
      name: {
        firstName: 'akshay',
        lastName: 'jadhav'
      },
      ancillaryServices: ['extraBaggage'],
      passengerStatus: {
        infant: true,
        wheelChair: false
      }
    }
    let wrapper = renderChangeMealPrefModal({
      show: true,
      selectedPassenger: selectedPassenger
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.mr-auto').text()).toEqual('close')

    wrapper = renderChangeMealPrefModal({
      show: false,
      selectedPassenger: selectedPassenger
    })
    expect(wrapper).toMatchSnapshot()
  })
})
