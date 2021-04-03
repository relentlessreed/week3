// Beginning of code

// Adding functions to diffent character types

// Gets random lowercase letter from charcode
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// Gets random uppercase letter from charcode
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Gets random number from charcode
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Gets random symbol from string
function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordLength = prompt(
    "Enter number of characters to use (Must be between 8-128.)"
  );
  // Var password = generatePassword();
  // Temporary Password
  var password = "password1";
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
