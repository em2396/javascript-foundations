function createIngredient(name = 'unknown', price = 0.00){
    var ingredient = {
        name : name,
        price : price
    }
    return ingredient;
}

function createTaco(name = 'custom'){

}



module.exports = {
    createIngredient,
    createTaco
    //addIngredientsToTaco,
    //calculatePrice
}