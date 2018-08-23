/**
 * Function return function sangat umum di Javascript, ini sering disebut juga Closure
 * disaat bersamaan, ini juga sebenarnya bisa disebut Partial Application
 */

 function perkalian(a) {
     return function (b) {
         return a * b;
     }
 }

 // normal call
 perkalian(2)(5); // 2 x 5 = 10

 //perkalian basis 10
 var kaliSepuluh = perkalian(10); // di passing secara Parsial

 kaliSepuluh(2); // 10 x 2
 kaliSepuluh(4); // 10 x 4

 // basis 5
 var kaliLima = perkalian(5);
 
 kaliLima(5); // 5 x 5


 // lihat bahwa dengan Partial Application, kita membuat lebih flexible
 // contoh lain

 function buildUrl(schema) {
    return function (domain, path) {
      console.log(`${schema}://${domain}/${path}`); 
    }
  }
  
  let httpsUri = buildUrl2('https'); // fixed to https

  httpsUri('teknosains.com', 'programming'); // "https://teknosains.com/programming"
  httpsUri('twitter.com', 'programming'); // "https://twitter.com/programming"


/**
 * Contoh lanjutan, Partial-nya sekarang function
 * 
 * Kasus: mmebuat aplikais perhitungan Factorial
 * 
 * n = 4 -> 4 x 3 x 2 x 1
 * 
 * terlihat kalau ia pakai perkalian...dan kita sudah ada fungsi perkalian sendiri
 */
function kali(a, b) {
  return a * b;
}

function factorial(fn) {
  return function(n) {
    let temp = 1;
    while (n >= 1) {
      temp = fn.call(null, n, temp);
      n--;
    }
    
    return temp;
  }
}

let fact = factorial(kali); // partial
fact(3); // 6
