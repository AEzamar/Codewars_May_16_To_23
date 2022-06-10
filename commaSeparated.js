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



function toCsvText(array) {
    let csvStr = "";
    for(let i = 0; i < array.length; i++) {
        csvStr += array[i].join(', \n');
    }
    return csvStr;
}

console.log(toCsvText([
    [ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]]));