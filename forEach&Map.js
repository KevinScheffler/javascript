// Higer Order Array Methods
const ages = [21, 42, 50, 18];

// forEach
// ages.forEach((age, index, arr) => {
//     console.log(age, index, arr);
// });

// map
// const newAges = ages.map(age => age / 2);
// console.log(newAges);

const newAges = ages.map(age => {
    if (age > 40) {
        return "boomer"
    } else {
        return "zoomer"
    }
});

console.log(newAges);

