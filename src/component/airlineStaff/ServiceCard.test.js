import React from 'react'
import { shallow } from 'enzyme'
import ServiceCard from './ServiceCard'

const renderServiceCard = args => {
  const defaultProps = {
    serviceType: {},
    serviceDesc: {},
    handleServiceNavigation: () => {}
  }

  const props = { ...defaultProps, ...args }
  return shallow(<ServiceCard {...props} />)
}

describe('Render service card component', () => {
  it('Render service card component', () => {
    const wrapper = renderServiceCard({
      serviceType: 'test',
      serviceDesc: 'test'
    })
    expect(wrapper.find('Button').text()).toBe('test services')
  })
})
