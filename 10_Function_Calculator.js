
function add(num1,num2){
    console.log(num1 + num2);
}
function multiply(num1,num2){
    console.log(num1 * num2);
}
function division(num1,num2){
    console.log(num1 / num2);
}
function sub(num1,num2){
    console.log(num1 - num2);
}

// *************************************************************************
// Function Passing Function
function calculator(num1, num2, operator){
    return operator(num1, num2);
}

calculator(5, 2, add);
calculator(5, 2, multiply);
calculator(5, 2, division);
calculator(5, 2, sub);