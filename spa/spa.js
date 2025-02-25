function createCustomer(customerName, totalCost, typeOfTreatment = []) {
  var customer = {
    name : customerName,
    bill : totalCost,
    bookings : typeOfTreatment
  }
  return customer;
}

function greeting(nameObj) {
  if(nameObj.bookings.length === 0) {
    return `${nameObj.name}! Welcome to Happy Spa`
  } else {
    return `${nameObj.name}! Welcome back to Happy Spa`
  }
}

function createService(typeOfTreatment, price) {
  if(!typeOfTreatment && !price){
    return "Please provide service name and cost.";
  }
  var service = {
    name : typeOfTreatment,
    cost : price
  }
  return service
}

function bookServices(customerObj, serviceObj) {
  customerObj.bookings.push(serviceObj.name);
  customerObj.bill+=serviceObj.cost;
  return customerObj;
}

function applyGiftCard(servicesArr, giftCardAmount) {
  var canAfford = [];
  for(var i = 0; i < servicesArr.length; i++) {
    if(servicesArr[i].price <= giftCardAmount){
      canAfford.push(servicesArr[i].name);
    }
  }
  return canAfford;
}



module.exports = { 
  createCustomer, 
  greeting, 
  createService,
  bookServices, 
  applyGiftCard 
}
