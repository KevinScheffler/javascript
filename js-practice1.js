var myFirstName = 'Kevin';

var myAge = 31;

var myFullName = 'Kevin Scheffler';

var greeting = `My name is ${myFullName} and I'm ${myAge} years old.`;

console.log(greeting);

if (myAge > 28) {
    console.log('Im older than Aaron')
} else if (myAge === 28) {
    console.log('Im the same age as Aaron');
} else {
    console.log('Im younger than Aaron');
}

var isEven = myAge % 2 === 0;

if (isEven) {
    console.log('My age is even');
} else {
    console.log('My age is odd');
}

var activeUserCount = 3;

console.log(`There is ${activeUserCount} active user`);

if (activeUserCount === 1) {
    console.log(`There is ${activeUserCount} active user`);
} else if (activeUserCount === 0 || activeUserCount > 1) {
    console.log(`There are ${activeUserCount} active users`);
} 

var myName = 'Aaron';

console.log(myName[1] + 2);