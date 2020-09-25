import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

const renderAppComponent = args => {
  const defaultProps = {}
  const props = { ...defaultProps, ...args }
  return shallow(<App {...props} />)
}

describe('Render app component', () => {
  it('Render login modal', () => {
    const wrapper = renderAppComponent()
    expect(wrapper).toMatchSnapshot()
  })
})
