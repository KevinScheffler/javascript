// While loops

// how many times do we need to double a number
// before it reaches 1,000?

// let num = 13;
// let doubledTimes = 0;

// while (num < 1000) {
//     // do something
//     num *= 2;
//     console.log(num);
//     doubledTimes++;
// }

// console.log(doubledTimes);


const names = ["Aaron", "Jan", "Enrique"];

while (true) {
    // do something
    const name = names.pop();
    console.log(name)
    if (name[0] === 'J') {
        console.log('found J Name!', name);
        break;
    }
}