"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
  //variables
  const output = document.querySelector(".main__output"),
    clearAllButton = document.querySelector('[data-clear="clearAll"]'),
    deleteSymbol = document.querySelector('[data-clear="delete"]');

  let mainStr = "",
    secondary;

  //functions calls
  clearAll();

  //listeners
  clearAllButton.addEventListener("click", () => {
    clearAll();
  });

  document.addEventListener("keydown", (event) => {
    switch (event.code) {
      case "Digit1" || "Numpad1":
        displayInf(1);
        break;
      case "Digit2" || "Numpad2":
        displayInf(2);
        break;
      case "Digit3" || "Numpad3":
        displayInf(3);
        break;
      case "Digit4" || "Numpad4":
        displayInf(4);
        break;
      case "Digit5" || "Numpad5":
        displayInf(5);
        break;
      case "Digit6" || "Numpad6":
        displayInf(6);
        break;
      case "Digit7" || "Numpad7":
        displayInf(7);
        break;
      case "Digit8" || "Numpad8":
        displayInf(8);
        break;
      case "Digit9" || "Numpad9":
        displayInf(9);
        break;
      case "Digit0" || "Numpad0":
        displayInf(0);
        break;
      case "Backspace":
        mainStr = mainStr.slice(0, -1);
        output.innerHTML = mainStr;
        break;
      case "Period":
        if (mainStr.includes(".")) {
          return;
        } else {
          displayInf(".");
        }
        break;
    }
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
        if (mainStr.includes(".")) {
          return;
        } else {
          displayInf(".");
        }

        break;
    }
  });

  document
    .querySelector(".main__input-right")
    .addEventListener("click", (event) => {
      const target = event.target;

      switch (target) {
        case document.querySelector('li button[data-operator="+"]'):
        // secondary = plusAndMinus("+");
        // clearAll();
        // mainStr = "";
        // break;
        case document.querySelector('li button[data-operator="-"]'):
          // secondary = plusAndMinus("-");
          // clearAll();
          // mainStr = "";
          break;
        case document.querySelector('li button[data-operator="equals"]'):
          // output.innerHTML = +(+mainStr + secondary);
          // secondary = "";
          // mainStr = "";
          break;
      }
    });

  deleteSymbol.addEventListener("click", () => {
    mainStr = mainStr.slice(0, -1);
    output.innerHTML = mainStr;
  });

  //   function declarations

  function displayInf(data) {
    mainStr += data;
    output.innerHTML = mainStr;
  }

  function clearAll() {
    output.innerHTML = "";
    mainStr = "";
  }

  function plusAndMinus(s) {
    if (s === "-") {
      return +-mainStr;
    } else {
      return +mainStr;
    }
  }
});
