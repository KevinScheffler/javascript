// String Methods
const animal = "dogs are great";

// length
console.log(animal.length);

// indexOf (find a char or substr within a str)
console.log(animal.indexOf("s"));
console.log(animal.indexOf("great"));

// slice
console.log(animal.slice(4));
console.log(animal.slice(0, 4));
const newStr = animal.slice(0, -5);
console.log(newStr);

// toUpper / LowerCase
console.log(animal.toUpperCase());
console.log(animal.toLowerCase());

// concat
console.log(animal.concat("(definitely)!"));

// replace
console.log(animal.replace(/dogs/g, "cats"));

// split
console.log(animal.split(" "))