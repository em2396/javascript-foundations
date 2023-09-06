function createIngredient(name = 'unknown', price = 0.00){
    var ingredient = {
        name : name,
        price : price
    }
    return ingredient;
};

function createTaco(name = 'custom', ingredients = []){
   var tacoName = {
    name : name,
    ingredients : ingredients
   }
   return tacoName;
};

function addIngredientToTaco(tacoName, ingredient) {
    tacoName.ingredients.push(ingredient);
    return tacoName;
}
//price = tacoName.ingredients.ingredient.price
function calculatePrice(tacoName, price) {
    var totalCost = 0;
    console.log(tacoName.ingredients.price)
    for (var i = 0; i < tacoName.ingredients.length; i++){
    tacoName.ingredients[i].price+=totalCost
    }
    return tacoName.name, totalCost;
}

module.exports = {
    createIngredient,
    createTaco,
    addIngredientToTaco,
    calculatePrice
}