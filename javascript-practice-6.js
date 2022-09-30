var nums = [1, 2, 3, 4];

// const isPositive = nums.every( num => {
//     return num > 0;
// })

// console.log(isPositive);

// const greaterThan3 = nums.some(num => {
//     return num > 3;
// })

// console.log(nums, greaterThan3);

// nums.forEach(num => {
//     console.log(`${num} sheep`)
// })

// nums.map(num => {
//     console.log(num * 2);
// })

// nums.map(num => {
//     console.log(`$${num.toFixed(2)}`)
// })

// nums.map(num => {
//     if (num > 0) {
//         console.log('true');
//     } else {
//         console.log('false');
//     }
// })

// nums.filter(num => {
//     if (num < 0) {
//         console.log(num);
//     } else {
//         return null;
//     }
// })

// nums.filter(num => {
//     if (num % 2 === 0) {
//         console.log(num)
//     }
// })


var allSum = nums.reduce((sum, num) => {
    console.log(sum);
    return sum + num;
})
console.log(allSum);

var sheepString = nums.reduce((str, num) => {
    return str + num + ' sheep '
}, '');
console.log(sheepString);

var coach = "aaron";
console.log(coach.split('').filter(function(char) {
    return char !== 'a';
}).join(''));

console.log(nums.map((num) => {
    return num * 3;
}).reduce((sum, num) => {
    return sum + num;
}))


