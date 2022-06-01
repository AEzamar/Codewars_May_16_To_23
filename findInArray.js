//PREP
//Parameters
//A function that accepts an array of positive integers and a function

//Return:
//The index of the item that evaluates to true according to the evaluation conditions of the function passed into the main function
//The tests for the function already include a series of helper functions that evaluate numbers and strings

//Examples:
//findInArray([1,3,5,6,7], trueIfEven => 3(The index of the only even number is 3)

//Pseudo-code:
//Loop through array
//Use evaluator function on each element of the array
//Return the index of the element that returns true when passed to the iterator function

//Iterators already included in the function
var trueIfEven = function(v, i) { return v % 2 === 0; }
var neverTrue = function(v, i) { return false; }
var trueIfValueEqualsIndex = function(v, i) { return v === i; }
var trueIfLengthEqualsIndex = function(v, i) { return v.length === i; }


//I really did not understand this kata at all

/* function findInArray(array, iterator) {
    
} */

//console.log(findInArray([1,3,5,6,7]), trueIfEven);