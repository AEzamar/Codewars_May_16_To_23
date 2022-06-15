function reverseWords(str) {
    const reversedStrArr = [];
    const rightOrderStr = [];
    for(let i = 0; i < str.length; i++) {
      reversedStrArr.unshift(str[i]);
    }
    const reversedArr = reversedStrArr.join("").split(" ");
    for(let j = 0; j < reversedArr.length; j++) {
      rightOrderStr.unshift(reversedArr[j]);
    }
    return rightOrderStr.join(" ");
  }