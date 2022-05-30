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
    const sortedNumbers = numbers.sort((a, b) => a - b);
    let total = sortedNumbers[0], operationsCount = 0, next = 1;
    while(total < value) {
        total += sortedNumbers[next];
        next++;
        operationsCount++;
    }
    return operationsCount;
};

console.log(minimumSteps([4,6,3], 7));
console.log(minimumSteps([10,9,9,8], 17));
console.log(minimumSteps([8,9,10,4,2], 23));
console.log(minimumSteps([19,98,69,28,75,45,17,98,67], 464));
console.log(minimumSteps([4,6,3], 2));
console.log(minimumSteps([1, 10, 12, 9, 2, 3], 6));
