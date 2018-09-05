/**
 * Saat buat sebuah Library, kadang kita butuh library lainnya
 * ini artinya kita membuat library kita punya dependency terhadap library orang
 * 
 * gimana caranya di UMD pattern?
 */

(function(global, factory) {
  if (typeof define === 'function' && define.amd) {
    // support untuk AMD
    // inject jQuery library
    define(['jquery'], factory);
  } else if (typeof module === 'object') {
    // support untuk Node.JS
    // inject jQuery library
    module.exports = factory(require('jquery'));
  } else {
    // support untuk Browser (global adalah global window)
    // inject jQuery library
    // namai Library kita "Calculator"
    global.Calculator = factory(global.jQuery);
  }
}(this, function($) {
  // Revealing Module Pattern
  // private properties
  var _tambah = function(a, b) { return a + b; };
  var _kurang = function(a, b) { return a - b; };
  var _kali = function(a, b) { return a * b; };
  var _bagi = function(a, b) { return a / b; };
  
  // pakai jQuery utility disini..bebass
  // $.ajax({}) 
  // $.append()
  // dll..

  // public properties
  var Calculator = {
    tambah: _tambah,
    kurang:_kurang,
    kali:_kali,
    bagi: _bagi
  };
  
  return Calculator;
  
}));