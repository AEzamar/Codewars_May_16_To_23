//PREP
//Parameters:
//The only parameter passed to this function is a number

//Return:
//The product of the sum of the numbers that are part of the number passed to the function that are divisible by
//3 or 5

//Example:
//solution(10) => 23

//Pseudo-code:
//Check if the number is bigger than 1
//Create variable to store total of sum of numbers from number named total
//Loop in reverse from number to 0
//Pass and add the numbers of number that are divisible by 3 or 5 into total
//Return total
//If number is less than zero return 0

function solution(number) {
    if(number > 1) {
        let total = 0;
        for(let i = number - 1; i > 0; i--) {
            if(i % 3 === 0 || i % 5 === 0) {
                total += i;
            }
        }
        return number < 0 ? 0 : total;
    }else {
        return 0;
    }  
}

console.log(solution(1));
console.log(solution(0));