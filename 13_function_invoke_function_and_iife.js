/**
 * Sebuah function memanggil function yang lain, adalah salah
 * satu cara yang efektif untuk mengurangi repetitif statement
 */

 function kali(a, b) {
     return a * b;
 }

 function kaliLima(x) {
    return kali(5, x);
 }

 function kaliSepuluh(x) {
     return kali(10, x);
 }

 kaliLima(5); //25
 kaliSepuluh(6); // 60

 /**
  * IIFE (immidiate invoke function expression)
  * adalah function yang memanggil dirinya sendiri tanpa harus dipanggil
  * seperti biasa
  */

  function test () {

  }

  // call normally
  test();

  // bagaimana jika ingin function nya otomatis terpanggil tanpa harus
  // dipanggil manual ? , begini

  (function() {
    console.log('hello world'); // hello world
  })();

  // ini sangat berguna sekali dan kita akan lihat banyak menusia yang pakai
  // see folder: javascript_design_pattern

  // javascript sebenarnya melakukan ini dibelakang

  (
    function() {

    }
  );

  (); // panggil function kosong



