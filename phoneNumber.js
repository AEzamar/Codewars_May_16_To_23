//PREP
//Parameters:
//An array of 10 integers

//Return:
//A string where the 10 integers are converted to a string and formatted as a phone number

//Examples:
//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) => "(123) 456-7890"
//createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) => "(111) 111- 1111"
//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) => "(123) 456 7890"

//Pseudo-code:
//Loop over array of numbers
//Return template literal with the first 3 numbers grouped together inside a parenthesis
//the next 3 numbers grouped together and the last numbers grouped together using a literal dash to separate
//the last 2 groups of numbers

function createPhoneNumber(numbers) {
    const numStr = numbers.join("");
    const group1 = numbers.slice(0, 3).join("");
    const group2 = numbers.slice(3, 6).join("");
    const group3 = numbers.slice(6, 10).join("");
    const phoneRegex = /(\d{3}\d{3})/g
    console.log(numStr.match(phoneRegex));
    return `(${group1}) ${group2}-${group3}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));