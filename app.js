const income = document.getElementById("income");

const foodCost = document.getElementById("food");
const rentCost = document.getElementById("rent");
const clothsCost = document.getElementById("cloth");

const calculateBtn = document.getElementById("calculate-btn");
const savingBtn = document.getElementById("save-btn");

let balance;

function calculateIncome() {
  removeValidationError();
  const validateIncomeInput = inputValidation(income.value, "income-error");
  const validateFoodInput = inputValidation(foodCost.value, "food-error");
  const validateRentInput = inputValidation(rentCost.value, "rent-error");
  const validateClothInput = inputValidation(clothsCost.value, "cloth-error");

  if (
    validateIncomeInput &&
    validateFoodInput &&
    validateClothInput &&
    validateRentInput
  ) {
    removeValidationError();
    const totalExpense =
      stringToNumber(foodCost.value) +
      stringToNumber(rentCost.value) +
      stringToNumber(clothsCost.value);

    balance = stringToNumber(income.value) - totalExpense;

    document.getElementById(
      "total-enpense"
    ).textContent = `Total Expenses: ${totalExpense}`;

    document.getElementById("balance").textContent = `Balance: ${balance}`;
  } else {
    return;
  }
}

function stringToNumber(num) {
  return Number(num);
}

function calculateSaving() {
  removeValidationError();
  const percentage = document.getElementById("percentage");

  if (inputValidation(percentage.value, "percentage-error")) {
    removeValidationError();
    const savingAmount = Math.round(
      (stringToNumber(percentage.value) / 100) * balance
    );

    document.getElementById(
      "savingAmount"
    ).textContent = `Saving Amount: ${savingAmount}`;

    document.getElementById(
      "remainingBalance"
    ).textContent = `Remaining Balance: ${balance - savingAmount}`;
  }
}

function inputValidation(num, elementId) {
  if (Number(num) < 0) {
    document.getElementById(
      elementId
    ).textContent = `Number can't be less then 0`;
  } else {
    return true;
  }
}

function removeValidationError() {
  const errorElements = [
    "income-error",
    "food-error",
    "cloth-error",
    "rent-error",
    "percentage-error",
  ];

  errorElements.forEach(
    (element) => (document.getElementById(element).textContent = "")
  );
}

calculateBtn.addEventListener("click", calculateIncome);
savingBtn.addEventListener("click", calculateSaving);
