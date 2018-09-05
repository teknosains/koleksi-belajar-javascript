/**
 * UMD (Universal Module Definition)
 * 
 * Pattern ini sangat umum digunakan oleh banyak library
 * pakai Pattern ini
 * 
 * kenapa dinamai Universal, karena Patern ini mengakomodasi implementasi module
 * di environment yang berbeda seperti Browser, Node.JS, AMD dll
 * 
 * Pattern ini seringkali memakai Revealing Module Pattern sebagai factory function nya
 */
(function(global, factory) {
  if (typeof define === 'function' && define.amd) {
    // support untuk AMD
    define([], factory);
  } else if (typeof module === 'object') {
    // support untuk Node.JS
    module.exports = factory();
  } else {
    // support untuk Browser (global adalah global window)
    // namai Library kita "Calculator"
    global.Calculator = factory();
  }
}(this, function() {
  // Revealing Module Pattern
  // private properties
  var _tambah = function(a, b) { return a + b; };
  var _kurang = function(a, b) { return a - b; };
  var _kali = function(a, b) { return a * b; };
  var _bagi = function(a, b) { return a / b; };
  
  // public properties
  var Calculator = {
    tambah: _tambah,
    kurang:_kurang,
    kali:_kali,
    bagi: _bagi
  };
  
  return Calculator;
  
}));



// dengan cara diatas, sekarang kita punya Library bisa dipakai dimana saja
// termasuk di Node.JS, lihat file test_umd_pattern.js untuk penggunaan di Node.JS

/**
 * Untuk penggunaan di browser tinggal begini saja
 * 
 * Calculator.tambah(3, 4) // 7
 * Calculator.kurang(5, 2) // 3
 */
