const passwordLength = document.getElementById("length");
const toggleUppercase = document.getElementById("uppercase");
const toggleLowercase = document.getElementById("lowercase");
const toggleNumbers = document.getElementById("numbers");
const toggleSymbols = document.getElementById("symbols");
const generate = document.getElementById("generate");
const result = document.getElementById("result");

const characterAccess = {
    lower: getLowercaseCharacters,
    upper: getUppercaseCharacters,
    number: getNumberCharacters,
    symbol: getSymolCharacters
};

generate.addEventListener("click", () => {
    const length = passwordLength.value;
    const hasUpper = toggleUppercase.checked;
    const hasLower = toggleLowercase.checked;
    const hasNumber = toggleNumbers.checked; 
    const hasSymbol = toggleSymbols.checked;
    
    result.innerText = generatePassword(length, hasUpper, hasLower, hasNumber, hasSymbol);
});

function generatePassword(length, upper, lower, number, symbol) {
    
    let generatedPassword = "";
    const variableCount = upper + lower + number + symbol
    const variableArray = [{ lower }, { upper }, { number }, { symbol }].filter
    (
        item => Object.values(item)[0]
    );

    if(variableCount === 0) {
        return "";
    }

    for(let i = 0; i < length; i+= variableCount) {
        variableArray.forEach(type => {
            const functionName = Object.keys(type)[0];
            generatedPassword += characterAccess[functionName]();
        });
    }

    return generatedPassword;
} 

function getLowercaseCharacters() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getUppercaseCharacters() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getNumberCharacters() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getSymolCharacters() {
    const symbols = "!@#$%^&*(){}[]=+-<>?";
    return symbols[Math.floor(Math.random() * symbols.length)];
}