/**
 * Callback adalah ketika function punya argument function
 */
 
 function aritmatika(a, fn) {
     return function(b) {
         return fn(a, b);
     }
 }

 function tambah(a, b) {
     return a + b;
 }

 function kali(a, b) {
     return a * b;
 }

 // tambah basis 5
 var tambahLima = aritmatika(5, tambah);

 tambahLima(6); // 5 + b
 tambahLima(4); // 5 + 4;

 var kaliLima = aritmatika(5, kali);

 kaliLima(6);  // 5 x 6
 kaliLima(4);  // 5 x 4