// User input variables:
var confirmconfirmEnter,
  confirmSymbol,
  confirmNum,
  confirmLower,
  confirmUpper;

var options;
//Symbol inputs for password generation
Symbol = [
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "!",
  "#",
  "$",
  "%",
  "@",
  "[",
  "]",
];
//Number inputs for password generation
Num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//Lowercase alphabetical inputs for password generation
Lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
//Uppercase alphabetical inputs for password generation
Upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Start Code
var get = document.querySelector("#generate");

//Used a password placeholder and utilized it near the bottom of my code
get.addEventListener("click", function () {
  PW = generatePassword();
  document.getElementById("password").placeholder = PW;
});

// Beginning of the generatePassword function
function generatePassword() {
  // Get user input to determine password length
  confirmEnter = parseInt(
    prompt(
      "How long would you like your password? Your choice must be atleaset 8 charcters long and no longer then 128 characters."
    )
  );

  //Took a bit but I found a way to utilize a while loop so the end user can re-imput charcters if they did not choose an appropriate length or criteria
  i = 0;
  while (i < 1) {
    if (confirmEnter <= 8 || confirmEnter >= 128) {
      confirmEnter = parseInt(prompt("Please choose from the range of 8 to 128"));
    } else if (!confirmEnter) {
      alert("Please enter a valid number");
      break;
    } else {
      // Continues once user input is validated
      confirmNum = confirm("Would you like to include numbers?");
      confirmSymbol = confirm("Would you like to include Symbols?");
      confirmUpper = confirm("Would you like to include Uppercase letters?");
      confirmLower = confirm("Would you like to include Lowercase letters?");
      break;
    }
  };

  // If you choose no criteria you will be notified upon falue if you select no options
  if (!confirmSymbol && !confirmNum && !confirmUpper && !confirmLower) {
    options = alert("Please choose a creitera for your password!");
  }
  // Used if all opitons are selected
  else if (confirmSymbol && confirmNum && confirmUpper && confirmLower) {
    options = Symbol.concat(Num, Lower, Upper);
  }
  // Used if all but one options is selected
  else if (confirmSymbol && confirmNum && confirmUpper) {
    options = Symbol.concat(Num, Upper);
  } else if (confirmSymbol && confirmNum && confirmLower) {
    options = Symbol.concat(Num, Lower);
  } else if (confirmSymbol && confirmLower && confirmUpper) {
    options = Symbol.concat(Lower, Upper);
  } else if (confirmNum && confirmLower && confirmUpper) {
    options = Num.concat(Lower, Upper);
  }
  //Used if two options are selected 
  else if (confirmSymbol && confirmNum) {
    options = Symbol.concat(Num);
  } else if (confirmSymbol && confirmLower) {
    options = Symbol.concat(Lower);
  } else if (confirmSymbol && confirmUpper) {
    options = Symbol.concat(Upper);
  } else if (confirmLower && confirmNum) {
    options = Lower.concat(Num);
  } else if (confirmLower && confirmUpper) {
    options = Lower.concat(Upper);
  } else if (confirmNum && confirmUpper) {
    options = Num.concat(Upper);
  }
   // Used if only one option is selected
  else if (confirmSymbol) {
    options = Symbol;
  } else if (confirmNum) {
    options = Num;
  } else if (confirmLower) {
    options = Lower;
  } else if (confirmUpper) {
    options = Upper;
  };
  // This is an array placeholder for the password length selected by the user.
  var password = [];

  // This proccess generates the random characters
  for (var i = 0; i < confirmEnter; i++) {
    var pickOptions = options[Math.floor(Math.random() * options.length)];
    password.push(pickOptions);
  }
  // Used to join the password array, converts it to a string, and trims any spaces that might appear.
  PW = password.join("").trim(" ");
  return PW;
};