//Create a function createEvent with three parameters: eventName, month (in string form), and day
    //create a new variable object newEvent and assign it the value of an object with the keys : title, month, day and the values
    // as the passed in arguments with their respective parameters: eventName, month, and day
function createEvent(eventName, month, day) {
    var newEvent = {
        title : eventName,
        month : month,
        day : (function() {
            if(day >= 32){
                newEvent['day'] = `Error: ${day} is not a valid day`;
                return newEvent['day'];
            } else {
                newEvent['day'] = day;
                return newEvent['day'];
            }
        })()
    }
    return newEvent;
}

module.exports = {  
    createEvent, 
    //createCalendar, 
    //reportMonthlyEvents
};