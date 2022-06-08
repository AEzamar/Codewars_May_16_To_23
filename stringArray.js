//PREP
//Parameters:
//An array of strings representing numbers

//Return:
//The output of the function should be an array with all the strings
//converted to numbers

//Examples:
//toNumberArray(["1.1","2.2","3.3"]) => [1, 2, 3];
//toNumberArray(["60", "23", "12", "11", "499"]) => [60, 23, 12, 11, 499];

//Pseudo-code:
//Create copy of original array
//Map over array copy
//Convert every string into a number
//Return array of integers

function toNumberArray(stringarray) {
    const strArrCopy = [...stringarray];
    return strArrCopy.map(str => Number(str));
}

console.log(toNumberArray(["1.1","2.2","3.3"]));
console.log(toNumberArray(["60", "23", "12", "11", "499"]));
