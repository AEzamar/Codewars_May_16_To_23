//PREP
//Parameters:
//An array of positive and negative integers

//Return:
//A boolean indicating if the array is hollow or not
//An array is hollow if it has 3 or more zero's in the middle of the array
//the zeros can only be in the middle and the start and the end of the array has
//to be comprised of integers other than zero
//If the array fills this requisites then is hollow and the function should return true
//Otherwise it should return false

//Example:
//isHollow([-1, 0, 0, 0, 3]) => true => this array is hollow because it has 3 zeros and the array starts and ends with an integer that's not 0
//isHollow([1, 0, 0, 0, 0]) => false => the sequence of zeros if not followed by a non-zero value
//isHollow(100,0,0,3]) => false => the sequence needs at least another 0 to be hollow

//Pseudo-code:
//Loop through array
//Check if the start and end of the array doesn't has any zero
//if the last condition is true then check if there's at least 3 zeros in the middle part of the array
//if there's at least 3 zeros followed by a number that is not 0 return true
//else return false

function isHollow(x) {
    let zeroCount = 0;
    let hollow = false;
    const zeroRegex = /^[^0]\d*0+|0+[^0]\d*$/g;
    const zeroRegex1 = /(?!0)/g;
    console.log(String(x));
    console.log(String(x).match(zeroRegex));
    //console.log(String(x).match(zeroRegex1));
    for(let i = 0; i < x.length; i++) {
        if(x[i] === 0) {
            zeroCount++;
        }  
        if(zeroCount >= 3) {
            return hollow = true;
        }else {
            // return hollow = false;
        }
    }
  return 
}