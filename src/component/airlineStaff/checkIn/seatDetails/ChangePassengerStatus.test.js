import React from 'react';
import { shallow } from 'enzyme';
import ChangePassengerStatus from './ChangePassengerStatus';

const renderChangePassengerStatus = args => {
  const defaultProps = {
    show: false,
    seatMapDetails: {},
    seatMapAllocationDetails: [],
    selectedPassenger: {},
    passengerList: [],
    handleClose: () => {},
    handleCheckOut: () => {},
    currentUser: {}
  };

  const props = { ...defaultProps, ...args };
  return shallow(<ChangePassengerStatus {...props} />);
};

describe('Render change passenger status  component', () => {
  it('Render buttons initially', () => {
    const wrapper = renderChangePassengerStatus();
    expect(wrapper.find('h3').text()).toBe('Change passenger status');
  });
});
