//PREP
//Parameters:
//A parameter indicating how deep the nesting of the arrays should go
//The second parameter indicates how many elements each nested array should have
//and how many nested arrays should be created inside of the outer array

//Return:
//A nested array of parameter1 depth, with a number of parameter2 arrays populated with parameter2 number of elements
//Each element inside of the deepest level of the nested array should contain a string saying level and the level of nesting that particular array is
//These strings should be present a parameter2 number of times inside the nested array

//Examples:
//createNDimensionalArray(2,3) => 
/* [
  ['level 2', 'level 2', 'level 2'],
  ['level 2', 'level 2', 'level 2'],
  ['level 2', 'level 2', 'level 2'],
] */ 
//In this array the depth of the nesting is of 2 as indicated by the first parameter
//The second parameter indicates that 3 nested arrays with 3 elements containing a string with depth of the nesting of this array indicated by the word level 2 for 2 levels of nesting

//createNDimensionalArray(3,2) =>
/* [
    [
      ['level 3', 'level 3'],
      ['level 3', 'level 3'],
    ], 
    [
      ['level 3', 'level 3'],
      ['level 3', 'level 3'],
    ],
  ] */
//The first parameter indicates a level 3 nesting with level 1 being the outer array, level 2 being inner arrays and level 3 being the deepest nested arrays containing
//the strings that indicate the level of the nesting of these inner arrays

//Pseudo-code:
//Start loop and dynamically create an array with arrays nested by parameter1 depth
//Access parameter1 depth of nested arrays
//Populate deepest level of nesting for parameter2 number of elements equivalent to strings containing the word level and the depth of nesting indicated by parameter1
//Return array of nested arrays

function createNDimensionalArray(n, size) {
    let outerArr = [];
    const newArr = Array.from({ length: n }, (_, i) => {
        for(let j = 0; j < size; j++) {
            i = [].push([])
        }
    });
    console.log('New arr:', newArr);
    for(let i = 0; i < n; i++) {
        outerArr.push([]);
    }
    /* for(let ind = 0; ind < size; ind++) {
        outerArr.push([]);
    } */
    //console.log(outerArr); 

    for(let j = 0; j < outerArr.length; j++) {
        for(let k = 0; k < size; k++) {
            outerArr[j].push([`level ${String(n)}`]);
        }
        
    }
    //console.log(outerArr);
    //return newArr;
    //return outerArr;
    return outerArr;
}

console.log(createNDimensionalArray(3, 2));
//sconsole.log(createNDimensionalArray(2, 2))