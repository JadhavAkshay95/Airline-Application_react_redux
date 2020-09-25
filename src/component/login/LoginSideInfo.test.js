import React from 'react'
import { shallow } from 'enzyme'
import LoginSideInfo from './LoginSideInfo'

const renderLoginSideInfo = args => {
  const defaultProps = {
    showLoginModal: () => {}
  }
  const props = { ...defaultProps, ...args }
  return shallow(<LoginSideInfo {...props} />)
}

describe('Render login side info component', () => {
  it('Render login side info', () => {
    const wrapper = renderLoginSideInfo({})
    expect(wrapper).toMatchSnapshot()
  })
})
