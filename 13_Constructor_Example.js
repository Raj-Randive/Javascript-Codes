
// Housekeeper list

function HouseKeeper (name, age, yearOfExperience, cleaningRepertoire){
    this.Name = name;
    this.Age = age;
    this.Years_Of_Experience = yearOfExperience;
    this.Cleaning_Repertoire = cleaningRepertoire;

}

let HouseKeeper1 = new HouseKeeper("Maxine", 19, 7, ["Bathroom", "Balcony", "Drawing Room", "Kitchen"]);

let HouseKeeper2 = new HouseKeeper("Steve", 22, 10, [ "Balcony", "Drawing Room", "Kitchen"]);


console.log(HouseKeeper1);
console.log(HouseKeeper2);