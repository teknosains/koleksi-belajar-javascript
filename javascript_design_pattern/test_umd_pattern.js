/**
 * Ini adalah untuk nge-test module yang kita define di file 
 * umd_pattern.js
 * 
 * karena module itu pakai UMD (universal Module Definition), maka di Node.JS
 * pun sekarang kita bisa pakai
 * 
 * begini caranya
 */

var calc = require('./umd_pattern.js');

console.log(
  calc.tambah(3, 4)
);

console.log(
  calc.kurang(5, 3)
);