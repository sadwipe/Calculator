const calculator = () => {
  const numbers = document.querySelectorAll(".number");
  const currentNumber = document.querySelector(".current-number");
  const previousNumber = document.querySelector(".previous-number");
  const deleteChar = document.querySelector(".delete-last");
  const resetResult = document.querySelector(".reset-result");

  // clears the results
  function resetValues() {
    resetResult.addEventListener("click", () => {
      currentNumber.textContent = " ";
      previousNumber.textContent = " ";
    });
  }

  // removes the last number of the currentNumber
  function removeNumber() {
    function deleteNumber() {
      let n = currentNumber.textContent.length;
      currentNumber.textContent = currentNumber.textContent.slice(0, n - 1);
    }
    deleteChar.addEventListener("click", deleteNumber);
  }

  // displays the number you click on
  function updateNumber() {
    let n = currentNumber.textContent.length;
    numbers.forEach((number) => [
      number.addEventListener("click", () => {
        if (currentNumber.textContent.length <= 9) {
          currentNumber.textContent += number.textContent;
        }
      }),
    ]);
  }

  resetValues();
  removeNumber();
  updateNumber();
};

calculator();
