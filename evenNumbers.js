//PREP
//Parameters:
//An array of positive and negative integers, the array will never be emtpy
//A number indicating how many of the last even numbers the function should return 
//The length of the array will be at least of number length

//Return:
//The return has to be an array containing a number amount of of the last even numbers in the array
//In the same order as they apper on the original array

//Examples:
//evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8];
//evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26];
//evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6];

//Pseudo-code:
//Filter even elements from array and create new even integers array
//Select elements of array from number up to end of even array
//Return sub-array of even numbers

function evenNumbers(array, number) {
    const evenArr =  array.filter(num => num % 2 === 0);
    console.log(evenArr);
    return evenArr.slice();
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));