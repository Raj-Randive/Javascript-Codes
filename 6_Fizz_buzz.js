//Fizz Buzz Game
//Push Command always pushes the element at the end of the array...!!
let output = [];
let count = 1;

function fizzBuzz(){

    while (count<=50) {

        if(count%5 === 0 && count%3 === 0){
            output.push("FizzBuzz");
        }
        else if (count%3 === 0) {
            output.push("Fizz");
        }
        else if(count%5 === 0){
            output.push("Buzz");
        }
        else{
            output.push(count);
        }
        
        count ++;     
    }
    
    console.log(output);
}

fizzBuzz();
