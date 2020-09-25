import React from 'react'
import { shallow } from 'enzyme'
import FbLogin from './FbLogin'

const renderFbLogin = args => {
  const defaultProps = { handleLogin: () => {} }
  const props = { ...defaultProps, ...args }
  return shallow(<FbLogin {...props} />)
}

describe('Render Facebook Login component', () => {
  it('Render flight list', () => {
    const wrapper = renderFbLogin()
    expect(wrapper).toMatchSnapshot()
  })
})
