/**
 * string adalah type data primitif di Javascript (lihat file 05_tipe_data_primitive.js)
 * 
 * tapi string juga spesial, ia punya akses ke berbagai method dari buil-int object String()
 * seperti toUpperCase, toLowerCase dll
 */

let str = 'myString'.toUpperCase();
console.log(str); // MYSTRING

// cek panjang string
let nama = "Budi";
console.log(nama.length); // 4 karakter

// padahal kan primitif, kok bisa punya akses ke non-primitif Object String() ? 
// contoh

let test = "My String";
// saat kita define seperti itu, javascript dibelakang membuatkan spesial object/copy dari
// variable test yang sudah dibekali/inherit dari built-in object String()
// makanya ia akan punya akses ke method-method yang terdapat dalam String() 
// seperti seperti toUpperCase, toLowerCase dll

// String juga iterable. karena iterable, kita bisa pecahin tuh jadi satu-satu karakter

let car = 'Honda';
car[0]; // H
car[1]; // o
// ..dst

// bisa juga kita akses dengan loop for-of
for (let char of car) {
  console.log(char); // H, o, n, d, a
}

// tapi meskipun iterable, string itu immutable alias tidak bisa di ubah
// per karakter

let motor = "Yamaha";
motor[0] = 'K'; // niatnya Y mau kita ganti dengan K
console.log(motor); // tetep Yamaha, bukan Kamaha

// Searching didalam string. pakai str.indexOf()

let v = "Kucing";
v.indexOf('u'); // 1
v.indexOf('K'); // 0
v.indexOf('k'); // -1  , case-sensitif, makanya tidak ada. -1 artinya tidak ditemukan

// check apakah staru karakter ada di string
if (v.indexOf('g') > -1) {
  // ada
} else {
  // tidak ada
}

let cek = "Nama saya agus";
cek.indexOf('Nama'); // 0
cek.indexOf('agus'); // 10...kata agus ketemu di 10 karakter dari depan

// function indexOf() memulai pencarian dari depan string
// kalau mau mulai dari belakang pakai lastIndexOf()

// masih banyak operasi-operasi yang melibatkan String. silahkan baca-baca ditempat lain