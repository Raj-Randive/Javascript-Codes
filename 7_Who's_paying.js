// Who is going to pay the bill for todays food...!!

function whosPaying(names) {
    
        let numberOfPeople = names.length;
        let randomPersonPosition = Math.floor(Math.random()*numberOfPeople);
        let randomPerson = names[randomPersonPosition];

        console.log(randomPerson + " is going to buy lunch today!");
}

names = ["Jane", "Dustin", "Mike", "Will", "Lucas", "Max"];
whosPaying(names);
