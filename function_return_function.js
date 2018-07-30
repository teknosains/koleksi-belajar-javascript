/**
 * Function return function sangat umum di Javascript, 
 */

 function perkalian(a) {
     return function (b) {
         return a * b;
     }
 }

 //perkalian basis 10
 var kaliSepuluh = perkalian(10);

 kaliSepuluh(2); // 10 x 2
 kaliSepuluh(4); // 10 x 4

 // basis 5
 var kaliLima = perkalian(5);
 
 kaliLima(5); // 5 x 5