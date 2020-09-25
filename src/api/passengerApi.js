import axios from 'axios'

export const getPassengerList = flightId => {
  return axios.get(
    `http://localhost:4500/passengerList?seatDetails.flightNumber=${flightId}`
  )
}

export const addPassenger = passenger => {
  return axios.post('http://localhost:4500/passengerList/', {
    ...passenger
  })
}

export const updatePassenger = passenger => {
  return axios.put(`http://localhost:4500/passengerList/${passenger.id}`, {
    ...passenger
  })
}
