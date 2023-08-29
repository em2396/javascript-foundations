//create a function createBirthday with three parameters: name, month and day
    // create a birthday object where key-value pairs are name with name arg, month with number month arg and day with day arg

const { interfaces } = require("mocha");

     //return birthday obj
function createBirthday(name, month, day){
    var birthday = {
        name: name,
        month : month,
        day: day
    }
    return birthday;
}


function celebrateBirthday(birthdayObj){
    return `Today is ${birthdayObj.month}/${birthdayObj.day}! Happy birthday, ${birthdayObj.name}!`
}

function countBirthdays(birthdaysArr, month){
    var inThisMonth = 0;
    for(var i = 0; i < birthdaysArr.length; i++){
        if(birthdaysArr[i].month === month){
            inThisMonth++;
        }
    }
        return inThisMonth;
}

var leahBirthday = createBirthday('Leah', 2, 10);
    var christyBirthday = createBirthday('Christy', 3, 8);
    var alexBirthday = createBirthday('Alex', 5, 19);
    var noahBirthday = createBirthday('Noah', 2, 16);
    var birthdays = [leahBirthday, christyBirthday, alexBirthday, noahBirthday];
   
    var febCount = countBirthdays(birthdays, 2);
    var mayCount = countBirthdays(birthdays, 5);
    var decCount = countBirthdays(birthdays, 12);
    console.log(febCount)

module.exports = {  
    createBirthday,
    celebrateBirthday,
    countBirthdays
};