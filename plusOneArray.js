//PREP
//Parameters:
//Array has to have integers
//The integers in the array can only be positive and single digit

//Return:
//Invalid inputs should return null
//The function should return an array with the number the array represents + 1

//Examples:
//[3, 4, 5] should be taken as 345 so the function should return 345 + 1 = [3, 4, 6]
//[4, 3, 2, 5] 4325 + 1 = [4, 3, 2, 6];

//Pseudo-Code:
//Iterate over array
//Check if array.length > 0, check that array has no negative integers, check that integers are single digit(0 - 9);
//If array passes all the conditions reduce arrays integers to a single number
//Add 1 to the single number
//Split single integer into array of integers
//Return new array of integers

function upArray(arr) {
    if(arr.length > 0 && arr.every(int => int >= 0 && int <= 9)) {
        const singleIntStr = arr.join("");
        const singleInt = BigInt(singleIntStr) + BigInt(1);
        return String(singleInt).split("");
    }else {
        return null;
    }
}

console.log(upArray([2, 3, 9]));
console.log(upArray([4, 3, 2, 5]));
console.log(upArray([]));
console.log(upArray([9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7]));


/* function upArray1(arr) {
    if(arr.length > 0 && arr.every(int => int >= 0 && int <= 9)) {
        const singleIntStr = arr.join("");  
        return Array.from(singleIntStr, strInt => Number(strInt));
    }else {
        return null;
    }
}
console.log(upArray1([2, 3, 9])); */