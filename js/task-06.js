"use strict";

let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число");

  if (input !== null) {
    const notANumber = Number.isNaN(+input);
    if (notANumber) {
      continue;
    }
    numbers.push(input);
    total += +input;
  }
} while (input !== null);

console.log(total);
