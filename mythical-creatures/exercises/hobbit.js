//Create a function createHobbit with two parameters : name and age
  //create a variable hobbitObj Object and assign it key-value pairs of name and age. Assign the name and age the values of the arguments
  //passed in. If there isn't anything passed in to name, assign it the value of 'unknown', and if there isn't an age passed in, assign it the value
  //of zero
function createHobbit(name = 'unknown', age = 0){
  hobbitObj = {
    name : name,
    age : age,
  }
  return hobbitObj;
}

//Create a function celebrateBirthday with one parameter: hobbitObj
  //increment hobbitObj.age by one after every year (every time the function is called)
  //if age is 32 or younger, hobbit isn't an adult (add a isAdult variable to obj)

function celebrateBirthday(hobbitObj){
  //console.log(hobbitObj.age)
 // hobbitObj.age++;
  if(hobbitObj.age <= 32){
    hobbitObj.isAdult = false;
    hobbitObj['age']++
    return hobbitObj;
  } else if(hobbitObj.age > 32){
    hobbitObj.isAdult = true;
    return hobbitObj;
  }
}

var hobbit = createHobbit('Meriadoc');
console.log(hobbit)
var olderHobbit = celebrateBirthday(hobbit);
var evenOlderHobbit = celebrateBirthday(olderHobbit);
var evenOlderStillHobbit = celebrateBirthday(evenOlderHobbit);
console.log(olderHobbit);
console.log(evenOlderHobbit);

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  // getRing, 
  // meetPeople, 
  // findFriends
}