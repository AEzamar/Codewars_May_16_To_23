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

/* function sumOfDifferences1(arr) {
    const sortedArr = arr.sort((a, b) => b - a);
    let curr = 0, next = 1, length = arr.length;
    let difference = sortedArr[curr] - sortedArr[next];  
    for(let i = 0; i < sortedArr.length; i++) {
        if(length ===  2) {
            return difference;
        }else if(length > 2) {
            difference = (sortedArr[curr] - sortedArr[next]) + (sortedArr[i] - sortedArr[next]); 
        }
    } 
    next++;
    return length === 0 ? 0 : length === 1 ? 0 : difference;
} */

////////////////////Failed/////////////////
//Codewars solution
/* const sumOfDifferences = arr => arr
  .sort((a, b) => b - a)
  .map((a, i) => a - arr[i + 1] || 0)
  .reduce((a, b) => a + b, 0);
 */
console.log(sumOfDifferences1([1, 2, 10]));
console.log(sumOfDifferences1([-3, -1, -2]));
console.log(sumOfDifferences1([-17, 17]));
console.log(sumOfDifferences1([]));
console.log(sumOfDifferences1([5,11,13,6,0,-14,13]));
console.log(sumOfDifferences1([-14,-14,11,-5,-11,0,9,9,-3,5,-11,-14,2,12,5,4,12,-13,-13,-11]));
console.log(sumOfDifferences1([5,-6,4,-23,20,-11,-2,0,26,4,-19,-14,20,14,23,-12,-16,-22,19,-20,-14,10,28,-29]));