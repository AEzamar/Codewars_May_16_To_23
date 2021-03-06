"use strict";
//PREP
//Parameters: 
//An array with different kinds of data types

//Return: 
//This function should output a new array of the same length but with all the zeros moved to the last positions in the array
//The other elements in the array should remain in the same order they were in in the initial array

//Examples:
//moveZeros([false,1,0,1,2,0,1,3,"a"]) // [false, 1, 1, 2, 1, 3, "a", 0, 0];

//Pseudo-code:
//This pseudo code is a lie
//Make a copy of the array
//Loop over copied array
//if an element of the copied array equals 0, splice it and push it to the end of the array
//return copied array

/* function moveZeros(arr) {
    const copyArr = [...arr];
    let zeroArr = [];
    for(let i = 0; i < copyArr.length; i++) {
        if(copyArr[i] === 0) {
            zeroArr.push(copyArr[i]);
        }
    }
    return copyArr.filter(ele => ele !== 0).concat(zeroArr);
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); */


//The solution I submitted
function moveZeros(arr) {
    return arr.filter(ele => ele !== 0).concat(arr.filter(ele => ele === 0));
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
