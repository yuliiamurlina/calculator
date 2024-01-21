"use strict";

//VARIABLES
const input = document.querySelector(".main__output input"),
  deleteSymbol = document.querySelector('[data-clear="delete"]');

const mainObj = {
  operandA: null,
  operandB: null,
  operator: "+",
};

let isResultShown = false;

input.focus();
//FUNCTIONS CALLS

//LISTENERS
input.addEventListener("input", () => {
  if (isResultShown == true) {
    clear();
    isResultShown = false;
  }
  input.value = input.value.replace(/[:-zА-Яа-я!--\/\s]/g, "");
  if (countEntries(input.value, ".") > 1 || input.value == ".") {
    input.value = input.value.slice(0, -1);
  }
});

deleteSymbol.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});

document.querySelector(".numbers").addEventListener("click", (event) => {
  const target = event.target;
  switch (target) {
    case document.querySelector('li button[data-number="1"]'):
      displayInf(1);
      break;
    case document.querySelector('li button[data-number="2"]'):
      displayInf(2);
      break;
    case document.querySelector('li button[data-number="3"]'):
      displayInf(3);
      break;
    case document.querySelector('li button[data-number="4"]'):
      displayInf(4);
      break;
    case document.querySelector('li button[data-number="5"]'):
      displayInf(5);
      break;
    case document.querySelector('li button[data-number="6"]'):
      displayInf(6);
      break;
    case document.querySelector('li button[data-number="7"]'):
      displayInf(7);
      break;
    case document.querySelector('li button[data-number="8"]'):
      displayInf(8);
      break;
    case document.querySelector('li button[data-number="9"]'):
      displayInf(9);
      break;
    case document.querySelector('li button[data-number="0"]'):
      displayInf(0);
      break;
    case document.querySelector('li button[data-number="."]'):
      if (countEntries(input.value, ".") > 0 || input.value == ".") {
        return;
      } else {
        displayInf(".");
      }
      break;
  }
});

document
  .querySelector('[data-clear="clear"]')
  .addEventListener("click", () => clear());

document
  .querySelector(".main__input-right")
  .addEventListener("click", (event) => {
    const target = event.target;

    switch (target) {
      case document.querySelector('li button[data-operator="+"]'):
        mainObj.operandA = input.value;
        mainObj.operator = "+";
        clear();
        break;
      case document.querySelector('li button[data-operator="-"]'):
        mainObj.operandA = input.value;
        mainObj.operator = "-";
        clear();
        break;
      case document.querySelector('li button[data-operator="*"]'):
        mainObj.operandA = input.value;
        mainObj.operator = "*";
        clear();
        break;
      case document.querySelector('li button[data-operator="/"]'):
        mainObj.operandA = input.value;
        mainObj.operator = "/";
        clear();
        break;
      case document.querySelector('li button[data-operator="equals"]'):
        isResultShown = true;
        mainObj.operandB = input.value;
        if (
          typeof mainObj.operandA != null &&
          typeof mainObj.operandB != null
        ) {
          switch (mainObj.operator) {
            case "+":
              roundIt("+");
              break;

            case "-":
              roundIt("-");
              break;
            case "/":
              roundIt("/");
              break;
            case "*":
              roundIt("*");
              break;
          }
          mainObj.operandA = null;
          mainObj.operandB = null;
        }
        break;
    }
  });

//FUNCTIONS DECLARATIONS
function countEntries(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

function displayInf(data) {
  if (isResultShown == true) {
    clear();
    isResultShown = false;
  }
  input.value += data;
  input.focus();
}

function clear() {
  input.value = "";
  input.focus();
}
function clearAll() {
  mainObj.operandA = null;
  mainObj.operandB = null;
  clear();
}

function roundIt(s) {
  input.value = eval(Number(mainObj.operandA) + s + Number(mainObj.operandB))
    .toFixed(3)
    .replace(/[,.]?0+$/, "");
}
