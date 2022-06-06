//PREP
//Parameters:
//An array of positive and negative integers
//A number indicating the position of the smallest integer we have to look for

//Return:
//The smallest integer indicated by the second parameter in the function

//Example:
//nthSmallest([3,1,2], 2) => The second smallest integer in this array is 2 // 2 
//nthSmallest([15,20,7,10,4,3],3) The third smallest int in this array is 7 // 7
//nthSmallest([-5,-1,-6,-18],4) The fourth smallest integer in this array is -1 // -1

//Pseudo-code:
//Sort array in ascending order
//Loop through array
//Take the second argument of the function named pos and use to index the integer we have to retrieve
//Return the integer with position pos

function nthSmallest(arr, pos) {
    return arr.sort((a, b) => a - b).filter(int => int === arr[pos]);
}

console.log(nthSmallest([3,1,2], 2));