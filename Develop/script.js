// Assignment Code
var generateBtn = document.querySelector("#generate");

// variables for the different types of characters
var number_chars = ["0", "1", "2", "3", "4", "5","6","7","8","9"];
var lowercase_chars = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercars_chars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",'P',"Q","R","S","T","U","V","W","X","Y","Z"];
var special_chars = ["'","~","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","{","]","}","|",";",":","'",'"',"<",".",">","/","?"];

// setting the variables for password and chars 
var password = '';
var password_chars = [];


// Write password to the #password input
function make_password() {
  var password_length = prompt("Choose the length of your password, passwords must be between 8-128 characters long.");


  if (password_length <=7 ){
    alert("Your password is too short.")
    return ("Please return a valid number of characters")
  } else if (password_length >= 129) {
    alert("Your password is too long.")
    return ("Please input a valid number of characters.");
  } else if (isNaN(password_length)) {
    alert ("You must use the numbers 8-128 to signify the number of characters you want to make your password.")
    return ("Please input a valid number of characters.");
  } else {
    alert("Your passwors will be " + password_length + " long.")
  }
  

  // confirmation that the user wants to use numbers in their password
  var number_chars_decision = confirm("Do you want to use numbers in your password?")
  if(number_chars_decision === true) {
    password_chars = password_chars.concat(number_chars);
  }

  // confirmation that the user wants to use lowercase characters in their password
  var lowercase_chars_decision = confirm("Do you want to use lowercase letters in your password?")
  if (lowercase_chars_decision === true) {
    password_chars = password_chars.concat(lowercase_chars);
  }

  // confirmation that the user wants to use UPPERCASE characters in their password
  var upper_chars_decicion = confirm("Do you want to use UPPERCASE letters in your password?")
  if (upper_chars_decicion === true) {
    password_chars = password_chars.concat(uppercars_chars);
  }

  // confirmation that the user wants to use special characters
  var special_chars_decision = confirm("Do you want to add special caracters in your password? (Special characters include `~!@#$%^&*()-_=+[{]}\|;:',<.>/?")
  if (special_chars_decision === true) {
    password_chars = password_chars.concat(special_chars)
  }

  // If the user has selected "cancel" for every event
  if (number_chars_decision === false && lowercase_chars_decisionv === false && upper_chars_decicion === false && special_chars_decision === false) {
    return ("Please select at least one atribute for your password.")
  }
 
 

  // loop to generate the password
  
  var final_password = ""
  for (var i = 0; i < password_length; i=i+1) {
    var rng =[Math.floor(Math.random() * password_chars.length)];
    // or finalPassword += possibleCharacters[rng];
    final_password = final_password + password_chars[rng];
  }
  return final_password;
}

var generateBtn = document.querySelector("#generate")

function writePassword() {
  var password = make_password()
  var password_generated = document.querySelector("#password")
  password_generated.value = password;
  
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
