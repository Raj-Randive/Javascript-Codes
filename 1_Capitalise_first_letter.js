// Write a code which prompts you to enter your name and then greet him/her with Uppercase only first letter of their name.

let enteredName = prompt("What is your name ?");

firstLetter = enteredName.slice(0,1);
firstLetterCapital = firstLetter.toUpperCase();
remainingLetter = enteredName.slice(1, enteredName.length);
remainingLetter = remainingLetter.toLowerCase();
let newName = firstLetterCapital + remainingLetter;

alert("Hello, " + newName);