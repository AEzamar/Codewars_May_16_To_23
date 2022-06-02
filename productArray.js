//PREP
//Parameter:
//An array of positive integers of at least length = 2

//Return:
//An array of the result of multypling pairs of elements in the array
//The elements have to be multiplied in pairs, the pairs are decided by excluding the number with the index that is equal to the number of the current operation
//If we're on the first operation of the first element has to be excluded and the other 2 have to be multiplied and the result has to be pushed to a new array
//If were on the second operation the second element of the array has to be excluded and 1 and 3 have to be multiplied and the result has to be pushed to the new array

//Examples:
//productArray([12,20]));  => [20, 12] (In this example there's not multiplication but the items get swapped if you excluded the element corresponding to the operation)
//productArray([3,27,4,2]); => [216,24,162,324];
//productArray([13,10,5,2,9]); => [900,1170,2340,5850,1300];

//Pseudo-code:
//Loop through array
//Make variable to keep track of the number of the operation
//Multiply all elements of the array with each other except the element with the index that corresponds to the number of the operation
//Push the result of that multiplication to a new array prodArr
//Keep doing this process for array.length number of times
//After loop is over return prodArr with all the results of the multiplications

//Making a helper function
//exceptindex has to be i in the productArray function's for loop

function extractAndReduce(array, excepIndex) {
    const slice1 = array.slice(0, excepIndex);
    const slice2 = array.slice(excepIndex + 1);
    const slicedArr = [...slice1, ...slice2];
    return slicedArr.reduce((tot, cur) => tot * cur);
}

console.log(extractAndReduce([7, 31, 64, 8, 1, 4, 4, 24, 10], 4));

/* function productArray(numbers) {
    const productArr = [];
    if(numbers.length === 2) {
        const [ele1, ele2] = numbers;
        return [ele2, ele1];
    }
    for(let i = 0; i < numbers.length; i++) {
        productArr.push(extractAndReduce(numbers, i));
    }
    return productArr;
} */

function productArray(numbers){
    const productArr = [];
    const [ele1, ele2] = numbers;
    for(let i = 0; i < numbers.length; i++) {
      productArr.push(extractAndReduce(numbers, i));
    }
    return numbers.length === 2 ? [ele2, ele1] : productArr;   
  }

console.log(productArray([20, 12]));
console.log(productArray([3,27,4,2]));
console.log(productArray([13,10,5,2,9]));
console.log(productArray([7, 31, 64, 8, 1, 4, 4, 24, 10]));

//Codewars solution:
//Come on man, what is this?!
/* function productArray(numbers){
    return numbers.map(x => numbers.reduce((a,b) => a * b) / x)
  } */

//This is very similar to the last solution ^ but it's a little more readable 
/*   function productArray(numbers)
{
  var sum = numbers.reduce((x, y) => x * y);
  return numbers.map(x => sum / x);
} */