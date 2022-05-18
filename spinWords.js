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
//Split string into words
//iterate over arrays of words
//if word's length is 5 or more reverse the order of the letters

function spinWords(string) {
  const stringArr = string.split(" ");
  const charArr = stringArr.map(wordArr => wordArr.split(""));
  for(let i = 0; i < charArr.length; i++) {
    if(charArr[i].length >= 5) {
      charArr[i].reverse();
    }
  }
  return charArr.map(charArr => charArr.join("")).join(" ");
}

console.log(spinWords("Mountain"));
console.log(spinWords("Country roads take me home"));
console.log(spinWords("This is a test"));