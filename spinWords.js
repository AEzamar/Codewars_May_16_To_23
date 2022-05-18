"use strict";
//PREP
//Parameters:
//The input will be a string with words of different lengths

//Return:
//The same string has to be returned with words of 5 or more letters reversed

//Examples:
//spinWords("Welcome"), "emocleW");
//spinWords("Hey fellow warriors"), "Hey wollef sroirraw";
//spinWords("This is a test"), "This is a test");

//Pseudo-code:
//

function spinWords(string) {
  const stringArr = string.split(" ");
  for(let i = 0; i < stringArr.length; i++) {
    
  }
  return stringArr;
}

console.log(spinWords("Mountain"));
console.log(spinWords("Cuntry Roads take me home"))