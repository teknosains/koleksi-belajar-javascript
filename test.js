/**
 * Currying..adalah metoda apopuler di kalangan Javascript developer
 * untuk membuat function dimana argument function tersebut
 * di translate menjadi stand-alone function 
 * 
 * function(a, b) --> function(a)(b)
 */

function curry(fn) {
    return function(a) {
      return function(b) {
        return fn(a, b);
      }
    }
  }
  
  function tambah(a, b) {
    return a + b;
  }
  
  let tambahPakeCurry = curry(tambah);
  
  // lihat nih cara pakai nya: function(a)(b)
  console.log(tambahPakeCurry(2)(3)); // 5