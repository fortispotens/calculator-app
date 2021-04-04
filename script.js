const calculatorDisplay = document.querySelector("h1");
const inputButtons = document.querySelectorAll("button");
const clearButton = document.getElementById("clear-btn");

function sendNumberValue(number) {
  calculatorDisplay.textContent = number;
}

// Add Event Listeners for numbers, operators, decimal buttons
inputButtons.forEach((inputButton) => {
  if (inputButton.classList.length === 0) {
    inputButton.addEventListener("click", () =>
      sendNumberValue(inputButton.value)
    );
  } else if (inputButton.classList.contains("operator")) {
    inputButton.addEventListener("click", () =>
      sendNumberValue(inputButton.value)
    );
  } else if (inputButton.classList.contains("decimal")) {
    inputButton.addEventListener("click", () =>
      sendNumberValue(inputButton.value)
    );
  }
});
