//PREP
//Parameters:
//The function will accept an array called numbers of positive and negative integers
//And a number named size to indicate how many integers in the array have to be multiplied with each other to obtain the maximum product

//Return:
//The product of the sum of size amount of integers multiplied with each other

//Example:
//maxProduct([4,3,5], 2) => 4 * 5  // 20 The size(2) passed to the fuction indicates to multiply the first 2 max integers
//maxProduct([10,8,7,9], 3) => 10 * 9 => 90 * 8 // 720
//maxProduct([8,6,4,6], 3) => 8 * 6 => 48 * 6 // 288

//Pseudo-code:
//Sort array in descending order
//Loop a size number of times
//Slice array from 0 to array with index size
//Reduce the resulting subarray using multiplication
//Return product of reduction

function maxProduct(numbers, size) {
    return numbers.sort((a, b) => b - a).slice(0, size).reduce((total, curr) => total * curr);
}

console.log(maxProduct([4,3,5], 2));
console.log(maxProduct([10,8,7,9], 3));
console.log(maxProduct([8,6,4,6], 3));