//PREP
//Parameters:
//An array of positive integers

//Return: The product of multiplying each number of the array with each other

//Example:
//grow([1, 2, 3]) => 6
//grow([4, 1, 1, 1, 4]) => 16
//grow([2, 2, 2, 2, 2, 2]) => 64

//Pseudo-code:
//Recude integers in array using the multiplication operator
//Return product of all the multiplications in the reductio

function grow(x) {
    return x.reduce((total, curr) => total * curr);
}