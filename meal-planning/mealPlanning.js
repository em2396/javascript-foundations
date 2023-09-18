function createMeal(mealType, calorieGoal, mealTypeObj = []) {
    return {
        type: mealType,
        calorieGoal: calorieGoal,
        dishes: mealTypeObj
    }
}

//if the sume of the mealObj.dishes.calories <= calorieGoal
function addDish(mealObj, mealTypeObj) {
    var calorieTotal = 0
    if(mealObj.dishes.length) {
        for (var i = 0; i < mealObj.dishes.length; i++) {
            calorieTotal+=mealObj.dishes[i].calories
            if (mealObj.calorieGoal >= calorieTotal) {
                mealObj.calorieGoal-=mealTypeObj.calories;
                //console.log(calorieGoal)
                mealObj.dishes.push(mealTypeObj);
                return mealObj;
            }
        } 
    } else if (mealTypeObj.calories <= mealObj.calorieGoal) {
        mealObj.calorieGoal-=mealTypeObj.calories;
        mealObj.dishes.push(mealTypeObj);
    }
    return mealObj;
}

function calculateCalories(mealObh) {
    
}

module.exports = { 
    createMeal,
    addDish,
    calculateCalories
}
