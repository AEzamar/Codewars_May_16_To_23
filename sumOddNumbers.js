//PREP
//Parameters:
//A single integer
//In this challenge we have to assume we're looking at a piramid and each number represents a row of ascending odd numbers

//Return:
//The sum of the numbers in the row of the pyramid represented by the single integer passed as a parameter, this is obtained by exponentiating the number an n number
//of times, n being the single integer passed to the function

//Example:
//rowSumOddNumbers(1) => 1
//rowSumOddNumbers(2) => 8
//rowSumOddNumbers(3) => 27

//Pseudo-code:
//Create variable to store product of sum named total
//Loop an n number of times
//multiply n an n number of times inside the loop
//Add the result of each opearation to total
//Return total

function rowSumOddNumbers(n) {
    let total = 0;
    for(let i = 0; i < n; i++) {
        total += n * n;
    }
    return total;
}

console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers(2));
console.log(rowSumOddNumbers(3));
console.log(rowSumOddNumbers(3));