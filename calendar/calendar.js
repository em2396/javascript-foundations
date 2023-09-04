function createEvent(eventName, month, day) {
    var events = [];
    var newEvent = {
        title : eventName,
        month : month,
        day : day
    }
    if(day < 1 || day > 30) {
        return `Error: ${day} is not a valid day`
    }
    return newEvent;
}

function createCalendar(name, eventsArr) {
    var calendar = {
        owner : name,
        events : eventsArr
    }
    return calendar;
}

function reportMonthlyEvents(calendar, month){
    var monthlyEventsArr = [];
    for(var i = 0; i < calendar.events.length; i++){
        if(calendar.events[i].month === month){
            monthlyEventsArr.push(calendar.events[i])
        }
    }
    return monthlyEventsArr;
}

module.exports = {  
    createEvent, 
    createCalendar, 
    reportMonthlyEvents
};