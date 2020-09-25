import React from 'react';
import { shallow } from 'enzyme';
import AddServicesModal from './AddServicesModal';

const renderManageServicesModal = args => {
  const defaultProps = {
    show: null,
    closeManageServiceModal: () => {},
    handleModalSubmit: () => {},
    flight: {}
  };
  const props = { ...defaultProps, ...args };
  return shallow(<AddServicesModal {...props} />);
};

describe('Render manage service component', () => {
  it('Render manage service modal', () => {
    const handleCheckBoxChange = jest.fn();

    const flight = {
      id: 'f1',
      flightCompany: {
        name: 'Air India',
        logo: 'airindia.jpg',
        type: 'Economy'
      },
      time: {
        boardingTime: '12.55 AM',
        deparatureTime: '3',
        duration: '2 hr',
        type: 'non-stop'
      },
      flightSource: 'Pune',
      flightDest: 'Bengluru',
      stops: ['Mumbai'],
      facility: [
        {
          label: 'Extra Baggage',
          value: 'extraBaggage',
          isSelected: true
        }
      ],
      shoppingItems: [
        {
          label: 'Eye mask',
          value: 'eyeMask',
          isSelected: true
        }
      ],
      totalSeat: 100,
      passengerId: [1, 2]
    };
    let wrapper = renderManageServicesModal({
      show: true,
      flight: flight,
      handleCheckBoxChange: { handleCheckBoxChange }
    });

    wrapper.find('#shoppingItems').simulate('click');

    expect(wrapper).toMatchSnapshot();
  });
});
