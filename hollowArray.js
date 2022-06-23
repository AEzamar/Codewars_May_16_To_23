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
    let leftNonZero = 0;
    let rightNonZero = 0;
    if(x.length >= 3 && x.every(num => num === 0)) return true;
    for(let i = 0; i < x.length; i++) {
        if(x[i] !== 0) leftNonZero++
        else break;
    }
    
    for(let j = x.length - 1; j > 0; j--) {
        if(x[j] !== 0) rightNonZero++;
        else break;
    }

    if(leftNonZero === rightNonZero) {
        return x.slice(x[leftNonZero], x.length - leftNonZero).every(num => num === 0) ? true : false;
    }else {
        return false;
    }
}

/* console.log(isHollow([1, 2, 3, 0, 0, 1, 0, 0, 1, 2, 3]));
console.log(isHollow([0, 0, 0, 0]));
console.log(isHollow([0, 1, 2, 0, 0, 1, 0, 1]));
console.log(isHollow([1, 2, 3, 0, 1, 1, 0, 1, 2, 3])); */


//This kind of works but it fails 1 test

function isHollow1(x){
    console.log('Array', x);
    //if(x.every(num => num === 0) && x.length >= 3) return true;
    if(x.filter(num => num !== 0).length % 2 === 0) {
      return x.filter(num => num === 0).length >= 3 ? true : false;
    }else {
      return false;
    }
  }

//console.log(isHollow1([0, 1, 0, 0, 0, 1, 0]));

  function isHollow2(x) {
    let leftNonZero = 0;
    let rightNonZero = 0;
    for(let i = 0; i < x.length; i++) {
        /* if(x[i] !== 0) leftNonZero++;
        else break; */  
        x.slice(x[0], x[i] !== 0)
    }
    
    x.reverse();

    for(let j = 0; j < x.lenth; j++) {
        if(x[i] !== 0) rightNonZero++;
        else break;
    }
    
    const middleSlice = x.slice(x[leftNonZero], x[x.length - rightNonZero]).every(num => num === 0);
    if(leftNonZero === rightNonZero && middleSlice.length >= 3) return true;
    else return false;
  }

  console.log(isHollow2([1, 1, 0, 0, 0, 1, 1]));
