let days = [];

if (days.length > 0) {
    console.log(days[0]);
} else {
    days.push('Mon');
}

console.log(days);

let months = ["Jan", "Feb"];

if (months.length > 0 && months[0][0] === "J") {
    console.log(months[0]);
} else {
    months.push("Jan")
}

console.log(Array.isArray(months));

var numOfWeeks = 0;
let areNoWeeks;
if (typeof numOfWeeks === 'number') {
    areNoWeeks = Boolean(numOfWeeks);
}
console.log(areNoWeeks);




