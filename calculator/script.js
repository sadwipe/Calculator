// buttons
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const AllClearButton = document.querySelector(".reset-result");
const changeSign = document.querySelector(".change-sign");
const commaButton = document.getElementById("comma");
const equalButton = document.getElementById("equal");
const percentButton = document.getElementById("percent");

// display content
const displayNumber = document.querySelector(".current-number");
const displayPreviousNumber = document.querySelector(".previous-number");

// variables used in algorithm
let firstNumber = "";
let isFirstNumber = false;
let secondNumber = "";
let isSecondNumber = false;
let sign = "";
let returnValue = 0;
let percentTimes = 0;

// display number
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", (e) => {
        if (!isFirstNumber && displayNumber.textContent.length <= 9 && displayNumber.textContent.includes(".")) {
            getFirstValue(e);
        } else if (!isFirstNumber && displayNumber.textContent.length <= 8) {
            getFirstValue(e);
        } else if (isFirstNumber && sign && displayNumber.textContent.length <= 9 && displayNumber.textContent.includes(".")) {
            getSecondValue(e);
        } else if (isFirstNumber && displayNumber.textContent.length <= 8) {
            getSecondValue(e);
        };
    });
};

// gets first value
function getFirstValue(el) {
    firstNumber += el.target.getAttribute('value');
    displayNumber.textContent = firstNumber;
    firstNumber = +firstNumber;
};

// gets second value
function getSecondValue(el) {
    displayNumber.textContent = "";
    secondNumber += el.target.getAttribute('value');
    displayNumber.textContent = secondNumber;
    secondNumber = +secondNumber; 
};

// gets the operator
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", (e) => {
        if(!isFirstNumber) {
            sign = e.target.getAttribute('value');
            isFirstNumber = true;
        } else if(isFirstNumber) {
            sign = e.target.getAttribute('value');
        };
    });
};

// equal button 
equalButton.addEventListener("click", () => {
    calculate(firstNumber, secondNumber, sign);
    restartValues();
});


// parameters are first value & second value & sign
function calculate(a, b, s) {
    if(s == "+" && a && b) {
        returnValue = a + b;
        if(returnValue.toString().length > 10){
            returnValue = +returnValue.toString().slice(0, 10);
        }
        verifyRestultLength(returnValue);
    } else if(s == "-" && a && b) {
        returnValue = a - b;
        if(returnValue.toString().length > 10){
            returnValue = +returnValue.toString().slice(0, 10);
        }
        verifyRestultLength(returnValue);
    } else if(s == "/" && a && b) {
        returnValue = a / b;
        if(returnValue.toString().length > 10){
            returnValue = +returnValue.toString().slice(0, 10);
        }
        verifyRestultLength(returnValue);
    } else if(s == "*" && a && b) {
        returnValue = a * b;
        if(returnValue.toString().length > 10){
            returnValue = +returnValue.toString().slice(0, 10);
        }
        verifyRestultLength(returnValue);
    };
};

// after equal resets the second value & sign
function restartValues() {
    firstNumber = returnValue;
    sign = "";
    secondNumber = "";
    isFirstNumber = false;
};

// if input is too long show ERROR
function verifyRestultLength(input) {
    if(input > 999999999 || input < -999999999) {
        displayNumber.textContent = "ERROR";
    } else if(input > -99999999 && input < 999999999){
        displayNumber.textContent = input;
    };
};

// "AC" button
AllClearButton.addEventListener("click", () => {
    firstNumber = "";
    isFirstNumber = false;
    secondNumber = "";
    isSecondNumber = false;
    sign = "";
    returnValue = 0;
    displayNumber.textContent = "0";
    displayPreviousNumber = "";
});

// "+/-" button
changeSign.addEventListener("click", () => {
    if (!isFirstNumber) {
        firstNumber = -firstNumber;
        displayNumber.textContent = firstNumber;
    } else if(isFirstNumber) {
        secondNumber = -secondNumber;
        displayNumber.textContent = secondNumber;
    }
});


// "%" button, works only once
percentButton.addEventListener("click", () => {
    if(!isFirstNumber && percentTimes == 0) {
        firstNumber /= 100;
        displayNumber.textContent = firstNumber;
    };
    percentTimes += 1;
});


// "," button
commaButton.addEventListener("click", () => {
    if(!isFirstNumber && !displayNumber.textContent.includes(".") && !firstNumber.toString().length == 0) {   
        firstNumber += ".";
        displayNumber.textContent = firstNumber;
    } else if (isFirstNumber && !displayNumber.textContent.includes(".") && !secondNumber.toString().length == 0) {
        secondNumber += ".";
        displayNumber.textContent = secondNumber;
    };
});