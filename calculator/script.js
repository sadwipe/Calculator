// buttons
const numbers = document.querySelectorAll(".number");
const signs = document.querySelectorAll(".operator");
const AllClearButton = document.querySelector(".reset-result");
const ClearButton = document.querySelector(".delete-last");
const percentButton = document.getElementById("percent");
const commaButton = document.getElementById("comma");
const equalButton = document.getElementById("equal");

// display results
const displayNumber = document.querySelector(".current-number");
const previousNumber = document.querySelector(".previous-number");

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let hasComma = false;

// displays the numbers you click on, comma doesn't affect maximum length
numbers.forEach(number => {
    number.addEventListener("click", () => {
        if(displayNumber.textContent.length <= 8) {
            displayNumber.textContent += number.textContent;
        } else if (hasComma == true && displayNumber.textContent.length <= 9) {
            displayNumber.textContent += number.textContent;
        };
    });
});

// comma button, can be used only once and it can't be used as last char.
commaButton.addEventListener("click", () => {
    if(hasComma == false && displayNumber.textContent.length < 9 && displayNumber.textContent.length > 0){
        displayNumber.textContent += ".";
        hasComma = true;
    };
});

//AC button, clears everything and resets all variables
AllClearButton.addEventListener("click", () => {

    displayNumber.textContent = "";
    previousNumber.textContent = "";
    firstValue = "";
    isFirstValue = false;
    secondValue = "";
    isSecondValue = false;
    sign = "";
    hasComma = false;
    isPercent = false;

})

//C button, deletes last character of the number
ClearButton.addEventListener("click", () => {
    displayNumber.textContent = displayNumber.textContent.slice(0, -1);
});

//% button, returns the value / 100
percentButton.addEventListener("click", () => {
    if(displayNumber.textContent.length <= 10) {
        displayNumber.textContent = displayNumber.textContent / 100;
    } else {
        displayNumber.textContent = "ERROR";
    }
});