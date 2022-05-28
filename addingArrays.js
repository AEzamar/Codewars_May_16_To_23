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
//Pass each element in the arrays 'columns' to the empty string
//Ignore whitespace in between individual characters
//Add a whitespace at the start of the iteration on a new 'column'
//Return string formed with the characters from each 'column'

function arrAdder(arr) {
    let arrPhrase = "";
    let iterator = 0;
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i][iterator]);
        for(let j = 0; j < arr[i].length; j++) {
        }
        if(arr[i][iterator] !== "") {
            arrPhrase += arr[i][iterator];
            if(arr[i][iterator] === "" || arr[i][iterator].length === - 1) {
                iterator++;
            }
        }  
    }
    return arrPhrase;
}

//console.log(arrAdder([['J','L','L','M'],['u','i','i','a'],['s','v','f','n'],['t','e','e','']]));

function arrAdder1(arr) {
    let strFromArr = '';
    const dumpSpace = [];
    for(let i = 0; i < arr.length; i++) {
        strFromArr += ' ';
     for(let j = 0; j < arr[i].length; j++) {
        if(arr[j][i] !== undefined) {
            strFromArr += arr[j][i];
        }
         //strFromArr += arr[j][i];
     }
    }
    return arr.length === 0 ? []: strFromArr.trim();
}

console.log(arrAdder1([
['J','L','L','M'],
['u','i','i','a'],
['s','v','f','n'],
['t','e','e','']]));

console.log(arrAdder1([ 
    [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
    [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
    [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
    [ '', 'o', '', '', 'e', '', '', 'l' ],
    [ '', 'c', '', '', 'r', '', '', '' ],
    [ '', 'h', '', '', 'h', '', '', '' ],
    [ '', 'o', '', '', 'o', '', '', '' ],
    [ '', 'n', '', '', 'u', '', '', '' ],
    [ '', 'd', '', '', 's', '', '', '' ],
    [ '', 'r', '', '', 'e', '', '', '' ],
    [ '', 'i', '', '', '', '', '', '' ],
    [ '', 'a', '', '', '', '', '', '' ] ]))
