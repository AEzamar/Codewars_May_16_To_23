//PREP
//Parameters:
//An array of integers that may or may not contain a sequence of zeros

//Return:
//An integer representing how many sequences of at least 4 zeros were encountered in the array
//If there are no zero sequences that fulfill this condition the function should return 0

//Examples:
//zeroPlentiful([3]) => 0
//zeroPlentiful([0,0,0,0,0,0]) => This is a sequence of 6 zeros so it fulfills the condition and returns 1

//Pseudo-code:
//Create variable that keeps track of how many sequences of zeros are in the array named sequenceCount
//Create variable that counts zeros called zeroCount
//Loop through array
//Add 1 to zeroCount if a zero followed by a zero is encountered
//if zeroCount is bigger or equal to 4 add 1 to sequenceCount
//Iterate through the whole array and repeat the previous steps until end of array
//If a sequence of zeros that fulfills the conditions is not found sequenceCount is equal 0
//Return sequenceCount

/* if(arr[i] === 0) {
  zeroCount++;
  if(zeroCount >= 4) {
    sequenceCount++
  }else if(zeroCount)
} */

function zeroPlentiful(arr) {
  let zeroCount = 0;
  let sequenceCount = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
      zeroCount++;
    }else {
      zeroCount = 0;
    }
  }
  if(zeroCount < 4) sequenceCount;
}

function zeroPlentiful1(arr) {
  let zeroArr = [], sequenceCount = 0;
  if(arr.every(int => int === 0)) return sequenceCount = 1;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
      zeroArr.push(arr[i]);
      if(zeroArr.length < 4) return sequenceCount = 0;
      //console.log(zeroArr);
      if(zeroArr.length < 4  && arr[i] !== 0) {
        zeroArr = [];
      }else if (zeroArr.length < 4) {
        sequenceCount = 0;
      }else if(zeroArr.length > 4 && arr[i] === 0) {
        sequenceCount ++;
        zeroArr = [];
      }
    }
  }  
  console.log(zeroArr);
  return sequenceCount;
}

//console.log(zeroPlentiful1([3, 6, 0, 0, 0, 0, 9, 9]));
//console.log(zeroPlentiful1([0, 0, 0, 0, 4, 1, 2, 0, 0, 0, 0, 3, 1, 2, 0, 0, 0, 0, 0]));
//console.log(zeroPlentiful1([0, 0, 0, 0, 0]));

function zeroPlentiful2(arr) {
  let zeroArr = [], sequenceCount = 0;
  if(arr.every(int => int === 0)) return sequenceCount = 1;
  if(!arr.includes(0)) return sequenceCount = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
      zeroArr.push(arr[i]);
      if(zeroArr.length < 4) {
        //zeroArr = [];
        return sequenceCount = 0;
      }
      if(zeroArr.length > 4) sequenceCount++; 
    }
  }    
  return sequenceCount;
}

/* console.log(zeroPlentiful2([0, 0, 0, 0, 4, 1, 2, 0, 0, 0, 0, 3, 1, 2, 0, 0, 0, 0, 0]));
console.log(zeroPlentiful2([0, 0, 0, 0, 0])); */

function zeroPlentiful3(arr) {
  let zeroCount = 0, sequenceCount = 0;
  if(arr.every(int => int === 0)) return sequenceCount = 1;
  if(!arr.includes(0)) return sequenceCount;
  for(let i = 0; i <= arr.length; i++) {
    if(arr[i] === 0) {
      zeroCount++;
      if(zeroCount < 3 && arr[i] !== 0) {
        zeroCount = 0;
        return sequenceCount = 0;
      }
      if(zeroCount >= 4) {
        console.log('Zero count 1:', zeroCount);
        zeroCount = 0;
        console.log('ZeroCount 2:', zeroCount);
        sequenceCount ++;
      }
    }
  }  
  return sequenceCount; 
}

console.log(zeroPlentiful3([0, 0, 0, 4, 1, 2, 0, 0, 0, 0, 3, 1, 2, 0, 0, 0, 0, 0]));
console.log(zeroPlentiful3([0, 0, 0, 0, 0]));
console.log(zeroPlentiful3([0, 0, 0, 0, 1, 0, 0, 0, 0, 0]));