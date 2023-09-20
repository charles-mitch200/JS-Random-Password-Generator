// Get reference to the HTML elements
const inputElem = document.getElementById("password");
const buttonElem = document.querySelector("button");
const imageElem = document.querySelector(".js-image");
let length = 12;

// Vharacters to be included in the password
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = ",./;?!@{#$%^&*)]{|`~-_()=+[";
const allCharacters = upperCase + lowerCase + numbers + symbols;

// Function that generates the passoword
const generatePassword = () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * upperCase.length)];
  password += symbols[Math.floor(Math.random() * upperCase.length)];

  while (length > password.length) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }

  inputElem.value = password;
};

buttonElem.addEventListener("click", generatePassword);

// Function that copies the password
const copyPassword = () => {
  // Select text inside the input field
  inputElem.select();
  //   copy the text
  document.execCommand("copy");
  //   deselect the text
  inputElem.setSelectionRange(0, 0);
  // User feedback
  alert(`Password copied: ${inputElem.value}`);
};

imageElem.addEventListener("click", copyPassword);
