"use strict";

function toWeirdCase(string) {
    let weirdString = "";
    const lowStringArr = string.toLowerCase().split(" ");
    const testString = lowStringArr.map((str, idx) => {
      for(let i = 1, j = 0; i <= str.length; i++, j = j+2) {
        str[j].toUpperCase() + str[i];
      }
    })
    console.log(testString);
  /*   for(let i = 0; i < lowStringArr.length; i++) {
      for(let j = 0, k = 1; j < lowStringArr[i].length; j+=2, k+=2) {
        weirdStringArr.push(lowStringArr[i][j].toUpperCase() + lowStringArr[i].slice(k, k + 1));
      }
    }  */      
    return weirdString;
  }

console.log(toWeirdCase("Hello world"));
//console.log(toWeirdCase("ThIs iS A TeSt")); 

function toWeirdCase1(string) {
    let weirdString = "";
    const stringArr = string.split(" ").map((word, index) => {
     for(let i = 0; i < word.length; i+=2) {
      word[i].toUpperCase();
     }
    });
    return stringArr;
  }

/* console.log(toWeirdCase1("Hello world!"));
 */
function toWeirdCase2(string) {
  let weirdString = "";
  const stringArr = string.toLowerCase().split(" ");
}

//console.log(toWeirdCase2("Hello world!"));

function toWeirdCase3(string) {
  const stringArr = string.toLowerCase().split(" ");
  let testString = "";
  const testArr = stringArr.map((word, index) => {
    for(let char of word) {
      testString += char[index + 2].toUpperCase();
    }
  });
  //return testArr;
  return testString;
}
//console.log(toWeirdCase3("Hello world"));

////////////////////////////////////////////////
//This kata was forfeited
////////////////////////////////////////////////

//Codewars solution
/* function toWeirdCase(string){
  return string.split(' ').map(function(word){
    return word.split('').map(function(letter, index){
      return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
    }).join('');
  }).join(' ');
} */