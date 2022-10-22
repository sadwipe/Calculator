// buttons
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const percentage = document.querySelector("#percent");
const allClearButton = document.querySelector(".reset-result");
const clearButton = document.querySelector(".delete-last");
const comma = document.querySelector("#comma");
const equal = document.querySelector("#equal");

// algorythm of the calculator
let firstValue = "";
let hasFirstValue = false;
let secondValue = "";
let hasSecondValue = false;
let previousNumber = "";
let sign = "";
let clickNumber = 0;
let hasComma = false;

// display
const displayNumber = document.querySelector(".current-number");
const displayPreviousNumber = document.querySelector(".previous-number");

// for logic part of the calculator
const calculatorLogic = () => {

    // display the numbers you click (limit of 9)
    numbers.forEach(number => {
        number.addEventListener("click", () => {
            if(displayNumber.textContent.length <= 9 && hasComma == true) {
                displayNumber.textContent += number.textContent;
            } else if(displayNumber.textContent.length <= 8 && hasComma == false) {
                displayNumber.textContent += number.textContent;
            };
        });
    });

    // "AC" button
    allClearButton.addEventListener("click", () => { 
        displayNumber.textContent = "";
        displayPreviousNumber.textContent = "";
        secondValue = "";
        firstValue = "";
        sign = "";
        hasFirstValue = false;
        hasSecondValue = false;
        clickNumber = 0;
        hasComma = false;
    });

    // "C" button
    clearButton.addEventListener("click", () => {
        displayNumber.textContent = displayNumber.textContent.slice(0,-1);
    });

    // "%" button
    percentage.addEventListener("click", () => {
        if(displayNumber.textContent.length > 0) {
            displayNumber.textContent = displayNumber.textContent / 100;
        };
        clickNumber += 1;
        if(clickNumber == 3) {
            displayNumber.textContent = "ERROR";
        };
    });

    // "." button (doesn't affect number's length)
    comma.addEventListener("click", () => {
        if(hasComma == false) {
            displayNumber.textContent += ".";
            hasComma = true;
        } else if(hasComma == true) {
            displayNumber.textContent += "";
        };
    })

};

calculatorLogic();