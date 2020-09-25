import React from 'react'
import { shallow } from 'enzyme'
import Footer from './Footer'

describe('Render Footer component', () => {
  it('Render Footer ', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper).toMatchSnapshot()
  })
})
