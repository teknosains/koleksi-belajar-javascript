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
// ternyata kalau argumen nya cuma satu new Array(2), itu artinya array akan berisi undefined
// value sebanyak 2, Array(3) berisi undefined value sebanyak 3