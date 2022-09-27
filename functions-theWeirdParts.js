// More about functions

function createAddFn(n1) {
    return function (n2) {
        return n1 + n2;
    }
}

var addFive = createAddFn(5);

// closure
console.log(addFive(5));
console.log(addFive(2));
console.log(addFive(0));

var addTwo = createAddFn(2);
console.log(addTwo(5));
console.log(addTwo(2));
console.log(addTwo(0));