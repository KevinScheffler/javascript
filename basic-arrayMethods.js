// Array Methods
const nums = [1, 2, 3];

// concat
const numsTwo = [4, 5, 6];
// method chaining
console.log(nums.concat(numsTwo).concat(numsTwo));

// slice
console.log(nums.slice(1));
console.log(nums.slice(0, 2));
console.log(nums.slice(-2));

// pop, push (add, remove from end)
let num = nums.pop();
nums.pop();
console.log(nums, num);
nums.push(2);
nums.push(num);
console.log(nums);

// shift, unshift (add, remove from beginning)
num = nums.shift();
nums.shift();
console.log(nums, num);
nums.unshift(2);
nums.unshift(num);
console.log(nums);

// splice
const deleted = nums.splice(1, 1, 4);
console.log(deleted);
console.log(nums);
