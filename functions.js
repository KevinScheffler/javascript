// Functions
// DRY don't repeat yourself
// Convert an input into an output (the same way every time)
// Deterministic 

let num = 10;

// function definition
function addTwo (num) { // parameter (block scoped)
    return num + 2;
}



const myNum = addTwo(1) // called with 1 as the argument
const mySecondNum = addTwo(2) // called with 2 as the argument
const myThirdNum = addTwo(3) // called with 3 as the argument
console.log(myNum, mySecondNum, myThirdNum);