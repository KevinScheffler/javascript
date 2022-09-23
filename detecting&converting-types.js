// detecting and converting types

// const myNum = "123";

// if (typeof myNum === 'number') {
//     console.log('its a number');
// } else if (typeof myNum === 'string') {
//     console.log('its a string');
// }

// const myArr = [1,2,3];

// console.log(Array.isArray(myArr));

// if (Array.isArray(myArr)) {
//     console.log('array?')
// }

// console.log(isNaN(NaN));


// let myNum = "123";

// if (typeof myNum !== 'number') {
//     // convert to number
//     // myNum = Number(myNum);
//     // myNum = +myNum;
//     myNum = parseInt(myNum);
// }

// console.log(typeof myNum, myNum);

// let myNum = 123;

// if (typeof myNum !== 'string') {
//     // convert to string
//     // myNum = String(123);
//     myNum = myNum.toString();
// }

// console.log(typeof myNum, myNum);

// let myNum = 123;

// if (typeof myNum !== 'string') {
//     // convert to string
//     myNum = Boolean(myNum);
// }

// console.log(typeof myNum, myNum);


let myNum = undefined;

myNum = Boolean(myNum);

console.log(typeof myNum, myNum);