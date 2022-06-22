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

/* function isHollow(x) {
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
} */

function isHollow1(x) {
    //let zeroCount1 = 0;
    let hollow = false;
    let notZeroStart = 0;
    let notZeroEnd = 0;
    function filterNonZero(arr) {
        let indexer = 0;
        let filteredArr = [];
        while(arr[indexer] !== 0) {
            if(arr[indexer] === 0) break;
            filteredArr.push(arr[indexer]);
            indexer++
        }
        return filteredArr;
    }
    console.log(filterNonZero(x));
    const noZeroArr = x.filter(filterNonZero);
    console.log('No zero arr', noZeroArr);
    console.log('Arr:', x);
    console.log('Arr[0]:', x[0], 'Arr[-1]:', x[x.length - 1]);4
    console.log(x[x.length - 2]);
    for(let i = 0; i < x.length; i++) {
        if(x[i] !== 0) {
            notZeroStart++;
        }
    }
    for(let j = x[x.length - 1]; j > 0; j--) {
        if(x[j] !== 0) {
            notZeroEnd++;
        }
    }
    if(notZeroStart === notZeroEnd) {
        return x.filter(ele => ele === 0).length >= 3 ? hollow = true : hollow = false;
    }
    /* if(x[0] !== 0 && x[x.length - 1] !== 0) {
        const arrStart = x.filter(ele => ele !== 0);
        console.log(arrStart);
        return x.filter(ele => ele === 0).length >= 3 ? hollow = true : hollow = false;
    }else {
            return false;
    } */
}

//console.log(isHollow1([3, 4, 3, 0, 0, 0, 0, 0, 0, 6, 1]));

function isHollow2(x) {
    const xCopy = x;
    const startArr = [];
    const endArr = [];
   /*  let it = 0;
    while(it <= x.length) {
        startArr.push(xCopy.shift());
        if(xCopy[it] === 0) {
            break;
        }
        it++;        
    } */

    for(let i = 0; i <= x.length; i++) {
        if(xCopy[i] !== 0) {
            startArr.push(xCopy.shift());
            endArr.push(xCopy.pop());
            console.log(startArr);
        }/* else if(xCopy[i] === 0) {
            break;
        }   */  
    }

     //console.log('Splice start:', spliceStart); 

    /* if(xCopy[xCopy.length - 1] !== 0) {
        for(let j = xCopy.length - 1; j > 0; j--) {
            endArr.push(xCopy.pop());
        }
    } */
        /* if(xCopy[i] !== 0) {
            startArr.push(xCopy.shift());
        }else if(xCopy[xCopy.length - 1] !== 0) {
            endArr.push(xCopy.pop());
        } */
    //}
    console.log('Start arr:', startArr);
    console.log('End arr:', endArr);
    console.log('Arr Copy:', xCopy);
    if(startArr.length === endArr.length && xCopy.length >= 3) {
        return true;
    }else {
        return false;
    }
}

//console.log(isHollow2([1, 2, 1, 1, 0, 0, 4, 6, 1]));


function isHollow3(x) {
    const xCopy = x;
    const startArr = [];
    const endArr = [];
    for(let i = 0; i < xCopy.length; i++) {
        if(xCopy[i] !== 0) {
            startArr.push(xCopy.shift());
            if(xCopy[i] === 0) {
                break;
            }
        }
    }
    for(let j = 0; j < xCopy.reverse().length; j++) {
        xCopy.reverse();
        if(xCopy[j] !== 0) {
            endArr.push(xCopy.shift());
            if(xCopy[j] === 0) {
                break;
            }
        }
    }
    console.log('Start Arr:', startArr);
    console.log('End Arr:', endArr);
    console.log('Arr Copy:', xCopy);
    if(startArr.length === endArr.length && xCopy.length >= 3) {
        return true;
    }else {
        return false;   
    }
}

console.log(isHollow3([1, 2, 1, 1, 1, 0, 0, 4, 6, 1, 3]));
console.log(isHollow3([-1,0,0,0,3]));
