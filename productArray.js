//PREP
//Parameter:
//An array of positive integers of at least length = 2

//Return
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
//Except index has to be i in the productArray function's for loop
function extractAndReduce(array, excepIndex) {
    const exceptArr = [];
    const arrayCopy = [...array];
    arrayCopy.splice(excepIndex, 1);
    for(let i = 0; i < arrayCopy.length; i++) {
        exceptArr.push(arrayCopy[i]);
    }
    return exceptArr.reduce((tot, cur) => tot * cur);
}

console.log(extractAndReduce([3, 27, 4, 2], 0));

/* function productArray(numbers) {
    let opCount = 0;
    let productArr = [];
    const numbersCopy = [...numbers];
    for(let i = 0; i < numbersCopy.length - 1; i++) {
        if(opCount === i) {
            numbersCopy.splice(i, 1);
            console.log()
            productArr.push(numbersCopy[i])
            
            //productArr.push(numbers[i])
        }
        opCount++;
    }
    return productArr.reduce((tot, cur) => tot * cur);
} */

function productArray(number) {
    const opCount = 0;
    const productArr = [];
    for(let i = 0; i < number.length; i++) {
        extractAndReduce(number, i)
    }
}

//console.log(productArray([3,27,4,2]));