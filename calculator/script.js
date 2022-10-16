// buttons
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const percentage = document.querySelector("#percent");
const allClearButton = document.querySelector(".reset-result");
const clearButton = document.querySelector(".delete-last");
const comma = document.querySelector("#comma");
const equal = document.querySelector("#equal");

let hasOperator = false;

// display
const displayNumber = document.querySelector(".current-number");
const displayPreviousNumber = document.querySelector(".previous-number");


// for design part of the calculator
const calculatorDesign = () => {
    
    function highlightOperators() {
        operators.forEach(operator => {
            operator.addEventListener("click", () => {
                if(hasOperator == false){
                    operator.classList.add("highlight-orange");
                    hasOperator = true;
                } else {
                    operators.forEach(operator => {
                        operator.classList.remove("highlight-orange");
                        hasOperator = false;
                    });
                };
            });
        });
    };

    highlightOperators();
}

// for logic part of the calculator
const calculatorLogic = () => {

};


calculatorDesign();
calculatorLogic();