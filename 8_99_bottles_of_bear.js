// 99 Bottles left Song.

let count = 99;
function beerBottles(){
    // Or use for loop for the same...!!
    while (count>=0) {
        if (count === 1) {
            console.log(count + " bottles of beer on the wall, " + count + " bottles of beer." + " Take 1 down, pass it around, no more bottles of beer on the wall.");
        }
        else if(count === 0){
            console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
        }
        else{
            console.log(count + " bottles of beer on the wall, " + count + " bottles of beer." + " Take 1 down, pass it around, " + (count-1) + " bottles of beer on the wall.");
        }
        count--;
    }
}

beerBottles();