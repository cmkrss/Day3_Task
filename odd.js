// Do the below programs in anonymous function & IIFE & arrow function
// Print odd numbers in an array

let a = [1,2,3,5,6,11,13,18];

const PrintOdd = function(arr) {
    for(let i=0; i<a.length; i++){
        if(arr[i]%2 != 0){
            console.log(arr[i]);
        }else {
            continue;
        }
    } 
}

PrintOdd(a);

//========================================================
console.log("================================================================================================");
//IIFE Way
console.log("IIFE Way");

(function(arr){
    for(let i=0; i<a.length; i++){
        if(arr[i]%2 != 0){
            console.log(arr[i]);
        }else {
            continue;
        }
    } 
})(a)

//========================================================
console.log("================================================================================================");
//IIFE Way
console.log("Arrow function Way");

const PrintOddNum = (arr) => {
    for(let i=0; i<a.length; i++){
        if(arr[i]%2 != 0){
            console.log(arr[i]);
        }else {
            continue;
        }
    }
}

PrintOddNum(a);