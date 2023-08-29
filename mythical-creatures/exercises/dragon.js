//Create a function createDragon with two parameters: dragonName and rider
  //Create an object newDragon and assign it to have two key-value pairs: DragonsName 
  //where the value will be the inputted argument into the function and the 
  //ridersname where the value will be the inputted argument of the rider in the function
  //return the new dragon object
function createDragon(dragonsName, riderName, temperment){
  var newDragon = {
    name : dragonsName,
    rider : riderName,
    temperment: temperment
    }
  return newDragon
}

//Create a function greetRider with one parameter: the riders name
  //return the string interpolation of Hi, ridersName
function greetRider(dragon){
  return `Hi, ${dragon.rider}!`
}

//Create a function eat 
  //Add two key-value pairs, one to be a boolean of whether the dragon has eaten or not, and the other being the amount of times eaten
function eat(dragonObj){
  dragonObj.hungry = true;
  dragonObj.timesEaten = 0;
  return dragonObj
}

createDragon('Mushu', 'Mulan', 'calm')
console.log('Mushu');


module.exports = {
  createDragon, 
  greetRider, 
  // eat, 
  // findFireBreathers
}