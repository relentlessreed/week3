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

// Get random character from user based input
function getCharacter(num) {
  let choice = "";

  if (num == 0) {
    choice = getRandomUpper();
  } else if (num == 1) {
    choice = getRandomLower();
  } else if (num == 2) {
    choice = getRandomNumber();
  } else if (num == 3) {
    choice = getRandomSymbol();
  } else {
    console.log("Must enter valid number.");
  }
  return choice;
}

// Randomizes character selection
function randomizeOrder(upper, lower, number, symbol) {
  let decision = -1;
  let testDecision = -1;

  while (decision == -1) {
    testDecision = Math.floor(Math.random() * 4);
    if (upper && testDecision == 0) {
      decision = testDecision;
    }
    if (lower && testDecision == 1) {
      decision = testDecision;
    }
    if (number && testDecision == 2) {
      decision = testDecision;
    }
    if (symbol && testDecision == 3) {
      decision = testDecision;
    }
  }
  return decision;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordLength = prompt(
    "Enter number of characters to use (Must be between 8-128.)"
  );
  var password = generatePassword();
  // Temporary Password
  var password = "password1";
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  // Holding default false values for character selectors
  let selectUpper = false;
  let selectLower = false;
  let selectNumber = false;
  let selectSpecial = false;
  let minimumSelectionRequirement = false;
  let password = "";
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log("criteria accepted");

    // If critera accepted modify selectors according to user input
    selectUpper = confirm("Include uppercase?");
    selectLower = confirm("Include lowercase?");
    selectNumber = confirm("Include numbers?");
    selectSpecial = confirm("Include special characters?");
    // Make sure there is at least one character type selected by user
    if (selectUpper || selectLower || selectNumber || selectSpecial) {
      minimumSelectionRequirement = true;
    }
  } else {
    alert("criteria rejected");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
