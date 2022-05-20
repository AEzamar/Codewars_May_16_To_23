//PREP
//Parameters:
//Two arrays of integers sorted, either in ascending or descending order
//The arrays will always be of length > 0;

//Return:
//Return a single array merged array with all elements sorted in ascending order
//The final array most not contain duplicate values;
//If the arrays passed to the function are empty, a single empty array must be returned
//If only 1 array has integers then that array most be returned in ascending order

//Examples:
//mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]); => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]); => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]) => [1, 2, 3, 4, 5, 7, 9, 10, 11, 12];

//Pseudo-code:
//Create empty array arr3
//If both arrays' length is not 0 proceed with the rest else return only the array which length's is not 0 and sort it in ascending order
//Push elements fro both arrays into empty array
//If the element we're trying to push in the array already exists don't push it
//Sort mergedArray in ascending order
//Return mergedArray
//If both arr1 and arr2 are passed empty, return empty array

function mergeArrays(arr1, arr2) {
    const arr3 = [];
    if(arr1.length > 0 && arr2.length > 0) {
        const mergedArr = arr1.concat(arr2);
        for(let i = 0; i < mergedArr.length; i++) {
            if(!arr3.includes(mergedArr[i])) {
                arr3.push(mergedArr[i]);
            }
        }
    }else if(arr1.length > 0) {
        return arr1.sort((a, b) => a - b);
    }else {
        return arr2.sort((a, b) => a - b);
    }
    return arr3.sort((a, b) => a - b);
}

console.log(mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));