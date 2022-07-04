//PREP
//Parameters:
//An array with two strings as elements

//Return:
//The function should return the string in a format were we display
//the characters of each strin in a column, so we should have two columns each one
//with every character of both strings

//Examples:
//transposeTwoStrings(['Hello','World']) =>
//H W
//e o
//l r
//l l
//o d

//Pseudo-code:
//Loop through string 0 and 1 of array
//Print each letter of each string and start a new line
//Keep printing characters until the string's length equals -1
//If one string is longer than the other replace undefined characters with whitespace

function transposeTwoStrings(array) {
    let transposeStr = "";
    if(array[0].length > array[1].length) {
        for(let i = 0; i < array[0].length; i++) {
            transposeStr += `${array[0][i]} ${array[1][i]}\n`;
        }
    }

    if(array[1].length > array[0].length) {
        for(let i = 0; i < array[1].length; i++) {
            transposeStr += `${array[0][i]} ${array[1][i]}\n`;
        }
    }
    return transposeStr;
}

console.log(transposeTwoStrings(['Hello', 'World']));
console.log(transposeTwoStrings(['Hello', 'Bitches']))