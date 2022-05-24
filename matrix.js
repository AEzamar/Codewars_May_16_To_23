//PREP
//Parameters:
//A two-dimensional array of positive and negative integers

//Return:
//The same two-dimensional array but with the integers in a central diagonal
//modified, if an integer in this diagonal is negative it shoulb be changed to 0, if it's already 0 or positive it should be changed to 1
//The other integers in the other parts of the two-dimensional array should remain unchanged 

//Example:
/* [
    [-1,  4, -5, -9,  3 ],
    [ 6, -4, -7,  4, -5 ],
    [ 3,  5,  0, -9, -1 ],
    [ 1,  5, -7, -8, -9 ],
    [-3,  2,  1, -5,  6 ]
  ] */
//The return should be this:
/* [
    [ 0,  4, -5, -9,  3 ],
    [ 6,  0, -7,  4, -5 ],
    [ 3,  5,  1, -9, -1 ],
    [ 1,  5, -7,  0, -9 ],
    [-3,  2,  1, -5,  1 ]
  ] */

//Pseudo-code:
//Loop through main general array in rows
//Nested loop to iterate through each integer in the two-dimensional array
//Index only 1 integer of each row in incremental order, thus creating a diagonal
//row 1 integer[0]
//row 2 integer[1]
//row 3 integer[2]...
//If a given integer is negative, splice it and replace it with 0
//else if a given integer is 0 or positive splice it and replace it with 1
//Return two-dimensional array with modified diagonal row of integers

function matrix(array) {
    const arrCopy = [...array];
    let indexer = 0;
    for(let i = 0; i < arrCopy.length; i++) {
        for(let j = 0; j < arrCopy[i].length; j++){
            console.log(arrCopy[i][j][indexer])
            indexer++;
        }
    }
}

console.log(matrix([
    [-1,  4, -5, -9,  3 ],
    [ 6, -4, -7,  4, -5 ],
    [ 3,  5,  0, -9, -1 ],
    [ 1,  5, -7, -8, -9 ],
    [-3,  2,  1, -5,  6 ]
  ]));
