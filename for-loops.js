// for loops

// let num = 0;
// num++;
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


// count characters in a string
// count all "a's"


// const firstName = "Aaron";
// let aCount = 0;

// for (let i = 0; i < firstName.length; i++) {
//     let char = firstName[i];
//     console.log(char);
//     if (char === 'a' || char === 'A') {
//         aCount++;
//     }
// }

// console.log(aCount);


const nums = [100, 200, 300];

// const doubled = [];
    
// for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i]);
//     doubled.push(nums[i] * 2);
// }

// console.log(doubled);

for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * 2;
    console.log(nums);
}