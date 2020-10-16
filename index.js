function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string="*") {
    return function innerFunction(str="special") {
        return `You are ${string}${str}${string}!`
    }
}

let Calculator = {
    add: function add(a,b){return a + b},
    subtract: function subtract(a,b){return a - b},
    multiply: function multiply(a,b){return a * b},
    divide: function divide(a,b){return a / b}
}

function actionApplyer(int, array) {
    let start = int
    array.forEach(item => {
        start = item(start)
    })
    return start
}