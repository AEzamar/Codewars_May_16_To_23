//PREP
//Parameters:
//An array of positive and negative integers

//Return:
//An array that contains the integers that are leaders
//An integer is a leader when it's bigger that the sum of all the elements to it's right

//Example:
//arrayLeaders([1,2,3,4,0]) => 1 is not bigger than 2 + 3 + 4 or 9 => 2 is not bigger than 7 => 3 is not bigger than 4 => 4 is bigger than 0 // the result is [4], being the only leader of this array
//arrayLeaders([16,17,4,3,5,2]) => [17, 5, 2];
//arrayLeaders([[-36,-12,-27]]) => [-36, -12];

//Pseudo-code:
//Create empty array to store leaders leadersArr
//Loop through numbers passed in the function
//Make variable to store single integer from numbers called possibleLeader = 0;
//numbers[possibleLeader] This element will be changed manually to store each integer of the array individually to compare it with the elements to it's right
//Slice a section of the array that contains the integers to the right of numbers[possibleLeader]
//Reduce this sub-array with a sum
//Compare numbers[possibleLeader] with the result of the reduction
//if numbers[possibleLeader] is bigger than the result of the reduction, push possibleLeader to leadersArr
//Repeat the steps until the end of the array is reached
//If the last element of the array is bigger than 0 push it to leadersArr too
//After all the iterations are done return leadersArr

function arrayLeaders(numbers) {
    const leadersArr = [];
    for(let i = 0; i < numbers.length - 1; i++) {
        const sum = [...numbers.slice(i + 1)].reduce((tot, cur) => tot + cur);
        if( numbers[i] > sum) {
            leadersArr.push(numbers[i]);
        }
    };
    if(numbers[numbers.length - 1] > 0) leadersArr.push(numbers[numbers.length - 1]); 
    return leadersArr;
}

console.log(arrayLeaders([1,2,3,4,0]));
console.log(arrayLeaders([16,17,4,3,5,2]));
console.log(arrayLeaders([-1,-29,-26,-2]));
console.log(arrayLeaders([-36,-12,-27]));