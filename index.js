//Calculator Program

const display = document.getElementById("display");

//Create 3 functions for 
//1. appendToDisplay
//2. Calculate
//3. Clear Display

function appendToDisplay (input) {
display.value += input;
}


function clearDisplay () {
display.value = " ";

}

function calculate () {
try{
    display.value = eval(display.value);
}

catch (error){ 
display.value = "Error";
}


}

//Eval is only used for test purposes, not suitable for a production program.

