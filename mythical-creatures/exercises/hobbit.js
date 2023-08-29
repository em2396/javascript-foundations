//Create a function createHobbit with two parameters : name and age
  //create a variable hobbitObj Object and assign it key-value pairs of name and age. Assign the name and age the values of the arguments
  //passed in. If there isn't anything passed in to name, assign it the value of 'unknown', and if there isn't an age passed in, assign it the value
  //of zero
function createHobbit(name = 'unknown', age = 0){
  hobbitObj = {
    name : name,
    age : age
  }
  return hobbitObj;
}


module.exports = {
  createHobbit, 
  // celebrateBirthday, 
  // getRing, 
  // meetPeople, 
  // findFriends
}