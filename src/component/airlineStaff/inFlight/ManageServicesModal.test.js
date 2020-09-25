import React from 'react';
import { shallow } from 'enzyme';
import ManageServicesModal from './ManageServicesModal';

const renderManageServicesModal = args => {
  const defaultProps = {
    show: null,
    closeManageServiceModal: () => {},
    selectedPassenger: {},
    flightFacility: [],
    flightShoppingItems: [],
    handleModalSubmit: () => {},
    handleCheckBoxChange: () => {},
    handleAnsilaryCheckBoxChange: () => {}
  };
  const props = { ...defaultProps, ...args };
  return shallow(<ManageServicesModal {...props} />);
};

describe('Render manage service component', () => {
  it('Render manage service modal', () => {
    const selectedPassenger = {
      name: {
        firstName: 'akshay',
        lastName: 'jadhav'
      },
      ancillaryServices: ['extraBaggage'],
      passengerStatus: {
        infant: true,
        wheelChair: false
      },
      shoppingItems: ['extraBaggage']
    };
    let wrapper = renderManageServicesModal({
      show: true,
      selectedPassenger: selectedPassenger
    });
    expect(wrapper).toMatchSnapshot();

    wrapper = renderManageServicesModal({
      show: false,
      selectedPassenger: selectedPassenger
    });
    wrapper.simulate('onClick');
    expect(wrapper).toMatchSnapshot();
  });
});
