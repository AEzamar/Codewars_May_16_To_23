//PREP
//Parameters:
//An array of positive integers

//Return:
//The largest possible sum from the biggest integers in the array

//Examples:
//largestPairSum([10, 14, 2, 23, 19]) => 23 + 19 = 42
//largestPairSum([99, 2, 2, 23, 19]) => 99 + 23 => 122

//Pseudo-code:
//Sort array in descending order
//Sum first two integers
//Return sum

function largestPairSum(numbers) {
    const sortedNums = numbers.sort((a, b) => b - a);
    return sortedNums[0] + sortedNums[1];
}

//Codewars solution
//Very similar to mine but I always forget about destructuring
/* function largestPairSum(numbers) {
    var [a, b] = numbers.sort((a, b) => b - a);
    return a + b;
  } */

console.log(largestPairSum([10, 14, 2, 23, 19]));
console.log(largestPairSum([99, 2, 2, 23, 19]));