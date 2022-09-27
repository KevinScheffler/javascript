function divideByTwo (num) {
    return Math.floor(num / 2);
}

console.log(divideByTwo(10));
console.log(divideByTwo(25));
console.log(divideByTwo(1235));

const jawn = function (str) {
    return str[0].toUpperCase();
}

console.log(jawn("Hello"));
console.log(jawn("World"));
console.log(jawn("i love javascript"));

const str = function (str) {
    const arr = str.split(' ')
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");
    console.log(str2);
}

console.log(str('hello world i love javascript'));


const string = "i love javascript";

console.log(string.indexOf("j"));
console.log(string.indexOf("z"));
console.log(string.slice(6));
console.log(string.slice(1,6));
console.log(string.replace("javascript", "HTML"));
console.log(string.split(" "))


const num = 1000;

console.log(num.toString())
console.log('$' + num.toFixed(2))
console.log(Math.max(31, 28));

const arr = [1, 2, 3, 4];

console.log(arr.slice(2));
console.log(arr.push(5, 6));
console.log(arr);
console.log(arr.splice(3, 2));
console.log(arr);


var alphabet = "abc";

console.log(alphabet.split("").reverse().join(" "));

var myNumber = 100;

console.log(myNumber.toFixed(2).split(".")[1]);

var coachName = "jan frey";

console.log(coachName.split(" ")[1][0].toUpperCase().concat(" is the last initial"));




