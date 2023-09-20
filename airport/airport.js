function createAirport(name, airlines=[], gates) {
  return {
    name: name,
    availableGates: gates,
    airlines: airlines
  }
};

function welcomeGuests(airportName) {
  return `Welcome to ${airportName.name}!`
}

function landPlanes(airportNameObj, numOfPlanes) {
  // var difference = airportNameObj.availableGates - numOfPlanes
  if (airportNameObj.availableGates >= 1) {
    airportNameObj.availableGates -= numOfPlanes;
    airportNameObj.message = `Success! Current availability is ${airportNameObj.availableGates}.`
  } else {
    airportNameObj.availableGates = 0;
    airportNameObj.message = `Oh no! Not enough gates available. Current overflow is ${Math.abs(airportNameObj.availableGates - numOfPlanes)}.`
    console.log(airportNameObj.message);
  }
  return airportNameObj;
}


module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  // checkAirlineLocations
};
