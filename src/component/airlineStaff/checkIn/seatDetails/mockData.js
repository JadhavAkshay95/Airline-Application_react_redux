export const selectedPassenger = {
  id: '1',
  name: {
    firstName: 'Akshay jadhav',
    lastName: 'Jadhavaa'
  },
  address: {
    flatDetails: '',
    city: 'Pune'
  },
  dateOfBirth: '2020-01-15',
  passportDetails: {
    passportNumber: 'A2761298',
    citizen: '',
    expiryDate: '2020-01'
  },
  ancillaryServices: ['extraBaggage', 'shopRequest', 'specialFood'],
  seatDetails: {
    flightNumber: 'f1',
    seatNumber: 98
  },
  passengerStatus: {
    infant: true,
    wheelChair: false
  },
  checkIn: true,
  checkOut: true,
  meal: 'vegan'
}
export const seatMapDetails = {
  id: 'f1',
  totalSeat: 100,
  veg: {
    seat: ['4', '5'],
    color: 'green'
  },
  nonVeg: {
    seat: ['[object Object]'],
    color: 'red'
  },
  vegan: {
    seat: ['9', '49', '98'],
    color: 'red'
  },
  checkInSeat: {
    seat: ['49', '[object Object]'],
    color: 'green'
  },
  checkOut: {
    seat: ['82'],
    color: 'skyblue'
  },
  passnegerWithInfant: {
    seat: ['49', '5', '98'],
    color: 'blue'
  },
  passnegerWithWheelChair: {
    seat: ['5', '49', '[object Object]'],
    color: 'red'
  }
}
