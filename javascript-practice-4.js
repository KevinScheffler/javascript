const firstName = "Kevin";

for (let i = 0; i < firstName.length; i++) {
    // console.log(firstName[i]);
}

// const familyNames = ["Arthur", "Patricia", "Eric", "Greg", "Kevin", "Janine"];

// for (let i = 0; i < familyNames.length; i++) {
//     console.log(`${familyNames[i]} Scheffler`);
// }

// const familyNames = ["Arthur", "Patricia", "Eric", "Greg", "Kevin", "Janine"];

// for (let names of familyNames) {
//     console.log(`${names} Scheffler`);
// }

// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i++;
// }

let i = '';

while (i.length < 10) {
    i += 'A';
    console.log(i);
}

const computer = {
    ram: "8GB",
    cpu: "quad core",
    storage: "1TB"
}

for (key in computer) {
    console.log(`${key}: ${computer[key]}`);
}


