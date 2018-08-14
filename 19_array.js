/**
 * Array adalah tipe data spesial di javascript, 
 * Array mewarisi Function prototype secara langsung
 * 
 */
console.log(Array.__proto__ == Function.prototype); // true

/**
 * Array punya prototype method yang banyak
 */
console.dir(Array.prototype); 

// seperti
// .foreEach(), .map(), .filter(), .reduce() dll

let user = []; // type nya Array

// maka user aka punya akses ke peoperty milik Array
// user.map(), user.filter() dll

// Array juga adalah Function constructor sendiri
// jadi kita bisa juga buat Array dengan cara begini
let data = new Array('agus', 'budi', 'udin'); // ["agus", "budi", "udin"]

// lebih recommend pake [] saja jika mau buat array, karena ada kondisi 
// dimana jika kita buat misal let arr = new Array(2)
// ia akan create array [2] , tapi pas diakses arr[0] hasilnya undefinedm pdahal
// kalau yang kita mau mah kan hasilnya 2
// anehnya pas kita arr.length hasilnya adalah 2, artinya element array nya ada 2
// kan aneh
// ternyata kalau argumen nya cuma satu new Array(2) dan type nya number, 
// itu artinya array akan berisi undefined
// value sebanyak 2, Array(3) berisi undefined value sebanyak 3

let arr = new Array(2); // [undefined, undefined]
let arr = new Array(3); // [undefined, undefined, undefined]
let arr = new Array('kodok'); // ["kodok"]  <--- karena type nya bukan number, meskipun jumlah argument nya cuma 1

/**
 * Akses data Array
 * 
 * bisa pakai for, for-of atau method bawaan .forEach()
 * 
 * yang lebih reccomended kalo for-of karena tanpa callback function seperti pada forEach
 * udah gitu..forEach itu gk bisa di break; karena dia akan telusiri seluruh array konten yang
 * ada
 */
let mhs = ['Budi', 'Agus', 'Akum'];

// for-of
for (let val of mhs) {
  console.log(mhs); // Budi, Agus, Akum
}

// bisa di break
for (let val of mhs) {
  if (val == 'Budi') {
    console.log(mhs); // Bud
    break; // loop exit
  }
}

// forEach
mhs.forEach(function(item, idx) {
  console.log(item); // Budi, Agus, Akum
});

/**
 * Karena Array adalah turunan dari Object, maka kode berikut sah-sah saja
 */
let y= [1, 2, 3];
y.test = "blabla"; // membuat object, ini valid..kapan lagi ada bhs pemrograman yg bisa gini

console.dir(Array.isArray(y)); // true  

console.log(y.test); // "blabla";
console.log(y); // [ 1, 2, 3, test: 'blabla' ]
console.log(y['test']); // blabla