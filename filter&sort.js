// Higher Order Array Methods
const ages = [21, 42, 50, 18];
const names = ["aaron", "jan", "enrique"];


// filter
const boomers = ages.filter(age => {
    if (age > 40) {
        return true;
    }
})

const zoomers = ages.filter(age => {
    if (age < 40) {
        return true;
    }
})

console.log(boomers, zoomers);

// sort (does work in place)
ages.sort();
console.log(ages)
names.sort();
console.log(names);
