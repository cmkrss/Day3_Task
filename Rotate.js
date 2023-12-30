//Rotate an array by k times   (Using Anonymous and IIFE Functions)

//==========================
//Anonymous Functoin:
console.log("Anonymous function way");
const myArray = [1, 2, 3, 4, 5];
const rotations = 2;

// const arrayRotation = (function() {
//     return function(arr, k) {
//         const len = arr.length;
//         k %= len; // Handle cases where k is greater than array length
//         for (let i = 0; i < k; i++) {
//             const temp = arr.pop(); // Remove last element
//             arr.unshift(temp); // Add it to the beginning
//         }
//         return arr;
//     };
// })();

// const rotatedArray1 = arrayRotation(myArray, rotations);
// console.log(rotatedArray1); // Output: [4, 5, 1, 2, 3]

//===================================
//IIFE way:

console.log("IIFE way:");
const rotatedArray = (function(arr, k) {
    const len = arr.length;
    k %= len; // Handle cases where k is greater than array length
    for (let i = 0; i < k; i++) {
        const temp = arr.pop(); // Remove last element
        arr.unshift(temp); // Add it to the beginning
    }
    return arr;
})(myArray, rotations);

console.log(rotatedArray);