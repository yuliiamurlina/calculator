"use strict";

//VARIABLES
const input = document.querySelector(".main__output input");

//FUNCTIONS CALLS

//LISTENERS
input.addEventListener("input", () => {
  input.value = input.value.replace(/[:-zА-Яа-я!--\/\s]/g, "");
  if (countEntries(input.value, ".") > 1) {
    input.value = input.value.slice(0, -1);
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
