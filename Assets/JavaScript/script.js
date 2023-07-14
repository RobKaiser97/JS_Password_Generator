// Assignment Code

// Sets a variable called generateBtn, which will select the id #generate in the html doc using querySelector

var generateBtn = document.querySelector("#generate")

 

// Write password to the #password input

function generatePassword() {

  const passwordLength = Number(window.prompt("Please enter a number between 8 and 128, this will be the length of your pasword:", ""));

  console.log(passwordLength);

  var containsUppercase = function() {confirm("Would you like your password to contain Uppercase Characters?");}

  containsUppercase();
  
  var containsLowercase = function() {confirm("Would you like your password to contain Lowercase Characters?");}

  containsLowercase();
  
  var containsNumbers = function() {confirm("Would you like your password to contain Numbers?");}

  containsNumbers();

  var containsSymbols = function() {confirm("Would you like your password to contain Symbols?");}

  containsSymbols();



 
  









    // generator will need to prompt user for pasword criteria

    // password length 8 < 128

    // lowercase, Uppercase, numbers, special characters

    // Validate data, ensure at least one of each is selected

    // Display the generated password

 

   

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    const lowerCase = "abcdefghijklmnopqrstuvwxyz"

    const numbers = "0123456789"

    const symbol = "~!@#$%^&*()_+"

 

    let password = "";

    for (let i = 0; i < passwordLength.length; i++) {

        const element = array[i];

       

    }

 

    return "generated password will go here";

}






// creeating a function called writePassword. Contained within we are giving the function a few local variables

// var password is using generatePassword function built by user

// var passwordText is targeting #password id in the html doc

// passwordText value will be equal to whatever the generatePassword function returns

function writePassword() {

    var password = generatePassword();

    var passwordText = document.querySelector("#password");

 

    passwordText.value = password;

}

 

// add event listener

// script will wait to write the generated password to the html doc until the generate button is clicked

generateBtn.addEventListener("click", writePassword)