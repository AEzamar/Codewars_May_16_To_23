"use strict";

//PREP
//Parameters:
//An array of 2 values, either 1 or both will be numbers

//Return:
//An array with nested sub-arrays
//These sub-arrays will be copies of the original array(x) and will be generated according to these conditions:
//If both elements in the array are numbers, the sum of these numbers will determine how many sub-arrays are made and nested in the final array
//If only 1 element is a number that number will determine the number of sub-arrays that the main array will contain
//If neither of the elements is a number the function should return the string 'Void!'

//Examples:
//explode([a, 3]) score = 3 //[[a, 3], [a, 3], [a, 3]];
//explode([3, 2]) score = 5 //[[3, 2], [3, 2], [3, 2], [3, 2], [3, 2]];
//explode([a, "hello"]) score = none // 'Void!';

//Pseudo-code:
//if x contains numbers
//Reduce x to a single value
//Loop up to single value of x
//Push single value of x number of copies in empty array
//Return array with nested arrays

//if x contains a single number
//Loop up to single number of times
//Push single number copies of x in empty array
//Return nested array

//if x does not contain numbers
//Return the string 'Void!';

function explode(x) {
    let score, resultArr = [], result, intCount = 0;
    for(let i = 0; i < x.length; i++) {
        if(Number.isInteger(x[i])) {
            intCount++;
            intCount > 1 ? score = x.reduce((accu, curr) => accu + curr, 0) : score = x[i];
        }
    }
    for(let j = 0; j < score; j++) {
        resultArr.push(x);
    }
    return score === 0 ? [] : resultArr.length > 0 ? result = resultArr : result = 'Void!';
}

console.log(explode(['a', 3]));
console.log(explode([3, 2]));
console.log(explode(["Yup", false]));
console.log(explode([true, 2]));
console.log(explode(["2", "4"]));
console.log(explode([3, 5]));
console.log(explode(["a", 0]));
console.log(explode([1, "a"]));