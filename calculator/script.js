const calculator = () => {

const numbers = document.querySelectorAll(".number");
const currentNumber = document.querySelector(".current-number");
const previousNumber = document.querySelector(".previous-number");
const deleteChar = document.querySelector(".delete-last");
const resetResult = document.querySelector(".reset-result");

// removes the last number of the currentNumber
function updateNumber() {
    function deleteNumber() {
        let n = currentNumber.textContent.length;
        currentNumber.textContent = currentNumber.textContent.slice(0, n-1);
    };
    deleteChar.addEventListener("click", deleteNumber);
}



// clears the results
function resetValues() {
    resetResult.addEventListener("click", () => {
        currentNumber.textContent = " ";
        previousNumber.textContent = " ";
    })
}

// returns the number we click on
function returnNumber() {
    numbers.forEach(number => {
        number.addEventListener("click", () => {
            return number.textContent;
        });
    });
};

resetValues();
returnNumber();
updateNumber();

};

calculator();