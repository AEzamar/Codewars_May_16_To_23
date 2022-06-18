//PREP
//Parameters:
//A single integer of at least 1 number and made of several numbers

//Return:
//The function should return the biggest possible number to be made from the individual numbers contained in the larger number

//Example:
//descendingOrder(15) => 51
//descendingOrder(1021) => 2110
//descendingOrder(123456789) => 987654321

//Pseudo-code:
//Turn single integer into a string
//Split string of integers into an array of individual numbers
//Convert each element of the array back into a number
//Sort array of integers in descending order
//Convert array of integers into a single string representing the final number
//Convert single array string to a number and return it

function descendingOrder(n) {
    const argsStrArr = String(...n).split("");
    const splitNumsArr = argsStrArr.map(str => Number(str));
    const fullNumStr = splitNumsArr.sort((a, b) => b - a).join("");
    return Number(fullNumStr);
}

function descendingOrder(n) {
    const argsStr = String(...n).split("").map(str => Number(str)).sort((a, b) => b - a).join("");
    return Number(argsStr);
}