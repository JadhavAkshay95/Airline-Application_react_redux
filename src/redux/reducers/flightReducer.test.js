import flightReducer from './flightReducer';
import * as flightAction from './../actions/flightAction';

describe('Flight reducer', () => {
  it('Should get flight list', () => {
    const flightList = [
      {
        id: 'f1',
        flightCompany: {
          name: 'Air India',
          logo: 'airindia.jpg',
          type: 'Economy'
        },
        totalSeat: 100,
        passengerId: [1, 2]
      }
    ];
    const newAction = flightAction.loadFlightSuccess(flightList);
    const newState = flightReducer([], newAction);
    expect(newState.length).toEqual(1);
  });

  it('Should get flight details', () => {
    const flightDetails = {
      id: 'f1',
      flightCompany: {
        name: 'Air India',
        logo: 'airindia.jpg',
        type: 'Economy'
      },
      totalSeat: 100,
      passengerId: [1, 2]
    };
    const newAction = flightAction.getFlightSuccess(flightDetails);
    const newState = flightReducer([], newAction);
    expect(newState.id).toEqual(flightDetails.id);
  });
  it('Should update flight details', () => {
    const flightDetails = {
      id: 'f1',
      flightCompany: {
        name: 'Air India',
        logo: 'airindia.jpg',
        type: 'Economy'
      },
      totalSeat: 100,
      passengerId: [1, 2]
    };
    const newAction = flightAction.updateFlightDetailsSuccess(flightDetails);
    const newState = flightReducer([], newAction);
    expect(newState.id).toEqual(flightDetails.id);
  });
});
