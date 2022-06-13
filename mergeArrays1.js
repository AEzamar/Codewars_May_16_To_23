//PREP


function mergeArrays(a, b) {
        const mergedArr = [];
        if(a.length > b.length) {
            for(let i = 0; i < a.length; i++) {
                mergedArr.push(a[i]);
                if(b[i] !== undefined) {
                    mergedArr.push(b[i]);
                }
            }
        }
        if(b.length > a.length) {
            for(let i = 0; i < b.length; i++) {
                if(a[i] !== undefined) {
                    mergedArr.push(a[i]);
                }
                mergedArr.push(b[i]);
            }
        }
        if(a.length === b.length) {
            for(let i = 0; i < a.length; i++) {
                mergedArr.push(a[i], b[i]);
            }
        }
        return mergedArr;
}

console.log(mergeArrays(['a', 'b', 'c', 'd', 'e', 'f'], [1, 2, 3, 4]));
console.log(mergeArrays([1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']));
console.log(mergeArrays(['a', 'b', 'c', 'd'], [1, 2, 3, 4, 5, 6, 7, 8]));
console.log(mergeArrays([ 31, 6, 76, 60 ] [ 'q', 'q', 'x', 'h', 'x', 'i' ]));

//Codewars examples
/* function mergeArrays(a, b) {
    let j = [],
        longest = a.length > b.length ? a:b;
    for (var i=0; i<longest.length; i++){
      if (a[i]) j.push(a[i])
      if (b[i]) j.push(b[i])
    }
    return j
  } */