import * as ActionConstant from './../../common/actionConstant';
import * as FlightAction from './flightAction';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const middleWare = [thunk];
const mockStore = configMockStore(middleWare);

describe('Flight action', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('Should create a GET_FLIGHT_LIST action', () => {
    // Mock data
    const flightList = [
      { id: 'f1', location: { src: 'kolkta', dest: 'delhi' } },
      { id: 'f2', location: { src: 'pune', dest: 'delhi' } }
    ];

    // Mock Api call
    const mock = new MockAdapter(axios);
    mock.onGet('http://localhost:4500/flightList').reply(200, flightList);

    // Expected Action
    const expectedAction = {
      type: ActionConstant.GET_FLIGHT_LIST,
      flightList: flightList
    };

    const store = mockStore({ flightList: flightList });
    // @ts-ignore
    return store.dispatch(FlightAction.loadFlight()).then(() => {
      expect(store.getActions()[0]).toEqual(expectedAction);
    });
  });

  it('Should create a GET_FLIGHT_DETAILS action', () => {
    // Mock data
    const flightDetails = {
      id: 'f1',
      location: { src: 'kolkta', dest: 'delhi' }
    };

    // Mock Api call
    const mock = new MockAdapter(axios);
    mock.onGet('http://localhost:4500/flightList/f1').reply(200, flightDetails);

    // Expected Action
    const expectedAction = {
      type: ActionConstant.GET_FLIGHT_DETAILS,
      flightDetails: flightDetails
    };

    const store = mockStore({ flightDetails: flightDetails });
    // @ts-ignore
    return store.dispatch(FlightAction.getFlight('f1')).then(() => {
      expect(store.getActions()[0]).toEqual(expectedAction);
    });
  });

  it('Should update seat map', () => {
    // Mock data
    const seatMap = {
      id: 'f1',
      totalSeat: 100,
      veg: {
        seat: ['4', '5'],
        color: 'green'
      },
      nonVeg: {
        seat: [],
        color: 'red'
      },
      passnegerWithInfant: {
        seat: ['49', '5', '98'],
        color: 'blue'
      },
      passnegerWithWheelChair: {
        seat: ['5', '49'],
        color: 'red'
      }
    };
    // Mock Api call
    const mock = new MockAdapter(axios);
    mock.onPut('http://localhost:4500/seatMap/f1', seatMap).reply(200, seatMap);

    // Expected Action
    const expectedAction = {
      type: ActionConstant.UPDATE_SEAT_MAP,
      seatMap: seatMap
    };

    const store = mockStore({ seatMap: seatMap });
    // @ts-ignore
    return store.dispatch(FlightAction.updateSeatMap(seatMap)).then(() => {
      expect(store.getActions()[0]).toEqual(expectedAction);
    });
  });

  it('Should Update a updateFlight  action', () => {
    // Mock data
    const flightDetails = {
      id: 'f1',
      location: { src: 'kolkta', dest: 'delhi' }
    };

    // Mock Api call
    const mock = new MockAdapter(axios);
    mock
      .onPut('http://localhost:4500/flightList/f1', flightDetails)
      .reply(200, flightDetails);

    // Expected Action
    const expectedAction = {
      type: ActionConstant.UPDATE_FLIGHT_DETAILS,
      flightDetails: flightDetails
    };

    const store = mockStore({ flightDetails: flightDetails });
    // @ts-ignore
    return store
      .dispatch(FlightAction.updateFlightDetails(flightDetails))
      .then(() => {
        expect(store.getActions()[0]).toEqual(expectedAction);
      });
  });
});
