var generateBtn = document.querySelector("#generate");

var upperCase = ["A","B","C","D","E","F","G","H","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var SpecCharacters = ["!","#","$","%","&","*","+","-","?","@","\"","'","(",")",",",".","/",":",";","<","=",">","[","\\","]","^","_","`","{","}","~","|"];

function getPasswordOptions() {

  // Variable to store length selected for generated password.
  var passwordLength = parseInt(
    prompt('How many characters would you like your password to contain?'),
  );
  
  //Conditional statements to make sure password input is between 8 and 128, and is a number.
   if (passwordLength < 8 || passwordLength > 128) {
       alert ("Password must be between 8 to 128 characters.")
       return;
    }

    if (Number.isNaN(passwordLength)) {
        alert ('Password length must be provided as a number');
       return;
    }

//Variable to store boolean of whether we are using numbers
var usesNumbers = confirm(
  "Would you like your password to contain numbers?"
);

//Variable to store boolean of whether we are using special characters
var usesSpecCharacters = confirm(
  "Would you like your password to contain special characters?"
);    
  
//Variable to store whether we are using UpperCase letters
var usesUppercase = confirm(
  "Would you like your password to contain Uppercase letters?"
);
//Variable to stroe whether we are using LowerCase letters
var usesLowercase = confirm(
  "Would you like your password to contain Lowercase letters?"
);
var allCharacters = (usesNumbers, usesLowercase, usesSpecCharacters, usesUppercase)
if (allCharacters === false){
alert ('Must select minimum 1 character type for password.');
return;
}

// Stores properties of user inputs
var passwordOptions = {
  passwordLength: passwordLength,
  usesNumbers: usesNumbers,
  usesSpecCharacters: usesSpecCharacters,
  usesUppercase: usesUppercase,
  usesLowercase: usesLowercase,
 }
return passwordOptions;
}




// Function for getting a random element from an array(all instances of arr will be replaced by an ACTUAL VALUE when we do our callback.)
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {

  var options = getPasswordOptions();

  var result = [];

  var possibleCharacters = [];

  var guaranteedCharacters = [];

  if (!options) return null;

  if (options.usesSpecCharacters) {
    possibleCharacters = possibleCharacters.concat(SpecCharacters);
    guaranteedCharacters.push(getRandom(SpecCharacters));
  }
  if (options.usesNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandom(numbers));
  }
  if (options.usesUppercase) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    guaranteedCharacters.push(getRandom(upperCase));
  }
  if (options.usesLowercase) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
    guaranteedCharacters.push(getRandom(lowerCase));
  }
  for (var i = 0; i < options.passwordLength; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);
  }
  console.log(options.passwordLength);
  console.log(result);
  
  for (var i = 0; i < options.passwordLength; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);
  }
  console.log(options.passwordLength);
  console.log(result);

   for (var i = 0; i < guaranteedCharacters.length; i++) {
     result[i] = guaranteedCharacters[i];
   }

    return result.join('');
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  return;
}

generateBtn.addEventListener("click", writePassword);
