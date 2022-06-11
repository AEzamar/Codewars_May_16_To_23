//PREP
//Parameters:
//A two dimensional array of at least length >= 2

//Return:
//A string with the values from each subarray separated by strings
//and arranged in rows like displayed in the 2d array

//Examples:
/* [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]]  */
   
    /* '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34' */

//Pseudo-code:
//Initialize variable to store new string name csvStr
//Loop over array
//Asign the value of a an empty string to csvStr at the start of every iteration to clear the string and avoid duplication
//Join each of the 2d array rows with a line break
//Pass each row of the 2d array into the empty string csvStr
//Return empty string

function toCsvText(array) {
    let csvStr;
    for(let i = 0; i < array.length; i++) {
        csvStr = "";
        csvStr += array.join('\n');
    }
    return csvStr;
}

console.log(toCsvText([
    [0, 1, 2, 3, 4],
    [10,11,12,13,14],
    [20,21,22,23,24],
    [30,31,32,33,34]]));

//Codewars solution:
//You have to be shitting me!
/* function toCsvText(array) {
    return array.join('\n');
 } */