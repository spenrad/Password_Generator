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
  function randomNum(array) {
    return Math.floor(Math.random() * (array).length);
    }

// create var for each array including this function
    var alphaRandom = randomNum(alphaArray);
      // console.log(alphaRandom);

    var alphaCapRandom = randomNum(alphaCapArray);
      // console.log(alphaCapRandom);

    var numRandom = (randomNum(numArray));
      // console.log(numRandom);

    var charRandom = (randomNum(charArray));
      // console.log(charRandom);

// create a var that gives the index value of the randomNum generated
    var alphaSelector = alphaArray[alphaRandom];
      console.log(alphaSelector);

    var alphaCapSelector = alphaCapArray[alphaCapRandom];
      console.log(alphaCapSelector);

    var numSelector = numArray[numRandom];
      console.log(numSelector);

    var charSelector = charArray[charRandom];
      console.log(charSelector);


// define generatePassword function
    function generatePassword() {
      // Prompt the user to choose the length of the password
      var desiredLength = prompt("Choose the length of your password. Password must be greater than 8 characters and no more than 128 characters.");
        // The length must be between 8-128 characters
        while (desiredLength < 8 || desiredLength > 128) {
         desiredLength = prompt("Please enter a valid number greater than or equal to 8 or less than or equal to 128.");
        }
    //   // User will confirm which characters they want to use in their password
      
      var confirmLower = confirm("Do you want your password to contain lowercase characters?");  
      var confirmUpper = confirm("Do you want your password to contain uppercase characters?");
      var confirmNum = confirm("Do you want your password to contain numbers?"); 
      var confirmChar = confirm("Do you want your password to contain special characters?");
        if (confirmLower == false && confirmUpper == false && confirmNum == false && confirmChar == false) {
        //       // alert that you must choose one character type
            alert("You MUST choose at least one character type!");
        }

        // generate password selecting fuction
        var password = ""
        for (i = 0; i < desiredLength; i+=4) {
         password += alphaSelector + alphaCapSelector + numSelector + charSelector;
    }
        return password;
  }




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
