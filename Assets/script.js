// Assignment Code
var generateBtn = document.querySelector("#generate");

//Password characters
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "+", "-", "_", "(", ")", "<", ">", "?", "[", "]", "{", "}"];

//Variables for each user input
var promptValue;
var lowercaseConfirm;
var uppercaseConfirm;
var numberConfirm;
var specialConfirm;
var guaranteeArray = [];

//Function to guarantee at least 1 of each chosen variable
function guaranteedPasswordValues() {
  if (lowercaseConfirm) {
    guaranteeArray.push(...lowercaseCharacters);
  } if (uppercaseConfirm) {
    guaranteeArray.push(...uppercaseCharacters);
  }
   if (numberConfirm) {
    guaranteeArray.push(...numberCharacters);
  }
   if (specialConfirm) {
    guaranteeArray.push(...specialCharacters);
  }
  return guaranteeArray.join("");
}

//variable for user inputted variables
var selectedVariables;

// Write password to the #password input
function writePassword() {
  //user confirms password length
  promptValue = prompt("Choose the number of characters: between 8 and 128");

  //user inputs an invalid number
  if (promptValue < 8 || promptValue > 128) {
    alert("Please enter a number between 8 and 128");

    //user selects which variables to incorporate
  } else {
    lowercaseConfirm = confirm("Do you want lower case letters in your password?");
    uppercaseConfirm = confirm("Do you want upper case letters in your password?");
    numberConfirm = confirm("Do you want numbers in your password?")
    specialConfirm = confirm("Do you want special characters (@, $, &, etc.) in your password?");
  };

  //user chooses no variables
  if (!lowercaseConfirm && !uppercaseConfirm && !numberConfirm && !specialConfirm) {
    alert("Please select at least one option for characters in your password")
  }
  //user confirms all variables
  else if (lowercaseConfirm && uppercaseConfirm && numberConfirm && specialConfirm) {
    selectedVariables = lowercaseCharacters.concat(uppercaseCharacters, numberCharacters, specialCharacters);
    console.log(selectedVariables);
  }
  //user confirms 3 variables
  else if (lowercaseConfirm && uppercaseConfirm && numberConfirm) {
    selectedVariables = lowercaseCharacters.concat(uppercaseCharacters, numberCharacters);
  }
  else if (lowercaseConfirm && uppercaseConfirm && specialConfirm) {
    selectedVariables = lowercaseCharacters.concat(uppercaseCharacters, specialCharacters);
  }
  else if (lowercaseConfirm && numberConfirm && specialConfirm) {
    selectedVariables = lowercaseCharacters.concat(numberCharacters, specialCharacters);
  }
  else if (uppercaseConfirm && numberConfirm && specialConfirm) {
    selectedVariables = uppercaseCharacters.concat(numberCharacters, specialCharacters);
  }
  //user confirms 2 variables
  else if (lowercaseConfirm && uppercaseConfirm) {
    selectedVariables = lowercaseCharacters.concat(uppercaseCharacters);
  }
  else if (lowercaseConfirm && numberConfirm) {
    selectedVariables = lowercaseCharacters.concat(numberCharacters);
  }
  else if (lowercaseConfirm && specialConfirm) {
    selectedVariables = lowercaseCharacters.concat(specialCharacters);
  }
  else if (uppercaseConfirm && numberConfirm) {
    selectedVariables = uppercaseCharacters.concat(numberCharacters);
  }
  else if (uppercaseConfirm && specialConfirm) {
    selectedVariables = uppercaseCharacters.concat(specialCharacters);
  }
  else if (numberConfirm && specialConfirm) {
    selectedVariables = numberCharacters.concat(specialCharacters);
  }

  //user confirms 1 variable
  else if (lowercaseConfirm) {
    selectedVariables = lowercaseCharacters;
  }
  else if (uppercaseConfirm) {
    selectedVariables = uppercaseCharacters;
  }
  else if (numberConfirm) {
    selectedVariables = numberCharacters;
  }
  else if (specialConfirm) {
    selectedVariables = specialCharacters
  };
  console.log(selectedVariables);

  //checks user inputted password length
  var parsedValue = parseInt(promptValue);

  console.log(selectedVariables, Math.floor(Math.random() * parsedValue), parsedValue);
  console.log(promptValue, typeof promptValue);

  //create string from the selected variables
  var randomselectedVariables = []
  var guaranteedValueString = guaranteedPasswordValues();

  console.log(guaranteedValueString);
  console.log(parsedValue)

  //for loop to generate password
  for (let i = 0; i < parsedValue; i++) {
    randomselectedVariables.push(guaranteeArray[Math.floor(Math.random() * guaranteeArray.length)]);

  };

  //Variable to join strings
  var randomSelectedString = randomselectedVariables.join("");
  console.log(guaranteedPasswordValues() + "A")
  console.log(randomSelectedString.length + "B")
  var finalPassword = randomSelectedString;
  console.log(finalPassword, finalPassword.length);

  //Function to place password in the text box
  function generatePassword (){
    document.getElementById("password").value = finalPassword;
  };

  var password = generatePassword();
 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);