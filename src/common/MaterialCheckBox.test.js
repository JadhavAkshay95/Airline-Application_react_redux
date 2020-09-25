import React from 'react'
import { shallow } from 'enzyme'
import MaterialCheckBox from './MaterialCheckBox'

const renderMaterialCheckBox = args => {
  const defaultProps = {
    options: [],
    handleCheckBoxChange: () => {}
  }
  const props = { ...defaultProps, ...args }
  return shallow(<MaterialCheckBox {...props} />)
}

describe('Render common material radio box', () => {
  it('Render common radio box component', () => {
    const wrapper = renderMaterialCheckBox({
      options: [
        { isSelected: true, value: 'extraBaggage' },
        { isSelected: false, value: 'ExtraFood' }
      ]
    })
    expect(wrapper).toMatchSnapshot()
  })
})
