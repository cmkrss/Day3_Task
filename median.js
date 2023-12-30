//Return median of two sorted arrays of the same size using anonymous function and IIFE function.

//Anonymous function

const array1 = [1, 3, 5];
const array2 = [2, 4, 6];

console.log("Anonymous function way")

const findMedian = function(arr1, arr2) {
    const merged = arr1.concat(arr2).sort((a, b) => a - b);
    const length = merged.length;
    const mid = Math.floor(length / 2);
  
    if (length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
};

console.log(findMedian(array1, array2));

//===================================================================================
console.log("===================================================================================");
console.log("IIFE way:");

const median = (function(arr1, arr2) {
    const merged = arr1.concat(arr2).sort((a, b) => a - b);
    const length = merged.length;
    const mid = Math.floor(length / 2);
  
    if (length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
})(array1, array2);

console.log(median);