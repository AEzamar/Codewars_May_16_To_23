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
    let difference;
    let length = arr.length;
    console.log('Length:', length)
    const sortedArr = arr.sort((a, b) => b - a);
    let curr = 0, next = 1;
        for(let i = 0; i <= sortedArr.length; i++) {
            //console.log(arr[curr], arr[next], arr[curr + 1], arr[next + 1]);
            difference = sortedArr[curr] - sortedArr[next] + sortedArr[curr + 1] - sortedArr[next + 1];
        }
    return length === 0 ? 0 : length === 1 ? 0 : difference;
}

/* console.log(sumOfDifferences([1, 2, 10]));
console.log(sumOfDifferences([-3, -1, -2]));
console.log(sumOfDifferences([-17, 17]));
console.log(sumOfDifferences([])); */

function sumOfDifferences1(arr) {
    let difference;
    let length = arr.length;
    const sortedArr = arr.sort((a, b) => b - a);
    let curr = 0, next = 1;   
    if(length ===  2) {
        difference = sortedArr[curr] - sortedArr[next];
    }
    if(length > 2) {
        difference = sortedArr.reduce((accu, curr) => {
            const result = accu + curr;
            console.log(result);
        }, 0);
        /* for(let i = 0; i <= sortedArr.length; i++) {
            difference = sortedArr[curr] - sortedArr[next] + sortedArr[curr++] - sortedArr[next++];
            //next++;
            //curr++;
        } */
    }
    return length === 0 ? 0 : length === 1 ? 0 : difference;
}

console.log(sumOfDifferences1([1, 2, 10]));
console.log(sumOfDifferences1([-3, -1, -2]));
console.log(sumOfDifferences1([-17, 17]));
console.log(sumOfDifferences1([]));
console.log(sumOfDifferences1([5,11,13,6,0,-14,13]));