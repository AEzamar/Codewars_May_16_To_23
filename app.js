"use strict";
//PREP
//Parameters: 
//2 Numbers will be passed
//The first number will always be smaller than the second
//Both numbers might be negative

//Result:
//The function should return the total amount of numbers between the first and second number
//Numbers that contain 5 should not be included
//The starting and ending numbers have to be counted

//Examples:
//dontGiveMeFive(1, 9); //8
//dontGiveMeFive(4, 17); //12

//Pseudo-Code:
//Loop from start to end
//Filter numbers that have the number 5 on them
//Return length of array of filtered numbers 

function dontGiveMeFive(start, end) {
    let counter = 0;
    for(let i = start; i <= end; i++) {
        if(!i.toString().includes('5')) {
            counter++;
        }
    }
    return counter;
}

console.log(dontGiveMeFive(1, 9));
console.log(dontGiveMeFive(4, 17));
