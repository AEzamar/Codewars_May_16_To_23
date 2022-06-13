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

//console.log(createNDimensionalArray(3, 2));
//sconsole.log(createNDimensionalArray(2, 2))

function createNDimensionalArray1(n, size) {
    let iterator = 0;
    let outerArr = [[]];
    while(iterator < n) {
        if(n <= 2) {
            outerArr[0].push(`level ${String(n)}`);
        }else {
            outerArr[0].push([`level ${String(n)}`]);
        }
    iterator++;
    }
    return outerArr;
}
//console.log(createNDimensionalArray1(2, 2));
//console.log(createNDimensionalArray1(3))
function nestedArrays(n) {
    let startArr = ["a"];
    const staticIndex = 0;
    let newArr;
    for(let i = 0; i < n; i++) {
        //newArr = Array.from({ length: 1 }, (_, i) => i = []);
        let indexStr = `${startArr}`;
        indexStr += `${[]}`;
        console.log(indexStr);
        //newArr = Array({ length: 1 }).fill([]);
    }
    return newArr;
} 
//console.log(nestedArrays(3));

function createNDimensionalArray2(n, size) {
    let outerArr;
    for(let i = 0; i < n; i++) {
        if(n <= 1) {
            outerArr = [];
            for(let j = 0; j < size; j++) {
                outerArr.push(`level ${String(n)}`);
            }
        }else if(n <= 2) {
            outerArr = [[]];
            for(let j = 0; j < size;  j++) {
                const innerArr = Array.from( {length: size}, (_, i) => i = `level ${String(n)}`)
                outerArr[0].push(innerArr);
            }
        }else {
            outerArr = [[]];
            for(let j = 0; j < size; j++) {
                const innerArr = Array.from({ length: size }, (_, i) => i = `level ${String(n)}`);
                outerArr[0].push(innerArr);
            }
            
        }
    }
    return outerArr;
}
/* console.log(createNDimensionalArray2(1, 3));
console.log(createNDimensionalArray2(2, 2));
console.log(createNDimensionalArray2(3, 3));
console.log(createNDimensionalArray2(4, 3)); */

function arrays(n, size) {
    const newArr = Array(size).fill(`level ${n}`);
    
    
}

console.log(arrays(3, 2));