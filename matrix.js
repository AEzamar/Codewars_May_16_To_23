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
    const diagonalIndex = array[i][indexer];
    if(diagonalIndex < 0) {
      arrCopy[i].splice(arrCopy[i].indexOf(diagonalIndex), 1, 0);
    }else if(diagonalIndex >= 0) {
      arrCopy[i].splice(arrCopy[i].indexOf(diagonalIndex), 1, 1);
    }
    indexer++
  }
  return array.length === 0 ? [] : arrCopy;
}

console.log(matrix([
    [-1,  4, -5, -9,  3 ],
    [ 6, -4, -7,  4, -5 ],
    [ 3,  5,  0, -9, -1 ],
    [ 1,  5, -7, -8, -9 ],
    [-3,  2,  1, -5,  6 ]
  ]));

  console.log(matrix([
    [ 1, -89, 4, 34, -42, -18, -56, 54, -0, 88 ],
    [ -63, 0, 70, 26, -76, -99, 57, 51, -4, 86 ],
    [ -75, 6, 1, 3, 85, -33, -40, 47, 90, -56 ],
    [ 88, 74, 81, 0, -51, 90, -69, -55, -78, 65 ],
    [ 1, -35, -49, 77, 1, 26, 65, -27, -16, 7 ],
    [ 69, 28, -58, 33, 28, 0, -47, -49, -45, -61 ],
    [ -5, 88, -51, -79, -28, 14, 1, 31, -86, 41 ],
    [ 71, -24, 68, -90, 23, 1, -25, 39, -97, -76 ],
    [ 93, 79, 7, -41, 48, 38, 37, 67, 0, -51 ],
    [ -35, -99, -45, 1, -61, -88, 86, 56, -2, 1 ]]));
