// combining arrays and objects
// by value vs by reference

const users = [
    {
        name: "Aaron",
        age: 27,
        tags: ['new-user', 'javascript']
    },
    {
        name: "Phillip",
        age: 30,
        tags: ['javascript']
    },
    {
        name: "Jan",
        age: 25,
        tags: []
    }
];

// by value (all primitive data types)
// const age = 27;
// let age2 = age;

// age2 = 28;

// console.log(age, age2);

// const name = 'Aaron';
// let name2 = name;

// name2 = 'Jan';

// console.log(name, name2);

// const names = ['Aaron'];
// let name2 = names;

// name2.push('Jan');

// console.log(names, name2);


const user = {name: 'Aaron'};
let name2 = user;
let name3 = name2;
let name4 = name3;

user.name = "Jan";

console.log(name2, name3);