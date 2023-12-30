console.log("------------------------------------------------------------------------------");

// Do the below programs in anonymous function & IIFE & Arrow function 
// Sum of all numbers in an array 


console.log("1. Anonymous function :");
let array = [1,2,3,4,7];                    //Array declared commonly at top of the code


const SumArray = function(arr) {            //Anonymous function declared with parameter passing
    let sum = 0;                            // A variable declare with start count of 0 for store the sum of array
    for(let i =0; i<arr.length; i++){       //For loop initiated fot iterate the entire loop
        sum = sum + arr[i];                 // Wile iterating every index value get keeps counts and store it into newly created Sum variable
    }
    console.log("Anonymous Function Sum is : ",sum);    // display the final total counted value.
}

SumArray(array)                         // function calling with argument

//=======================================================================================
console.log("============================================================================");
console.log("IIFE Way");

(function(arr){                                 //IIFE Function declared with parameter passing
    let sum1 = 0;
    for(let i =0; i<arr.length; i++){
        sum1 = sum1 + arr[i];
    }
    console.log("Immediate Invoked Function Expression sum is: ",sum1);
})(array)                                       //passing argument

//===========================================================================================
console.log("===============================================================================");
console.log("Arrow Function way");

const SumArray1 = (arr) => {                    //Arrow function declaration with passing parameter
    let sum2 = 0;
    for(let i =0; i<arr.length; i++){
        sum2 = sum2 + arr[i];
    }
    console.log("Arrow function sum is: ",sum2);
}
SumArray1(array);                               //Function calling with arguments of array