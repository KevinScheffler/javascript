// for OF loops
// Declaritive loop (vs imperative loop)

// const names = ["Aaron", "Jan", "Enrique"];

// for (let name of names) {
//     console.log(name);
// }

// const firstName = "Kevin";

// for (let char of firstName) {
//     console.log(char);
// }

// for IN loops
// Declaritive loop (vs imperative loop)

const user = {
    name: "Aaron",
    age: 27
}

for (let key in user) {
    console.log(user[key]);
}