//PREP
//Parameters:
//Only two strings representing numbers from 0 to 9

//Return:
//The function should return a string representing the sum of the numbers the strings are representing

//Examples:
//sumStrings('123', '456') // '579'
//sumStrings('1', '2') // '3'

//Pseudo-code:
//Create object with number equivalences 
//Loop over each string and convert each character into a number, to make a single integer for each string passed
//Add both converted numbers
//Turn the result of the sum of both numbers into a string
//Return string representing the product of the sum of both integer representing strings

function sumStrings(a, b) {
    return String(Number(a) + Number(b));
}

console.log(sumStrings('123', '2'));
console.log(sumStrings('123', '456'));