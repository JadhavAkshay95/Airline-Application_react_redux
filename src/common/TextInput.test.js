import React from 'react'
import { shallow } from 'enzyme'
import TextInput from './TextInput'

const renderTextInput = args => {
  const defaultProps = {
    name: null,
    label: null,
    placeholder: null,
    value: null,
    required: null,
    handleChange: () => {}
  }
  const props = { ...defaultProps, ...args }
  return shallow(<TextInput {...props} />)
}

describe('Render text input', () => {
  it('Render text input', () => {
    const wrapper = renderTextInput({
      name: 'akshay',
      lable: 'name',
      placeholder: 'name',
      value: 'akshay',
      required: true
    })
    expect(wrapper).toMatchSnapshot()
  })
})
