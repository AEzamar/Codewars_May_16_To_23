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

function zeroPlentiful(arr) {
    let sequenceCounter = 0;
    let zeroCounter = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] && arr[i + 1] === 0) {
            zeroCounter++;
        }
    }
    if(zeroCounter >= 4) {
        sequenceCounter++;
    }
    return sequenceCounter;
}