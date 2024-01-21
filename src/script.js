"use strict";

//VARIABLES
const input = document.querySelector(".main__output input");

input.focus();
//FUNCTIONS CALLS

//LISTENERS
input.addEventListener("input", () => {
  input.value = input.value.replace(/[:-zА-Яа-я!--\/\s]/g, "");
  if (countEntries(input.value, ".") > 1 || input.value == ".") {
    input.value = input.value.slice(0, -1);
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
      if (countEntries(input.value, ".") > 0 || input.value == ".") {
        return;
      } else {
        displayInf(".");
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
  input.value += data;
}
