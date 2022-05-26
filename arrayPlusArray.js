//PREP
//Parameters:
//Two arrays of positive and negative integers

//Return:
//The sum of all integers from both arrays

//Examples:
//arrayPlusArray([1, 2, 3], [4, 5, 6]) // 21
//arrayPlusArray([-1, -2, -3], [-4, -5, -6]) // -21
//arrayPlusArray([100, 200, 300], [400, 500, 600]) // 2100

//Pseudo-code:
//Spread first and second array into a single array
//Reduce the integers of the new array into a single integer
//Return the single integer 

function arrayPlusArray(arr1, arr2) {
    return [...arr1, ...arr2].reduce((total, curr) => total + curr, 0);
}