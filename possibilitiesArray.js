//PREP
//Parameters:
//An array of integers
//The array will never be empty

//Return:
//The function should return true if the array contains all numbers included in the range of 0 to array.length - 1
//It should return false if the array does not contain every single number in this range

//Examples:
//isAllPossibilities([1, 2, 0, 3]) a.length = 4 - 1 = 3 => range is: 0, 1, 2, 3 => array contains all numbers => //true
//isAllPossibilies([1, 2, 3, 4]) This array does not contain 0 so the range condition is not fullfiled // false

//Pseudo-code:
//Sort array in ascending order
//If array does not contain the number 0 return false
//Stablish a constant rangeEnd that stores the range of array.length - 1;
//Fill a new array rangeArr with the numbers from the range (0 to rangeEnd).
//Loop through the integers in x and verify if it includes all the numbers in rangeArray
//If it x includes all the numbers in rangeArr return true
//Else return false

function isAllPossibilities(x) {
    const rangeEnd = x.length - 1;
    const sortedArr = x.sort((a, b) => a - b);
}

console.log(isAllPossibilities([1, 2, 0, 3]))