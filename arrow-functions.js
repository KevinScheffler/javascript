// Arrow Functions

const addTwo = num => num + 2;

const addBothNums = (first, second) => first + second;

const doubleUntilOver1000 = num => {
    while (num < 1000) {
        num *= 2
    }
    return num;
}


console.log(doubleUntilOver1000(50));