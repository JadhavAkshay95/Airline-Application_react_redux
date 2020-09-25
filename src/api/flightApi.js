import axios from 'axios';

export const getFlightList = () => {
  return axios.get('http://localhost:4500/flightList');
};

export const getFlight = id => {
  return axios.get(`http://localhost:4500/flightList/${id}`);
};

export const updateFlight = flight => {
  return axios.put(`http://localhost:4500/flightList/${flight.id}`, flight);
};

export const getSeatMapDetails = id => {
  return axios.get(`http://localhost:4500/seatMap/${id}`);
};

export const getSeatMapAllocationDetails = flightId => {
  return axios.get(
    `http://localhost:4500/passengerList?seatDetails.flightNumber=${flightId}`
  );
};

export const updateSeatMap = seatMap => {
  return axios.put(`http://localhost:4500/seatMap/${seatMap.id}`, seatMap);
};
