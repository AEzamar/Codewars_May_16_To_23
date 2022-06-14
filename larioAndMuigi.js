//PREP
//Parameters:
//An array of integers containing non-consecutive numbers

//Return:
//An array that contains a full sequence of consecutive numbers that go from the first
//number in the array to the last number in the array with onyl consecutive numbers in between

//Examples:
//pipeFix([1,2,3,5,6,8,9]) => [1,2,3,4,5,6,7,8,9];
//pipeFix([1,2,3,12]) => [1,2,3,4,5,6,7,8,9,10,11,12]
//pipeFix([6,9]) => [6,7,8,9];
//pipeFix([-1,4]) => [-1,0,1,2,3,4];

//Pseudo-code:
//Create empty array to store a series of consecutive values named fixedPipes
//Loop over the array, the start of the loop should be the first element in the array
//The limit of the loop is the last item in the array
//Fill fixedPipes with the numbers that go from the range of the first element of the original array to the last element in the array
//Return fixedPipes

function pipeFix(numbers) {
    let fixedPipes = [];
    for(let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
        fixedPipes.push(i);
    }
    return fixedPipes;
}

console.log(pipeFix([1,2,3,5,6,8,9]));
console.log(pipeFix([1,2,3,12]));
console.log(pipeFix([6,9]));
console.log(pipeFix([-1,4]));