import React from 'react';
import { shallow } from 'enzyme';
import { FlightDetails } from './FlightDetails';

const renderManageServicesModal = args => {
  const defaultProps = {
    getFlight: () => {},
    flight: {},
    updateFlightDetails: () => {},
    seatMapDetails: {},
    getSeatMap: () => {},
    match: {},
    getSeatMapAllocationDetails: () => {},
    seatMapAllocationDetails: [],
    currentUser: {},
    history: {}
  };
  const props = { ...defaultProps, ...args };
  return shallow(<FlightDetails {...props} />);
};

describe('Render manage service component', () => {
  it('Render manage service modal', () => {
    let wrapper = renderManageServicesModal({});
    expect(wrapper).toMatchSnapshot();
  });
});
