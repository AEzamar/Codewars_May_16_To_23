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
 
function getLengthOfMissingArray(arrayOfArrays) {
    if(arrayOfArrays.length === 0) return 0;
    const sortedArr = arrayOfArrays.sort((a, b) => a.length - b.length);
    let missingLen;
    for(let i = 0; i < sortedArr.length; i++) {
        const indexOne = i + 1;
        if(sortedArr[i].length === 0) return missingLen = 0;
        if(sortedArr[i].length !== indexOne + 1) {
            console.log('Len', sortedArr[i].length, 'index:', indexOne + 1);
            return missingLen = indexOne + 1;
        }
    }
    console.log(sortedArr);
    return missingLen;
}

/* console.log(getLengthOfMissingArray([[ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]));
console.log(getLengthOfMissingArray([[2, 3, 1, 2], [1], [1, 0, 9], [2, 1, 9, 9, 1]])); */
//console.log(getLengthOfMissingArray([[4, 1, 2, 3, 4, 5], [1, 2, 3], [0, 1], [0, 1, 1, 4]]));

/* console.log(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]));
console.log(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]));
console.log(getLengthOfMissingArray([[ null ], [ null, null, null ]]));
console.log(getLengthOfMissingArray([[ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]]));
console.log(getLengthOfMissingArray([]));
console.log(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [], [ 5, 6, 7, 8, 9 ]])); */

//console.log(getLengthOfMissingArray([[2, 0], [3, 2, 3], [0, 2, 2, 4], [4, 1, 1, 1, 0], [4, 4, 2, 3, 0, 2, 2], [2, 0, 2, 2, 4, 4, 1, 4], [3, 1, 1, 2, 1, 4, 1, 3, 1]]));

//console.log(getLengthOfMissingArray([[0, 2, 4, 3], [3, 0, 4, 2, 4], [0, 4, 1, 4, 0, 0], [1, 3, 1, 1, 3, 0, 1], [4, 0, 3, 3, 3, 0, 0, 0, 2]]));

function getLengthOfMissingArray1(arrayOfArrays) {
    if(arrayOfArrays.length === 0) return 0;
    const sortedArr = arrayOfArrays.sort((a, b) => a.length - b.length);
    let missingLen = 0;
    for(let i = 0; i < sortedArr.length; i++) {
        if(sortedArr[i].length === 0) return 0;
        //console.log('Sub-Arr Len + 1', sortedArr[i].length + 1, 'Next Sub-Arr Len', sortedArr[i + 1].length);
        if(sortedArr[i].length + 1 !== sortedArr[i + 1].length) {
            return missingLen = sortedArr[i].length + 1;
        }
    }
    return missingLen;
}

//console.log(getLengthOfMissingArray1([[2, 0], [3, 2, 3], [0, 2, 2, 4], [4, 1, 1, 1, 0], [4, 4, 2, 3, 0, 2, 2], [2, 0, 2, 2, 4, 4, 1, 4], [3, 1, 1, 2, 1, 4, 1, 3, 1]]));
//console.log(getLengthOfMissingArray1([[0, 2, 4, 3], [3, 0, 4, 2, 4], [0, 4, 1, 4, 0, 0], [1, 3, 1, 1, 3, 0, 1], [4, 0, 3, 3, 3, 0, 0, 0, 2]]));

function getLengthOfMissingArray2(arrayOfArrays) {
    const sortedArr = arrayOfArrays.sort((a, b) => a.length - b.length);
    for(let i = 0; i < sortedArr.length; i++) {
        const consecutive = sortedArr[i].length + 1;
        //console.log('Arr len:', sortedArr[i + 1].length, 'Consecutive:', consecutive);
        if(sortedArr[i + 1].length !== consecutive) {
            return consecutive;
        }
    }
}
console.log(getLengthOfMissingArray2([[2, 0], [3, 2, 3], [0, 2, 2, 4], [4, 1, 1, 1, 0], [4, 4, 2, 3, 0, 2, 2], [2, 0, 2, 2, 4, 4, 1, 4], [3, 1, 1, 2, 1, 4, 1, 3, 1]]));
console.log(getLengthOfMissingArray2([[0, 2, 4, 3], [3, 0, 4, 2, 4], [0, 4, 1, 4, 0, 0], [1, 3, 1, 1, 3, 0, 1], [4, 0, 3, 3, 3, 0, 0, 0, 2]]));
console.log(getLengthOfMissingArray2([[1, 2], [2, 1, 3, 4], [0, 5, 1, 2, 8], [9, 0, 1, 2, 3, 6]]));