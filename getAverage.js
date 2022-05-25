//PREP
//Parameters:
//An array of positive integers

//Return:
//An integer representing the average of all numbers

//Examples:
//getAverage([2,2,2,2]) 2
//getAverage([1,2,3,4,5]) 3
//getAverage([1,1,1,1,1,1,1,2]) 1

//Pseudo-code:
//Reduce all elements of the array to a single integer
//Divide the integer by the number of elements on the array
//Floor integer
//Return integer

function getAverage(marks) {
    const marksSum = marks.reduce((accu, curr) => accu + curr, 0);
    return Math.floor(marksSum / marks.length);
}

//Codewars solution from a user
//Almost had it
/* function getAverage(marks){
    return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
  } */

console.log(getAverage([2,2,2,2]));
console.log(getAverage([1,2,3,4,5]));
console.log(getAverage([1,1,1,1,1,1,1,2]));