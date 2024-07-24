const readlineSync = require("readline-sync");
const userName = readlineSync.question("May i know your name? ");
const userAge = readlineSync.question("May i know your age? ");

console.log('Welcome' + userName + ' to GFG');
const yearofBirth = 2024 + Number(userAge);
console.log('you were born in the year' + yearofBirth);