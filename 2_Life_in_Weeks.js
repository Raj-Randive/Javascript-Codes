//Write a function to print how many days, weeks and months are left when you give your age as an input in the function keeping in mind if every person lives for 90 years.

function lifeInWeeks(age) {
        
        console.log("You have " + (90-age)*365 + " days, " + (90-age)*52 + " weeks, and " + (90-age)*12 + " months left." );

    }

lifeInWeeks(56);