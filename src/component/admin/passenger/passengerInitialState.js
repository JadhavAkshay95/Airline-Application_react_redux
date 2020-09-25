export const initialState = {
  passengerId: '',
  name: {
    firstName: '',
    middleName: '',
    lastName: ''
  },
  address: {
    flatDetails: '',
    city: ''
  },
  dateOfBirth: '',
  passportDetails: {
    passportNumber: '',
    citizen: '',
    expiryDate: ''
  },
  ancillaryServices: [],
  seatDetails: {
    flightNumber: '',
    seatNumber: ''
  },
  shoppingItems:[],
  passengerStatus: {
    infant: false,
    wheelChair: false
  },
  checkIn: false,
  checkOut: false,
  meal: ''
}
