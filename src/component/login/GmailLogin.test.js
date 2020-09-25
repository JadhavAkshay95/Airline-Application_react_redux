import React from 'react'
import { shallow } from 'enzyme'
import GmailLogin from './GmailLogin'

const renderGmailLogin = args => {
  const defaultProps = { handleLogin: () => {} }
  const props = { ...defaultProps, ...args }
  return shallow(<GmailLogin {...props} />)
}

describe('Render google login component', () => {
  it('Render flight list', () => {
    const wrapper = renderGmailLogin()
    expect(wrapper).toMatchSnapshot()
  })
})
