//PREP
//Parameters:
//An array of integers

//Return:
//The function should return a copy of the array without it's last element

//Examples:
//withoutLast([1, 2, 3, 4, 5]) => [1, 2, 3, 4];
//withoutLast([6, 7, 8, 9]) => [6, 7, 8];

//Pseudo-code:
//Verify why the function is not passing the random tests
//Use other methods to eliminate the last element, such as splice or slice

function withoutLast(arr) {
    arr.pop(); // removes the last element
    return arr;
}