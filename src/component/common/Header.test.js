import React from 'react'
import { shallow } from 'enzyme'
import { Header } from './Header'

const renderLoginModal = args => {
  const defaultProps = { history: {}, currentUser: {}, logout: () => {} }
  const props = { ...defaultProps, ...args }
  return shallow(<Header {...props} />)
}

describe('Render Header component', () => {
  it('Render Header ', () => {
    const wrapper = renderLoginModal()
    expect(wrapper).toMatchSnapshot()
  })
})
