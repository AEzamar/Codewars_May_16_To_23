//PREP
//Parameters
//A single integer

//Return:
//The function should return true if the integer is narcissistic, meaning that if each individual number of the integer is exponentiated by the the length of the
//Number and the sum of this returns the same integer, then that integer is narcissistic
//Otherwise return false

//Example:
//isNarcissistic(153) => 1 ** 3(the Numbers length) = 1, 5 ** 3 => 125  => 126 => 3 ** 3 = 27 => 126 + 27 = 153, so this number is narcissistic => true;

//Pseudo-code:
//Convert integer to string
//Split string to an array of string represented numbers
//Map through array of strings
//Convert each element of the array into a number
//Exponentiate each number by the length of the original number and sum the result of each exponentiation
//Compare the result of previous operation with original number
//if original number and result are equal return true
//else return false;

function isNarcissistic(n) {
    return String(n).split("").map((ele, _, arr) => Number(ele) ** arr.length).reduce((a, b) => a + b, 0) === n ? true: false;
}

console.log(isNarcissistic(153));
console.log(isNarcissistic(123));

//Codewars solution
//The index can be replaced with _ since it wasn't used
//Other than that this is a pretty elegant solution

/* function isNarcissistic(n) {
    return n === n.toString().split('').reduce((res, num, index, arr) => res += Math.pow(num, arr.length), 0);
  } */