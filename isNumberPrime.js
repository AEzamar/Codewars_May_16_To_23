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
    if(num === 2) return true;
    if(num < 2 || !(num % 2)) return false;
    for(let i = 3; i <= Math.sqrt(num); i++, i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(6));
console.log(isPrime(9));
console.log(isPrime(101));
console.log(isPrime(102));
console.log(isPrime(198));
console.log(isPrime(199));

//Codewars solution:
/* function isPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return num > 1
  } */