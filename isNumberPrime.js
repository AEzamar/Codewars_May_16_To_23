//PREP
//Parameters:
//A single integer either positive or negative

//Return:
//Return true if the number is prime, return false otherwise


//Examples:
//isPrime(0) => false
//isPrime(1) => false
//isPrime(3) => true

//Pseudo-code:
//If number is less than 2 return false
//Divide the number by 2 then multiply ths
//Check if the integer passed to the function is divisible by something other that 1 and itself
//

function isPrime(num) {
    if(num < 2) return false;
    if(num !== 2 || num % 2 === 0) return false;
    for(let i = 2; i <= num - 1; i + 2) {
        if(num % i === 0) {
            return false;
        }else {
            return true;
        }
    }
    
}