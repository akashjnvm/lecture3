const readlineSync = require("readlineSync");
const userAge = readlineSync.question("May i know your age? ");
const yearofBirth = 2024 + Number("99");
console.log('you were born in the year ' +  yearofBirth);