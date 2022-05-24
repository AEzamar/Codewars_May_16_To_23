function removeNthElement(arr, n) {
    //var arrCopy = [arr] //The original copy is not spread and is using var instead of const
    const arrCopy = [...arr];
    arrCopy.splice(n, 1);
    return arrCopy;
} 