function createElevator(building, floors, currentFloor, passengers) {
    return {
        building: building,
        floors: floors,
        currentFloor: currentFloor,
        passengers: passengers,
    }
}

function changeFloors(elevatorObj, floorToGoTo) {
    if (elevatorObj.currentFloor === floorToGoTo) {
        return `You're already on floor ${elevatorObj.currentFloor}!`
    } else if (elevatorObj.floors < floorToGoTo) {
        return `Floor ${floorToGoTo} does not exist!`
    } else {
        elevatorObj.currentFloor = floorToGoTo;
        return `Taking you to floor ${floorToGoTo}!`;
    }
}


//elevatorObj.passengers <---array
function dropOffPassenger(elevatorObj, passengerName) {
    for (var i = 0; i < elevatorObj['passengers'].length; i++) {
       // console.log(elevatorObj.passengers[i]);
        if (elevatorObj.passengers[i] === passengerName) {
            elevatorObj.passengers.splice(i, 1);
            console.log(elevatorObj);
            console.log(elevatorObj.passengers);
        }
    }
    return elevatorObj.passengers;
}

module.exports = {
    createElevator, 
    changeFloors,
    dropOffPassenger
}