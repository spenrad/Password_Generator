// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Array of 26
var alphaArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Array of 26
var alphaCapArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Array of 10
var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of 31
var charArray = ["!", "\"", "#", "$", "%", "&", "'", ")", "(", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "]", "[", "\\", "^", "`", "}", "{", "|", "~"]; 

console.log(alphaArray);
console.log(alphaCapArray);
console.log(numArray);
console.log(charArray);

// develop number generator for each array
    // create a variable that makes 'randomNum' equal to an corresponding Array index position
        function randomNum(max) {
          return Math.floor(Math.random() * Math.floor(max));
        }

// create var for each array including this function
        var alphaRandom = randomNum(26);
          console.log(alphaRandom);




// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
