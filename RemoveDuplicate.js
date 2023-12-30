//Remove duplicates from an array using anonymous and IIFE function
console.log("Anonymous function way :");


//Anonymous function 
let array = [1, 2, 3, 2, 2, 3, 4, 5];                       //A new array with duplicate value commonly at the top of the code
let uniqueArray = [];                                       // Duplicate empty array declared seperatly at top of code.

const removeDuplicate = function(arr) {                     // Function declared with parameter
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;                            // Flag to track duplicates
        for (let j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) {                //Comparing here both index values is same or not,if yes break.
                isDuplicate = true;
                break;                                      // Break if duplicate found
            }
        }
        if (!isDuplicate) {
            uniqueArray.push(arr[i]);                       //Pushing here unique value
        }
    }
    console.log(uniqueArray);
};

removeDuplicate(array);                                     //Function calling here with passing argument

//================================================================================================================
console.log("=====================================================================================================");
//================================================================================================================

console.log("IIFE way");
//============================================================================================================

//IIFE way
let uniqueArray2 = [];

(function(arr) {
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < uniqueArray2.length; j++) {
            if (arr[i] === uniqueArray2[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueArray2.push(arr[i]);
        }
    }
    console.log(uniqueArray2);
})(array);

