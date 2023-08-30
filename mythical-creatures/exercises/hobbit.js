//Create a function createHobbit with two parameters : name and age
  //create a variable hobbitObj Object and assign it key-value pairs of name and age. Assign the name and age the values of the arguments
  //passed in. If there isn't anything passed in to name, assign it the value of 'unknown', and if there isn't an age passed in, assign it the value
  //of zero
function createHobbit(name = 'unknown', age = 0){
  var hobbitObj = {
    name : name,
    age : age,
    isAdult: false,
    isOld : false,
    acquaintances : []
  }
    return hobbitObj;
  }


//Create a function celebrateBirthday with one parameter: hobbitObj
  //increment hobbitObj.age by one after every year (every time the function is called)
  //if age is 32 or younger, hobbit isn't an adult (add a isAdult variable to obj)

function celebrateBirthday(hobbitObj) {
  hobbitObj.age++;
  if(hobbitObj.age >= 33){
    hobbitObj.isAdult = true;
  }
  if(hobbitObj.age >= 101){
    hobbitObj.isOld = true; 
  }
  return hobbitObj;
}

//var hobbit = createHobbit('Meriadoc');
//console.log(hobbit)
//var olderHobbit = celebrateBirthday(hobbit);
//var evenOlderHobbit = celebrateBirthday(olderHobbit);
//var evenOlderStillHobbit = celebrateBirthday(evenOlderHobbit);
//console.log(olderHobbit);
//console.log(evenOlderHobbit);

function getRing(hobbitObj) {
  if(hobbitObj.name === 'Frodo') {
    return "Here is the ring!";
  } else {
    return "You can't have it!"
  }
}

function meetPeople(hobbitObj, newFriend) {
  hobbitObj.acquaintances = [...hobbitObj.acquaintances, ...newFriend]
  return hobbitObj;
}

// var people = [ {name: 'Nick', relationship: 'friend'} ];
// var bilbo = createHobbit('Bilbo');
// var socialBilbo = meetPeople(bilbo, people);
// console.log(socialBilbo);
var nick = {name: 'Nick', relationship: 'friend'};
var ben = {name: 'Ben', relationship: 'enemy'};
var people = [ nick, ben ];
var bilbo = createHobbit('Bilbo');
var socialBilbo = meetPeople(bilbo, people);
console.log(socialBilbo);
console.log(socialBilbo.acquaintances)
var trisha = {name: 'Trisha', relationship: 'enemy'};
var dustin = {name: 'Dustin', relationship: 'friend'};
var morePeople = [ trisha, dustin ];
var moreSocialBilbo = meetPeople(socialBilbo, morePeople);
console.log(moreSocialBilbo)

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  // findFriends
}