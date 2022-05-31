//PREP
//Parameters:
//An array of positive integers

//Return:
//The minimum sum obtainable from multiplying the integers in pairs following a pattern of
//multiplying the biggest number in the array by the smallest
//The return value should be a sum of all these multiplications

//Examples:
//minSum([5,4,2,3]) => 5 * 2 = 10 => 4 * 3 = 12 // 22
//minSum([9,2,8,7,5,4,0,6]) => 9 * 0 = 0 => 8 * 2 = 16 => 7 * 4 = 28 => 5 * 6 = 30 //74

//Pseudo-code:
//Sort array in descending order
//Loop though array for a array.length number of times
//Select first and last element of the array and multiply them
//Keep selecting and multiplyng the integers in the array with this pattern until the loop is over
//Add the result of all the multiplications
//Return this result

function minSum(arr) {
    let last = arr.length - 1, multiplied = 0;
    const sortedArr = arr.sort((a, b) => b - a);
    for(let i = 0; i < sortedArr.length / 2; i++) {
        multiplied += sortedArr[i] * sortedArr[last];
        last--;
    }
    return multiplied;
} 

//Codewars solution:
//Whaaaat
//This function pops and shifts the last and first element respectively and multiplies them
//The while loop as long as the arr has length, since this function pops and shifts, this ends up
//emptying the array and the while loop stops
//Very clever solution imo
/* function minSum(arr) {
    arr.sort((x,y)=>x-y);
    s=0;
    while(arr.length)s+=arr.pop()*arr.shift();
    return s;
  } */
console.log(minSum([5,4,2,3]));