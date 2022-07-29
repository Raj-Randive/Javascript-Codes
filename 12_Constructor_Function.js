// A CONSTRUCTOR FUNCTION'S name starts with a Capital Letter as just to specify that it is an CONSTRUCTOR FUNCTION

function BellBoy (Name, Age, HasWorkPermit, Languages){
    this.name = Name;
    this.age = Age;
    this.hasWorkPermit = HasWorkPermit;
    this.languages = Languages;
}

let bellBoy1 = new BellBoy("Jane", 19, "No", ["Hindi"]);
let bellBoy2 = new BellBoy("Mike", 21, "Yes", ["Hindi, English"]);
let bellBoy3 = new BellBoy("Nancy", 24, "Yes", ["Hindi, English, Gujarati"]);


console.log(bellBoy1);
console.log(bellBoy2);
console.log(bellBoy3);


// By "new" Keyword we create a new object that's why it is called as CONSTRUCTOR FUNCTION...!!

// And "this" keyword points to the value of that particular objects at a time...!!