import React from 'react'
import { shallow } from 'enzyme'
import PassengerTable from './PassengerTable'
import PassengerRow from './PassengerRow'
import * as constants from '../../../../common/constant'

const renderPassengerTableHeader = args => {
  const defaultProps = {
    passengerList: [],
    handleEdit: () => {},
    handleChangeStatus: () => {},
    showMealModal: () => {},
    handleServices: () => {},
    currentUser: {}
  }

  const props = { ...defaultProps, ...args }
  return shallow(<PassengerTable {...props} />)
}

describe('Passenger Table Component', () => {
  it('Should render passenger table', () => {
    const passengerList = [{ id: 1 }]
    let currentUser = { role: 'admin' }
    const wrapper = renderPassengerTableHeader({ passengerList, currentUser })
    expect(wrapper.find('th')).toHaveLength(
      constants.tableHeaderAdmin.length + 1
    )
    expect(wrapper.find(PassengerRow)).toHaveLength(passengerList.length)
    currentUser = { role: 'staff' }
    expect(wrapper.find(PassengerRow)).toHaveLength(passengerList.length)
    expect(wrapper.find('th')).toHaveLength(
      constants.tableHeaderCheckIn.length + 1
    )
  })

  it('Should not render passenger table', () => {
    const wrapper = renderPassengerTableHeader({ passengerList: [] })
    expect(wrapper.find('p').text()).toEqual('No passeneger is added!')
  })
})
