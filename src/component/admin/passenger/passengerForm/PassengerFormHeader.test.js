import React from 'react'
import { shallow } from 'enzyme'
import PassengerFormHeader from './PassengerFormHeader'

const renderPassengerFormHeader = args => {
  const defaultProps = {
    handleFormClose: () => {},
    passenger: {}
  }

  const props = { ...defaultProps, ...args }
  return shallow(<PassengerFormHeader {...props} />)
}

describe('Test passenger form header', () => {
  it('should render passenger form header', () => {
    const wrapper = renderPassengerFormHeader()
    expect(wrapper.find('h2').text()).toEqual('Add new passenger')
  })

  it('should render passenger form header', () => {
    const wrapper = renderPassengerFormHeader({
      passenger: {
        id: '1'
      }
    })
    expect(wrapper.find('h2').text()).toEqual('Update passenger')
  })
})
