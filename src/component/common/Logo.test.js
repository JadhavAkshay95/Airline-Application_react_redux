import React from 'react'
import { shallow } from 'enzyme'
import Logo from './Logo'

describe('Render logo component', () => {
  it('Render logo ', () => {
    const wrapper = shallow(<Logo />)
    expect(wrapper).toMatchSnapshot()
  })
})
