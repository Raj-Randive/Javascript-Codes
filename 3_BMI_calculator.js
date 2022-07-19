//BMI CALCULATOR
// The message must be returned as an output form your function. You should NOT USE alert, prompt or console.log in this challenge.

function bmiCalculator(weight,height) {
    let BMI = Math.round(weight / Math.pow(height,2));
    let interpretation;
    
    if (BMI < 18.5) {
    interpretation = "Your BMI is " + BMI + ", so you are underweight.";
    }
    else if (BMI >= 18.5 && BMI < 24.9) {
        interpretation ="Your BMI is " + BMI + ", so you have a normal weight.";
    }
    if (BMI >= 24.9) {
        interpretation ="Your BMI is " + BMI + ", so you are overweight.";
    }
   
   return interpretation;  
}

bmiCalculator(63,1.65);