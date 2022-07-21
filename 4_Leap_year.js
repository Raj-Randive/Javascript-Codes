// Leap Year Challenge...!!

// A year is a leap year if it is evenly divisible by 4;
// except if that year is also divisible by 100;
// unless that year is also divisible by 400;

function isLeapYear1(year){
    if (year%4 == 0) {
        console.log("Leap year.");
    }
    else{
        if (year%100 == 0) {
            console.log("Not leap year.");
        }
        else{
            if (year%400 == 0) {
                console.log("Leap year.");
            }
            else{
                console.log("Not leap year.");
            }
        }
    }
}
isLeapYear1(2017);


// ********************************************************************************************************
// Other Method

function isLeapYear2(year){
    if (year%4 === 0) {
        
        if (year%100 === 0) {
            
            if (year%400 === 0) {
                console.log("Leap year.");
            }
            else{
                console.log("Not leap year.");
            }
        
        }
        else{
            console.log("Leap year.");
        }
    }
    else{
        console.log("Not leap year.");
    }
}
isLeapYear2(2017);