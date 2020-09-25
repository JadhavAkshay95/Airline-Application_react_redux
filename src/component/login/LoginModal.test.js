import React from 'react'
import { shallow } from 'enzyme'
import LoginModal from './LoginModal'

const renderLoginModal = args => {
  const defaultProps = {
    show: true,
    handleGoogleLogin: () => {},
    handleFbLogin: () => {},
    handleClose: () => {}
  }
  const props = { ...defaultProps, ...args }
  return shallow(<LoginModal {...props} />)
}

describe('Render login modal component', () => {
  it('Render login modal', () => {
    let wrapper = renderLoginModal({ show: true })
    expect(wrapper).toMatchSnapshot()

    wrapper = renderLoginModal({ show: false })
    expect(wrapper).toMatchSnapshot()
  })
})
