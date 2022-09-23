// conditionals (conditional chaining, scope)

let num = 0;
let firstName = "Kevin";
let lastName = "Scheffler";

let numAndName = (firstName === 'Aaron' || firstName === 'Kevin') && num === 0;

console.log(numAndName)

if (numAndName) {
    console.log('this was true');
} else {
    console.log('this was false');
}