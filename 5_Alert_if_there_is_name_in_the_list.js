//Using arrays...!!

let guestList = ["Raj", "Elon", "Jack", "Sam", "Amelia"];

let getName = prompt("What is your name ?");

if (guestList.includes(getName)) {
    alert("Welcome " + getName + ", have a wonderful evening.");
}
else{
    alert("Sorry your name is not included in the party list.");
}