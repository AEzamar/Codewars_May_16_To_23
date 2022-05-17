"use strict";
//PREP
//Parameters: The input is a multidimensional array
//The 'columns' of the array form strings of various lengths
//The elements in the arrays will always be strings

//Return:
//The function should return a single string made from the 'columns' of characters formed by the arrays
//The string should not include whitespaces contained within the arrays 

//Examples:
//arrAdder([
/* ['J','L','L','M'],
['u','i','i','a'],
['s','v','f','n'],
['t','e','e','']
])  */ //Just live life man

//Pseudo-code
//Loop over the arrays
//Use nested loop to access nested arrays
//Access each array element of the nested arrays in a vertical manner forming columns
//Create empty string
//Pass each element in the arrays 'columns' to the empty string'
//Ignore whitespace in between individual characters
//Add a whitespace at the start of the iteration on a new 'column'
//Return string formed with the characters from each 'column'

function arrAdder(arr) {
    let arrPhrase = "";
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            console.log(arr[j]);
        }
    }
}