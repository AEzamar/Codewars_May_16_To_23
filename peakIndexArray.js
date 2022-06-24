//PREP:
//Parameters:
//An array of positive integers

//Return:
//This function has to add the integers on the left and the right side of the array until the result of both sums is equal
//What has to be returned is the index of the element on the right where the calculation was achieved
//Or the index of the where the calculation was succesful and stopped
//If the sum of the left side and rigt side integers does not yield a succesful result (the sums cannot be equal) 0 should be returned

//Examples:
//peak([1,2,3,5,3,2,1]) => Here we can observe simmetry between the integers in both sides of the array
//So to achieve the same number 1, 2, 3 have to be summed on both sides, so the result is 3(index of number 5), 3 is the index of the number where the operation stopped
//peak([1,12,3,3,6,3,1]) => Here on the left we only need 1 and twelve to achieve 13, while on the right side we need to add 3, 6, 3 and 1 to obtain that 13, so the operation
//stopped at the integer with an index of 2(number 3)

//Pseudo-code:
//Loop through array
//Create two variables to keep track of sum of integers named leftSum and rightSum
//Shift the first number in the array and pass it to leftSum
//Pop last number in the array and pass it to rigthSum
//Keep repeating this operation until leftSum and rightSum are equal
//Return the index of the first element of the array(where the operation stopped)
//If the operation is unsuccesful we should get an empty array and return -1

function peak(arr) {
    const arrCopy = arr;
    let leftSum, rightSum;
    for(let i = 0; i < arrCopy.lengt; i++) {
        leftSum += arrCopy.shift();
        rightSum += arrCopy.pop();
        if(leftSum === rightSum) {
            return arr.IndexOf(arrCopy[0]);
        }
    }
    console.log(arr.indexOf(arrCopy[0]));
}

console.log(peak([1,2,3,5,3,2,1])); 