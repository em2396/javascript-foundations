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





module.exports = {
  createDragon, 
  greetRider, 
  // eat, 
  // findFireBreathers
}