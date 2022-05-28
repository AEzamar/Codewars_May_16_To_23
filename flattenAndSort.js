//PREP
function flattenAndSort(array) {
    const flatArr = [];
    for(let i = 0; i < array.length; i++) {
        flatArr.push(...array[i]);
    }
    return flatArr.sort((a, b) => a - b);
}

console.log(flattenArr([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));

//Codewars solutions:
//What the f#!$ dude!
/* function flattenAndSort(array) {
    return [].concat(...array).sort((a,b) => a - b);
  } */

/* function flattenAndSort(array) {
    return array
        .reduce((result, current) => [...result, ...current],[])
        .sort((a, b) => a - b)
        ;
  } */