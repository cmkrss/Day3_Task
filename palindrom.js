// Do the below programs in anonymous function & IIFE & Arrow function
// Return all the palindromes in an array
console.log("----------------------------------------------------------------------------------------------");
//Anonymous function way
console.log("Anonymous function: ");
const array = ["mani", "MadAm", "Teacher"];

const findPalindromes = function(arr) {
    let palindromes = [];

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].toLowerCase(); // Convert to lowercase for case-insensitive comparison
        let reversed = "";

        for (let j = word.length - 1; j >= 0; j--) {
            reversed += word[j];
        }

        if (word === reversed) {
            palindromes.push(word);
        }
    }

    console.log( "Anonymous function way palindrome result is: ",palindromes);
};

findPalindromes(array);

//================================================================================================================================
console.log("=======================================================================");
console.log("IIFE Way");

(function(arr){
    let palindromes2 = [];
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].toLowerCase(); // Convert to lowercase for case-insensitive comparison
        let reversed = "";

        for (let j = word.length - 1; j >= 0; j--) {
            reversed += word[j];
        }

        if (word === reversed) {
            palindromes2.push(word);
        }
    }
    console.log( "IIFE Function way palindrome result is: ",palindromes2);
})(array)

//=============================================================================================================================================================
console.log("=======================================================================");
console.log("Arrow Way");

const palindrome = (arr) => {
    let palindromes3 = [];

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].toLowerCase(); // Convert to lowercase for case-insensitive comparison
        let reversed = "";

        for (let j = word.length - 1; j >= 0; j--) {
            reversed += word[j];
        }

        if (word === reversed) {
            palindromes3.push(word);
        }
    }

    console.log( "Arrow Function Way palindrome result is: ",palindromes3);
}
palindrome(array);