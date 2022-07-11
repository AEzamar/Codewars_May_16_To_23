//PREP
//Parameters:
//An array of arrays
//The length of the arrays will be consecutive but the array will always
//be missin an array that is part of that consecutive order

//Return:
//The index of the missing array, the array of arrays contains arrays that have lengths of consecutie magnitudes
//but one array within this consecutive length order will always be missing
//and the function has to return the index of the array that is missing in this sequence

//Examples:
//getLengthOfMissingArray([[ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]) We have an array of lengt 1, length 2, length 4
//and length 5, so were missing the array with a lengt of 3, which is also the index this missing subarray should have in the outer array
//getLengthOfMissingArray([[ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]) // 2
//getLengthOfMissingArray([[ null ], [ null, null, null ] ]]) // 2

//Pseudo-code:
//Map over array of arrays
//Sort sub-arrays in ascending order according to their length
//Loop throgh sorted array, and compare the current index of iteration with the length of each
//sub array
//if the iteration number is not equal to the length of a given sub-array return the iteration number
 
function getLengthOfMissingArray(array) {
    const sortedArr = array.sort((a, b) => a.length - b.length);
    let missingLen;
    for(let i = 0; i < sortedArr.length; i++) {
        if(sortedArr[i].length !== i + 1 || sortedArr[i].length + 1 !== i + 1) {
            missingLen = i;
            return missingLen;
        }
    console.log('Sub-array length:', sortedArr[i].length, 'Iteration:', i + 1)
    }
    return missingLen;
}

console.log(getLengthOfMissingArray([[ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]));
console.log(getLengthOfMissingArray([[2, 3, 1, 2], [1], [1, 0, 9], [2, 1, 9, 9, 1]]));