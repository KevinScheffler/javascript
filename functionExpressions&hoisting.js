// Hoisting

// function expression
const addThree = function(num) {
    return num + 3;
}

const newNum = addTwo(5);
const secondNum = addThree(5);
console.log(newNum, secondNum);


// function definition
function addTwo (num) {
    return num + 1 + 1;
}