const calculator = () => {

  const numbers = document.querySelectorAll(".number");
  const currentNumber = document.querySelector(".current-number");
  const previousNumber = document.querySelector(".previous-number");
  const deleteChar = document.querySelector(".delete-last");
  const resetResult = document.querySelector(".reset-result");
  const percent = document.querySelector("#percent");
  const addition = document.querySelector("#addition");
  const substraction = document.querySelector("#substraction");
  const multiplication = document.querySelector("#multiplication");
  const divison = document.querySelector("#division");
  const equal = document.querySelector("#equal");
  const period = document.querySelector("#period");
  const orangeBtns = document.querySelectorAll(".orange");

  // highlights the color of the operator you wanna use and it returns it's sign.
  function useOperator() {  
    orangeBtns.forEach(button => {
      button.addEventListener("click", () => {
          button.classList.add("highlight-orange");
          return button.textContent;
      });
    });
 };

  // clears the results
  function resetValues() {
    resetResult.addEventListener("click", () => {
      currentNumber.textContent = "";
      previousNumber.textContent = "";
      orangeBtns.forEach(button => {
        button.classList.remove("highlight-orange");
      })
    });
  };

  // removes the last number of the currentNumber
  function removeNumber() {
    function deleteNumber() {
      let n = currentNumber.textContent.length;
      currentNumber.textContent = currentNumber.textContent.slice(0, n - 1);
    }
    deleteChar.addEventListener("click", deleteNumber);
  };

  // displays the number you click on
  function updateNumber() {
    numbers.forEach(number => {
      number.addEventListener("click", () => {
        if(currentNumber.textContent.length <= 9) currentNumber.textContent += number.textContent;
      });
    });
  };

  // "%" button
  function percentButton(first, second) {
    return first * second / 100;
  };

  // "÷" button
  function divisionButton(first, second) {
    return first / second;
  };

  // "x" button
  function multiplyButton(first, second) {
    return first * second;
  };

  // "-" button
  function subtractionButton(first, second) {
    return first - second;
  };

  // "+" button
  function additionButton(first, second) {
    return first + second;
  };

  resetValues();
  removeNumber();
  updateNumber();
  useOperator();
}

calculator();
