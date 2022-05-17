"use strict";
//PREP
//Parameters:
//An array of numbers

//Return:
//A boolean that determines if the array is nice
//An array is nice if every element inside the array is equal to anoter number in the array when you
//add or substract 1

//Examples:
//isNice([2, 10, 9, 3], true) 2 + 1 = 3(this is an element in the array), 10 - 1 = 9(This element is also present in the array), 9 + 1 = 10(It's present on the array too), 3 - 1 = 2(also present)

//Pseudo code:
//Loop through the each element of array
//Create counter variable to keep track of how many elements in the array pass the conditional test
//if the current number in the iteration when added or substracted by 1 is equivalent to another number in the array augment the counter by 1
//if the counter is equal to the length of the array return true, else return false

function isNice(arr) {
    if(arr.length === 0) return false;
    let niceCount = 0;
    for(let i = 0; i <= arr.length; i++) {
        if(arr.includes(arr[i] + 1) || arr.includes(arr[i] - 1)) {
            niceCount++;
        }          
    }
    return niceCount === arr.length ? true : false;
}