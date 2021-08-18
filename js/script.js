/* 

CREATED BY ALEXANDER TEJEDA

*/

//Constants that will hold the data from the specific HTML element by using unique ID's
const PASSWORD_LENGTH = document.getElementById("length");
const TOGGLE_UPPERCASE = document.getElementById("uppercase");
const TOGGLE_NUMBERS = document.getElementById("numbers");
const TOGGLE_SYMBOLS = document.getElementById("symbols");
const GENERATE_PASSWORD = document.getElementById("generate");
const RESULT = document.getElementById("result");

// Constants that represent the character codes for specific instances
// i.e. Lowercase char codes, Uppercase char codes, Number char codes, and Symbol char codes that are held within an array
const UPPERCASE_CHAR_CODES = generateArray(65, 90);
const LOWERCASE_CHAR_CODES = generateArray(97, 122);
const NUMBER_CHAR_CODES = generateArray(48, 57);
const SYMBOL_CHAR_CODES = generateArray(33, 47).concat(generateArray(58, 64).concat(generateArray(91, 96).concat(generateArray(123, 126))));

// An event listener that is waiting for a click on the generate password button
// Will then get the value of the length and see which variables have been checked and generate the password accordingly
GENERATE_PASSWORD.addEventListener("click", () => {

    const length = PASSWORD_LENGTH.value;
    const hasUpper = TOGGLE_UPPERCASE.checked;
    const hasNumber = TOGGLE_NUMBERS.checked; 
    const hasSymbol = TOGGLE_SYMBOLS.checked;
    
    RESULT.innerText = generatePassword(length, hasUpper, hasNumber, hasSymbol);
});

// Will return a string that will hold the new generated password based on the criteria that the user wants in the password
// Will check if the user wants uppercase, numbers, and symbols and will populate the string to be returned to the HTML DOM
function generatePassword(length, upper, number, symbol) {

    // Initialize CHAR_CODES to hold all lower case char codes.
    let CHAR_CODES = LOWERCASE_CHAR_CODES;

    // Checks to see which criteria is needed to generate the password for the user
    // Uppercase?
    // Numbers?
    // Symbols? 
    // And concatenate the codes together into an array
    if (upper) {
        CHAR_CODES = CHAR_CODES.concat(UPPERCASE_CHAR_CODES);
    }

    if (number) {
        CHAR_CODES = CHAR_CODES.concat(NUMBER_CHAR_CODES);
    }

    if (symbol) {
        CHAR_CODES = CHAR_CODES.concat(SYMBOL_CHAR_CODES);
    }

    // Will hold the generated password in an array that will be returned as a string using .join("")
    const PASSWORD_ARRAY = []

    // For loop that iterates the length of the desired password and will pick random indices from the CHAR_CODES array and push it into the PASSWORD_ARRAY to be returned as the password
    for(let i = 0; i < length; i++) {

        // CHARACTER_CODE will hold a random char code from the CHAR_CODES array and then will be converted into a string
        const CHARACTER_CODE = CHAR_CODES[Math.floor(Math.random() * CHAR_CODES.length)]
        PASSWORD_ARRAY.push(String.fromCharCode(CHARACTER_CODE));
    }

    return PASSWORD_ARRAY.join("");
} 

// Generates numbers from the start index to the end index (inclusive) which will act as our way to generate character codes.
function generateArray(start, end) {

    const characterArray = []
    for(let i = start; i <= end; i++) {
        characterArray.push(i);
    }

    return characterArray;

}