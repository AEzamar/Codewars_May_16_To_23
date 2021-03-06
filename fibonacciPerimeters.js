//PREP
//Parameters:
//A single integer N that indicates the number of squares to account for when calculating their perimeters

//Return:
//The result of the operation of multiplying 4(The number of sides in a square) with the sum of the perimeters of all squares from 0 to N following the Fibonacci sequence
//N indicates how far the sequence has to go
//N = 7 (1 + 1 + 2 + 3 + + 5 + 8 + 13 + 21) This is all the numbers in the Fibonacci sequence from 0 to N(7, this means that 0 to 7 should give us the first 8 numbers in the Fibonacci sequence);

//Examples:
//perimeter(0) // 4
//perimeter(5) // 80
//perimeter(7) // 216
//perimeter(20) // 114624

//Pseudo-code:
//Loop n number of times
//Make an array with a sequence of numbers where the next number results from the sum of previous number and the current number (1 + 1 = 2 + 1 = 3 + 2 = 5)
//Reduce the array to single integer
//Multiply that single integer by 4
//Return the result of the multiplication

function perimeters(n) {
    const fiboArr = [];
    //let prev = 0, curr = 1, next = prev + curr;
    for(let i = 0; i <= n; i++) {  //i += i++
        //let curr = i+1, next = i + curr;
        //console.log(i, curr, next);
        //let prev = i, curr = i + 1; next = prev + curr;
        let newN = i + i + 1;
        //let  curr = i, next = curr + 1, prev = i - 1;
        //curr = next, next = c + c
        //console.log('curr:', curr, 'next:', next);
        //fiboArr.push(curr, next);
        //curr = next
        //next = curr + prev;
        //console.log('curr:', curr, 'next:', next);
        fiboArr.push(newN);
        //curr = next
        //next = curr + curr;
        //fiboArr.push(i, curr, next);
    }
    return fiboArr;
}

console.log(perimeters(5));