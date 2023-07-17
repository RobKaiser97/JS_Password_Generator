// This line selects the element with the id "generate" in the HTML document and assigns it to the variable "generateBtn"
var generateBtn = document.querySelector("#generate")

// The following lines assign a string of all uppercase letters, lowercase letters, numbers, and symbols to respective variables
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbol = "~!@#$%^&*()_+"

// The generatePassword function is where the main logic for generating the password occurs
function generatePassword() {
  
  // The user is prompted to input a password length between 8 and 128, which is then converted to a Number and stored in the variable "passwordLength"
  let passwordLength = Number(window.prompt("Please enter a number between 8 and 128, this will be the length of your pasword:", "8 - 128"));
  
  // This string will hold all possible characters for the password
  let allowedChar = "";

  // The following series of prompts ask the user if they want to include uppercase letters, lowercase letters, numbers, and symbols in their password
  // If they confirm, the respective string is added to the allowedChar string

  var containsUppercase = confirm("Would you like your password to contain Uppercase Characters?");
  if (containsUppercase === true) {
    allowedChar = upperCase.concat(allowedChar);
  };
   
  var containsLowercase = confirm("Would you like your password to contain Lowercase Characters?");
  if (containsLowercase === true) {
    allowedChar = lowerCase.concat(allowedChar);
  };

  var containsNumbers = confirm("Would you like your password to contain Numbers?");
  if (containsNumbers === true) {
    allowedChar = numbers.concat(allowedChar);
  };

  var containsSymbols = confirm("Would you like your password to contain Symbols?");
  if (containsSymbols === true) {
    allowedChar = symbol.concat(allowedChar);
  };

  // This line initializes an empty string that will be filled with the generated password
  let password = ""
  
  // This loop will continue until the generated password has reached the user-defined length
  // Each iteration, a random character is selected from the allowedChar string and added to the password string
  for (var i = 0; i < passwordLength; i++) { 
    var generatedString = allowedChar.charAt(Math.floor(Math.random() * allowedChar.length));
    password = generatedString.concat(password);
   };
  
  // This function will return the generated password when called
  return password;
};

// This function will write the generated password to the HTML document
function writePassword() {
  
  // This line generates a new password and stores it in the variable "password"
  var password = generatePassword();
  
  // This line selects the element with the id "password" from the HTML document and assigns it to the variable "passwordText"
  var passwordText = document.querySelector("#password");

  // This line changes the value of the "password" element in the HTML document to the generated password
  passwordText.value = password;
}

// This line adds an event listener to the "generate" button, causing it to call the writePassword function when clicked
generateBtn.addEventListener("click", writePassword) 