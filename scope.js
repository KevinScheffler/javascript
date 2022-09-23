// scope

const firstName = "Aaron";
const lastName = 'Jack';

let fullName;

if (firstName) {
    // create full name
    fullName = `${firstName} ${lastName}`;
    // variables get passed down
    // but don't get passed up
    // from the scope they're created in
}

console.log(fullName);