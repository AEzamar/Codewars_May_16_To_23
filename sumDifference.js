//PREP
//Parameters:
//An array of positive and negative integers
//An an empty array

//Return:
//The sum of the values that result from substracting pair of integers in the array

//Example:
//sumOfDifferences([1, 2, 10]) // [10, 2, 1] => (10 - 2) + (2 - 1) // 9
//sumOfDifferences([-3, -2, -1]) // [-1, -2, -3] (-1 - -2) + (-2 - -3) // 2 

//Pseudo-code:
//Sort array in descending order
//Loop through array
//Pick elements in the array in pairs and substract the next value from the current value
//Sum the results of all the substractions
//Return the total sum

function sumOfDifferences(arr) {
    const sortedArr = arr.sort((a, b) => b - a);
    let curr = 0;
    let next = 1;
    for(let i = 0; i < sortedArr.length; i++) {
        console.log(arr[curr] - arr[next] + arr[curr + 1] - arr[next + 1]);
    }
}

console.log(sumOfDifferences([1, 2, 10]));