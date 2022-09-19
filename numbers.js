// Numbers, booleans, conditionals

const myMoney = 103;
const myFriendsMoney = 200 + 20; // primitive data type

const totalMoney = myMoney + myFriendsMoney;

// remainder / modulo
const iHaveMoreMoney = myMoney > myFriendsMoney;
// console.log(iHaveMoreMoney)

if (iHaveMoreMoney) {
    console.log('Im rich');
} else if (myMoney > 200) {
    console.log('Im doing ok');
} else if (myMoney > 100) {
    console.log('Im not doing great');
} else {
    console.log('Im poor');
}