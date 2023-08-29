//Create a function createDragon with two parameters: dragonName and rider
  //Create an object newDragon and assign it to have two key-value pairs: DragonsName 
  //where the value will be the inputted argument into the function and the 
  //ridersname where the value will be the inputted argument of the rider in the function
  //return the new dragon object
function createDragon(dragonsName, riderName, temperment){
  var newDragon = {
    name : dragonsName,
    rider : riderName,
    temperment: temperment,
    timesEaten : 0,
    hungry : true
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
  //Need to add to the createDragon function; 
function eat(dragonObj){
  dragonObj.timesEaten++
  if(dragonObj['timesEaten'] >= 3){
    dragonObj['hungry'] = false;
  }
  return dragonObj
}

var mushu = createDragon('mushu', 'mulan', 'calm')
//console.log(mushu);
//console.log(eat(mushu));
var eragon = createDragon('eragon', 'em', 'aggressive');


//Create a function find fireBreathers with an unknown amount of parameters ...dragonObj
  //create a new variable fireBreathers and assign it the value of an empty array
  //iterate through the dragonObj
    //if the dragonObj.temperment equals 'aggressive', push the index into fireBreathers
    //return fireBreathers

  function findFireBreathers(dragonArr){
    var fireBreather = [];
    for(let i = 0; i < dragonArr.length; i++){ //to iterate over the array of objects
      //console.log(dragonObj[i]) - the dragon object
      if(dragonArr[i].temperment === 'aggressive'){
        fireBreather.push(dragonArr[i])
      }
    }
    return fireBreather;
  }
  
  var dragon1 = createDragon('Gray', 'Marley', 'aggressive');
  var dragon2 = createDragon('Sky', 'Susie', 'gentle');
  var dragon3 = createDragon('Mushu', 'Mulan', 'aggressive');
  var dragon4 = createDragon('Lady Vox', 'Emily', 'gentle');

  var allDragons = [dragon1, dragon2, dragon3, dragon4];
  
  var fireBreathers = findFireBreathers(allDragons);
  console.log(fireBreathers)

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}