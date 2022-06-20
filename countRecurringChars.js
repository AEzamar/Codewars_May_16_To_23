//PREP
//A string that may or may not contain recurring characters

//Return:
//An object with the recurring characters as keys and the amount of times
//the characters appears in the string as the values
//If the string that gets passed in the function is empty, return an empty object

//Example:
//count('aba') => { a: 1, b: 2}

//Pseudo-code:
//Make two variables one for keeping track of how many a's and b's are in the string, called aCount and bCount respectively
//Loop through string
//If a character in the string equals to a add 1 to aCount
//if a character in the string equals to b add 1 tp bCount
//Create object with keys a and b and the value of a key should be aCount, the value of b key should be bCount
//Return object with keys a and b with values of aCount and bCount

function count(string) {
    let aCount = 0, bCount = 0;
    let charObj = {
        a: 0,
        b: 0
    }
    for(let i = 0; i < string.length; i++) {
        if(string[i] === 'a') {
            aCount++;
            charObj[a] = aCount;
        }
        if(string[i] === 'b') {
            bCount++;
            charObj[b] = bCount;
        }
    }
    return charObj;
}

console.log(count('abba'));