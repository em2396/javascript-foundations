//create a function createVampire with two parameters: vampireName, petName
  //create a vampireObject that has a key-value pair of name paired 
  //vampireName and pet paired with vampirePet
function createVampire(vampireName, vampirePet = 'bat') {
  var vampireObj = {
    name : vampireName,
    pet : vampirePet,
    thirsty : true,
    ouncesDrank : 0
  };
  return vampireObj; 
}

//create a function encounterDeliciousVictim that takes vampireObj as a paramter
  //return 'I want to suck your blood!'

function encounterDeliciousVictim(vampireObj) {
  if(!vampireObj.thirsty){
    return `No thanks, I am too full.`
  } else {
  return 'I WANT TO SUCK YOUR BLOOD!';
  }
}

//create a function drink that takes one parameter: vampireObj
  //add a key-value pair to vampireObj ounces drank : 0
  //when the function is invoked, it will add 10 ounces to ouncesdrank
function drink(vampireObj) {
  if(vampireObj.ouncesDrank < 50){
    vampireObj.ouncesDrank+=10;
    if(vampireObj.ouncesDrank >=50){
      vampireObj.thirsty = false;
    }
    return vampireObj;
  } else if(!vampireObj.thirsty){
    return vampireObj;
  }
}

function inquirePlace(locationsArr, place){
  if(locationsArr.includes(place)){
    return `Yes, I have spent some time in ${place}.`
  } else {
    return `No, I have never been to ${place}.`
  }
}


module.exports = {
  createVampire, 
  drink, 
  // findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}