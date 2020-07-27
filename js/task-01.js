"use strict";

const logItems = function (items) {
  for (let i = 0; i < items.length; i += 1) {
    console.log(`${1 + i} - ${items[i]}`);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
