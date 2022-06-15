//PREP
//Parameters:
//A string separated by spaces

//Return:
//A string with the same words in the same order as the original but with the characters in each word reversed

//Example:
//reverseWords('This is a test') => 'siht si a tset'
//reverseWords('Reverse this!') => 'esreveR siht'

//Pseudo-code:
//Create an array to put reversed words in reversed order
//Create an array to put the reversed in the right order
//Loop through the string
//Take each character of the string and put them at the start of the array
//Join the array of reversed strings to convert it to a string again and split to make it an array again
//Looop through the array of reversed strings and put each word at the start of the second array to get the
//reversed words in the correct order they appear in, in the original array
//Join this second array to convert it to a string again
//Return string with reversed characters

function reverseWords(str) {
    const reversedStrArr = [];
    const rightOrderStr = [];
    for(let i = 0; i < str.length; i++) {
      reversedStrArr.unshift(str[i]);
    }
    const reversedArr = reversedStrArr.join("").split(" ");
    for(let j = 0; j < reversedArr.length; j++) {
      rightOrderStr.unshift(reversedArr[j]);
    }
    return rightOrderStr.join(" ");
  }

//Codewars solution:
/* function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
} */
