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
function calculatePrice(tacoName, addToPrice) {
    var totalCost = 0;
    for (var i = 0; i < tacoName.ingredients.length; i++){
        var addToCost = tacoName.ingredients[i].price;
        totalCost+=addToCost;
    }
   return totalCost;
}

module.exports = {
    createIngredient,
    createTaco,
    addIngredientToTaco,
    calculatePrice
}