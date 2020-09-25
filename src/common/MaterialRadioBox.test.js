import React from 'react'
import { shallow } from 'enzyme'
import MaterialRadioBox from './MaterialRadioBox'

const renderMaterialRadioBox = args => {
  const defaultProps = {
    radioGroupName: null,
    options: [],
    value: null,
    handleRadioChange: () => {}
  }
  const props = { ...defaultProps, ...args }
  return shallow(<MaterialRadioBox {...props} />)
}

describe('Render common material radio box', () => {
  it('Render common radio box component', () => {
    const wrapper = renderMaterialRadioBox({
      radioGroupName: 'foodPref',
      options: [
        { label: 'vegan', value: 'vegan' },
        { label: 'veg', value: 'veg' }
      ],
      value: 'vegan'
    })
    expect(wrapper).toMatchSnapshot()
  })
})
