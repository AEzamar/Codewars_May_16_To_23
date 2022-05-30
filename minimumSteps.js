//PREP
//Parameters: 
//Two inputs, and array of positive numbers and a threshold number

//Return:
//The number of operations needed to reach the threshold number by adding the smallest
//numbers 1 by 1

//Examples:
//minimumSteps([1, 10, 12, 9, 2, 3], 6) => 1 + 2 = 3(This adds one the operation count) => 3 + 3 = 6(Here the threshold has been reached, we can stop adding) and the operations count is 2
//minimumSteps([10,9,9,8], 17) => 8 + 10 = 18(Here the threshold has been reachd, we stop adding and the operations count is 1 )

//Pseudo-code:
//Sort array in ascending order
//Create variable total to store total of adding each value of the array
//Create variable operationsCount to keep track of the number of operations
//While total is less than value, add the first number to the second number and put it in total and add 1 to operationsCount
//If total is bigger or equal than value stop adding and return operationsCount
//else if  total is smaller than value add the next number in the array to total until total is bigger or equal to value
//Return operationsCount

function minimumSteps(numbers, value) {
    let total = 0, operationsCount = 0;
    while(total < value) {
        for(let i = 0; i < numbers.length; i++) {
            total += numbers[i] + numbers[i + 1];
        }
        operationsCount++;
    }
    return operationsCount;
}