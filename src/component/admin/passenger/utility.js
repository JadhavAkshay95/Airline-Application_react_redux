export const handleMealChangeData = (seatMapDetails, selectedPassenger) => {
  if (selectedPassenger.meal === 'veg') {
    if (seatMapDetails.veg.seat.length === 0) {
      if (seatMapDetails.veg.seat.length === 0) {
        seatMapDetails.veg.seat.push(selectedPassenger.seatDetails.seatNumber)
      } else {
        if (
          !seatMapDetails.veg.seat.includes(
            selectedPassenger.seatDetails.seatNumber
          )
        ) {
          seatMapDetails.veg.seat.push(
            selectedPassenger.seatDetails.seatNumber
          )
        }
      }
    }
    if (seatMapDetails.nonVeg && seatMapDetails.nonVeg.seat) {
      const seatNumber = seatMapDetails.nonVeg.seat.indexOf(
        selectedPassenger.seatDetails.seatNumber
      )
      if (seatNumber !== -1) {
        seatMapDetails.nonVeg.seat.splice(seatNumber, 1)
      }
    }
    if (seatMapDetails.vegan && seatMapDetails.vegan.seat) {
      const seatNumber = seatMapDetails.vegan.seat.indexOf(
        selectedPassenger.seatDetails.seatNumber
      )
      if (seatNumber !== -1) {
        seatMapDetails.vegan.seat.splice(seatNumber, 1)
      }
    }
  } else if (selectedPassenger.meal === 'nonVeg') {
    if (seatMapDetails.nonVeg.seat.length === 0) {
      seatMapDetails.nonVeg.seat.push(selectedPassenger.seatDetails.seatNumber)
    } else {
      if (
        seatMapDetails.nonVeg.seat.length &&
        !seatMapDetails.nonVeg.seat.includes(
          selectedPassenger.seatDetails.seatNumber
        )
      ) {
        seatMapDetails.nonVeg.seat.push(
          selectedPassenger.seatDetails.seatNumber
        )
      }
    }

    if (seatMapDetails.veg && seatMapDetails.veg.seat.length) {
      const seatNumber = seatMapDetails.veg.seat.indexOf(
        selectedPassenger.seatDetails.seatNumber
      )
      if (seatNumber !== -1) {
        seatMapDetails.nonVeg.seat.splice(seatNumber, 1)
      }
    }

    if (seatMapDetails.vegan && seatMapDetails.vegan.seat) {
      const seatNumber = seatMapDetails.vegan.seat.indexOf(
        selectedPassenger.seatDetails.seatNumber
      )
      if (seatNumber !== -1) {
        seatMapDetails.vegan.seat.splice(seatNumber, 1)
      }
    }
  } else if (selectedPassenger.meal === 'vegan') {
    if (seatMapDetails.vegan.seat.length === 0) {
      seatMapDetails.vegan.seat.push(selectedPassenger.seatDetails.seatNumber)
    } else {
      if (
        seatMapDetails.vegan.seat &&
        !seatMapDetails.vegan.seat.includes(
          selectedPassenger.seatDetails.seatNumber
        )
      ) {
        seatMapDetails.vegan.seat.push(
          selectedPassenger.seatDetails.seatNumber
        )
      }
    }

    if (seatMapDetails.nonVeg && seatMapDetails.nonVeg.seat.length) {
      const seatNumber = seatMapDetails.nonVeg.seat.indexOf(
        selectedPassenger.seatDetails.seatNumber
      )
      if (seatNumber !== -1) {
        seatMapDetails.nonVeg.seat.splice(seatNumber, 1)
      }
    }
    if (seatMapDetails.veg && seatMapDetails.veg.seat) {
      const seatNumber = seatMapDetails.veg.seat.indexOf(
        selectedPassenger.seatDetails.seatNumber
      )
      if (seatNumber !== -1) {
        seatMapDetails.veg.seat.splice(seatNumber, 1)
      }
    }
  }
  return {
    seatMapDetails,
    selectedPassenger
  }
}

export const handleInfantChangeData = (seatMapDetails, selectedPassenger) => {
  if (selectedPassenger.passengerStatus.infant) {
    handelExtraService(
      'passnegerWithInfant',
      seatMapDetails,
      selectedPassenger
    )
  } else {
    handelExtraServiceFalse(
      'passnegerWithInfant',
      seatMapDetails,
      selectedPassenger
    )
  }

  if (selectedPassenger.passengerStatus.wheelChair) {
    handelExtraService(
      'passnegerWithWheelChair',
      seatMapDetails,
      selectedPassenger
    )
  } else {
    handelExtraServiceFalse(
      'passnegerWithWheelChair',
      seatMapDetails,
      selectedPassenger
    )
  }
  return {
    seatMapDetails,
    selectedPassenger
  }
}

const handelExtraService = (
  passnegerWithInfant,
  seatMapDetails,
  selectedPassenger
) => {
  if (seatMapDetails[passnegerWithInfant].seat.length === 0) {
    seatMapDetails[passnegerWithInfant].seat.push(
      selectedPassenger.seatDetails.seatNumber
    )
  } else {
    if (
      seatMapDetails[passnegerWithInfant].seat &&
      !seatMapDetails[passnegerWithInfant].seat.includes(
        selectedPassenger.seatDetails.seatNumber
      )
    ) {
      seatMapDetails[passnegerWithInfant].seat.push(
        selectedPassenger.seatDetails.seatNumber
      )
    }
  }
}

const handelExtraServiceFalse = (
  passnegerWithInfant,
  seatMapDetails,
  selectedPassenger
) => {
  if (seatMapDetails[passnegerWithInfant].seat.length) {
    const index = seatMapDetails.passnegerWithInfant.seat.indexOf(
      selectedPassenger.seatDetails.seatNumber
    )
    if (index !== -1) {
      seatMapDetails[passnegerWithInfant].seat.splice(index, 1)
    }
  }
}

export const decideColorOfSeat = (index, seatMapDetails) => {
  if (
    seatMapDetails.checkInSeat.seat.length &&
    seatMapDetails.checkInSeat.seat.includes(index.toString())
  ) {
    return '#4dff4d'
  }
  if (
    seatMapDetails.checkOut.seat.length &&
    seatMapDetails.checkOut.seat.includes(index.toString())
  ) {
    return 'blue'
  }
  if (
    seatMapDetails.passnegerWithInfant.seat &&
    seatMapDetails.passnegerWithInfant.seat.includes(index.toString())
  ) {
    return '#ffff4d'
  }
  if (
    seatMapDetails.passnegerWithWheelChair.seat &&
    seatMapDetails.passnegerWithWheelChair.seat.includes(index.toString())
  ) {
    return '#ff794d'
  } else {
    return 'white'
  }
}

export const decideColorOfSeatBasedOnMeal = (index, seatMapDetails) => {
  if (
    seatMapDetails.veg.seat.length &&
    seatMapDetails.veg.seat.includes(index.toString())
  ) {
    return '#79ff4d'
  } else if (
    seatMapDetails.nonVeg.seat.length &&
    seatMapDetails.nonVeg.seat.includes(index.toString())
  ) {
    return '#ffa64d'
  } else if (
    seatMapDetails.vegan.seat.length &&
    seatMapDetails.vegan.seat.includes(index.toString())
  ) {
    return '#00bfff'
  } else {
    return 'white'
  }
}
