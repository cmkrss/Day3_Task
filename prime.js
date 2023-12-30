console.log("------------------------------------------------------------------------------");
// Do the below programs in anonymous function & IIFE & Arrow function 
// Return all the prime numbers in an array

console.log("Anonymous function way");

const numbers = [1,2,3,4,5,6,11,45,6,57,7,97];

const primeNumber = function(arr){
    for(var i=1; i<numbers.length; i++){
        for(j =2; j<=numbers[i]; j++){
            if(numbers[i]%j ==0){
                break;
            }
        }   if(numbers[i]==j){
            console.log(numbers[i]);
        }
    }
}

primeNumber(numbers)

//=================================================================================
console.log("======================================================================");
console.log("IIFE Way");

(function(arr){
    for(var i=1; i<numbers.length; i++){
        for(j =2; j<=numbers[i]; j++){
            if(numbers[i]%j ==0){
                break;
            }
        }   if(numbers[i]==j){
            console.log(numbers[i]);
        }
    }
})(numbers)

//=================================================================================
console.log("======================================================================");
console.log("Arrow function Way");

const PrimeNumber = (arr) => {
    for(var i=1; i<numbers.length; i++){
        for(j =2; j<=numbers[i]; j++){
            if(numbers[i]%j ==0){
                break;
            }
        }   if(numbers[i]==j){
            console.log(numbers[i]);
        }
    }
}
PrimeNumber(numbers);