// @ts-nocheck
import React from 'react';
import { shallow } from 'enzyme';
import Seat from './Seat';

const renderSeat = args => {
  const defaultProps = {
    seatNumber: 0,
    seatColor: '',
    selectedPassenger: {},
    isActive: null,
    currentSeat: false,
    handleSeatChangeData: () => {}
  };

  const props = { ...defaultProps, ...args };
  return shallow(<Seat {...props} />);
};

describe('Render Seat component', () => {
  it('Render in-flight seat', () => {
    const seatNumber = 1;
    const isActive = true;

    const selectedPassenger = {
      seatDetails: {
        seatNumber: 1
      }
    };
    // eslint-disable-next-line no-undef
    global.window = { location: { pathname: '/in-flight' } };
    const wrapper = renderSeat({
      seatNumber,
      isActive,
      selectedPassenger
    });
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('Render check-in seat ', () => {
    const seatNumber = 1;
    let isActive = true;

    const selectedPassenger = {
      seatDetails: {
        seatNumber: '1'
      }
    };

    // eslint-disable-next-line no-undef
    global.window = { location: { pathname: '/check-in' } };
    const wrapper = renderSeat({
      seatNumber,
      isActive,
      selectedPassenger
    });
    isActive = false;
    selectedPassenger.seatDetails.seatNumber = '1';
    expect(wrapper.find('.selectedSeat')).toHaveLength(1);
  });
});
