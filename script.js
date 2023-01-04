// login event
let enterSubmit = document.getElementById("submit");
enterSubmit.addEventListener("click", function () {
  let loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  let transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});

// deposit event
let depositButton = document.getElementById("addDeposit");
depositButton.addEventListener("click", function () {
  let depositNumber = getInputNumber("depositAmount");

  updateSpanText("currentDeposit", depositNumber);
  updateSpanText("currentBalance", depositNumber);

  document.getElementById("depositAmount").value = "";
});

// withdraw event
let withdrawButton = document.getElementById("addWithdraw");
withdrawButton.addEventListener("click", function () {
  let withdrawNumber = getInputNumber("withdrawAmount");

  updateSpanText("currentWithdraw", withdrawNumber);
  updateSpanText("currentBalance", -1 * withdrawNumber);

  document.getElementById("withdrawAmount").value = "";
});

function getInputNumber(id) {
  let amount = document.getElementById(id).value;
  let amountNumber = parseFloat(amount);
  return amountNumber;
}

function updateSpanText(id, addedNumber) {
  let current = document.getElementById(id).innerText;
  let currentNumber = parseFloat(current);
  let total = currentNumber + addedNumber;
  document.getElementById(id).innerText = total;
}
