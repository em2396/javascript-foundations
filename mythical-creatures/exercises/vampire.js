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
  return 'I WANT TO SUCK YOUR BLOOD!';
}

//create a function drink that takes one parameter: vampireObj
  //add a key-value pair to vampireObj ounces drank : 0
  //when the function is invoked, it will add 10 ounces to ouncesdrank
function drink(vampireObj) {
  if(vampireObj.ouncesDrank >= 50 && !vampireObj.thirsty){
    return ("No thanks, I'm too full.", vampireObj);
  }
  vampireObj.ouncesDrank+=10;
  if(vampireObj.ouncesDrank >= 50){
    vampireObj.thirsty = false;
  }
  return vampireObj;
}


module.exports = {
  createVampire, 
  drink, 
  // findBatLovers, 
  encounterDeliciousVictim, 
  // inquirePlace
}