/**
 * Functional programming (FP) sebenarnya adalah proses membangun software
 * dengan menggunakan Pure Function yang disusun khusus (COmposing Function)
 * , mencegah Shared-Data, mencegah Mutable data dan mencegah side-effect. 
 * 
 * paradigma ini tentu berbeda bahkan bisa dibilang kebalikan dari OOP
 */

let arr = [1, 2, 3];

let rs = arr.map(function(item) { // functional
  return item * 2;
});

console.log(arr); // [1, 2, 3]  <--- tidak berubah 
console.log(rs); // [2, 4, 6]

// dengan functional style seperti diatas, data arr tidak berubah sama sekali
// hal ini selaras dengan tujuan Functional Programming yaitu mencegah Mutable data/side efect