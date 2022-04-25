"use strict";

function BinarioADecimal(num) {
  let result = 0;
  for (let i = 0; i < num.length; i++) {
    result = result + num[i] * 2 ** (num.length - 1 - i);
  }
  return result;
  // tu codigo aca
  // algo
}

function DecimalABinario(num) {
  var result = "";
  while (num != 0) {
    result = (num % 2) + result;
    num = Math.trunc(num / 2);
  }
  return result;
  // tu codigo aca
}
 
// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
