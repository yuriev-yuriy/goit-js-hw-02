"use strict";

// const calculateEngravingPrice = function (message, pricePerWord) {
//   const words = message.split(" ");
//   const length = words.length;
//   const price = length * pricePerWord;
//   return price;
// };

const calculateEngravingPrice = function (message, pricePerWord) {
  return message(length.split(" ")) * pricePerWord;

  // return;
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120
