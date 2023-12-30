console.log("----------------------------------------------------------------------------------------------------------");
// Do the below programs in anonymous function & IIFE & Arrow 
// Convert all the strings to title caps in a string array

const stringArray = ["hello", "world", "example", "string", "array"];   //Declared commonly at top of the code
console.log("Anonymous Function");

const convertToTitleCaps = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let titleCaseWord = "";                             // Initialize the variable for the title case word

        for (let j = 0; j < word.length; j++) {
            if (j === 0 || word[j - 1] === ' ') {
                titleCaseWord += word[j].toUpperCase();     // Capitalize if it's the first letter of a word
            } else {
                titleCaseWord += word[j].toLowerCase();     // Lowercase for other letters in the word
            }
        }

        arr[i] = titleCaseWord;                            // Replace the word in the array with the title-cased word
    }
};

convertToTitleCaps(stringArray);
console.log("Title Caps Array:", stringArray);


//=========================================================================================================================
console.log("=============================================================================================================");
console.log("IIFE way");

(function(arr) {
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let titleCaseWord = "";

        for (let j = 0; j < word.length; j++) {
            if (j === 0 || word[j - 1] === ' ') {
                titleCaseWord += word[j].toUpperCase();
            } else {
                titleCaseWord += word[j].toLowerCase();
            }
        }

        arr[i] = titleCaseWord;
    }
})(stringArray);

console.log("IIFE Way Title Caps: ", stringArray);

//=========================================================================================================================
console.log("=============================================================================================================");
console.log("Arrow way");

const convertToTitleCap = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let titleCaseWord = "";                             // Initialize the variable for the title case word

        for (let j = 0; j < word.length; j++) {
            if (j === 0 || word[j - 1] === ' ') {
                titleCaseWord += word[j].toUpperCase();     // Capitalize if it's the first letter of a word
            } else {
                titleCaseWord += word[j].toLowerCase();     // Lowercase for other letters in the word
            }
        }

        arr[i] = titleCaseWord;                            // Replace the word in the array with the title-cased word
    }
};

convertToTitleCap(stringArray);
console.log("Arrow function Title Caps:", stringArray);

