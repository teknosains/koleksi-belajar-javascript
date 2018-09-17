/**
 * JavaScript juga mengenal Void operator
 * 
 * hanya saja di Javascript fungsinya hanya untuk meng-evaluasi suatu expression
 * dan selalu me-return undefined
 */

void 0
void (0)
void "hello"
void (new Date())
void function test() { console.log('test') }

// semua diatas hasilnya undefined

/**
 * Apa sih kalao gitu gunanya? ...dahulu kala sebelum JavaScript versi ES5,
 * 
 * undefined bisa di overrride sesuka hati 
 */

// javascript jaman old kode berikut ini valid
var undefined = 'new val';
console.log(undefined); // new val

// ini bisa masalah...karena kita banyak melakukan validasi dengan undefined dimana-mana
if (a == undefined) {}
if (x != undefined) {}

// bayangkan kalau undefined nya di override...jadi ngaco kan....

// sekarang di Era ES5 kesini...undefined sdh gak bisa di override lagi...
// jadi lebih aman, namun untuk kompatability...karena masih banyak orang pake browser jadul,
// maka kita mesti cari akan gimana caranya validasi dengan undefined dengan aman

// maka di pakailah operator void, karena ia selalu menghasilkan undefined

// syntax: void <anything>

void 0 == undefined; // true
void 23 == undefined; // true
void 'test' == undefined; // true
void(0) == undefined; // true
void function test() { console.log('test') }; // undefined

// nah dengan behaviour ini dan karena alasan kompatability, banyak orang masih validasi 
// undefined dengan void

if (typeof a == void 0) {} // artinya cek apakah type dari a itu undefined

// contoh Library Unit Test Jasmine, pakai ini
// lihat file ini dibaris paling bawah
// https://github.com/codetrash/jasmine/blob/master/src/core/Spec.js

/**
 * Void juga memaksa sebuah function di evalusasi sebagai function expression
 * alih-alih sebagai function declaration
 */

function test() {
  console.log('hai');
}();

// function diatas Error, karena function itu jenisnya declaration
// kita mesti ubah menjadi immediately-invoked-function 

(function test() {
  console.log('hai'); // hai
})();

// atau kita ubah ke function expression agar tdk Error, seperti ini

var test = function () {
  console.log('hai'); // hai
}();

// cara lain adalah dengan menambahkan void operator
void function test() {
  console.log('hai'); // hai
}();

// hanya saja perlu di-ingat...Void selalu menghasilkan undefined, maka function diatas
// tidka bisa dipanggil
// seperti ini
test(); // Error not defined

void function test() {
	console.log(232)
}

test(); // Error: test is not defined

// kita juga sering lihat penggunaan void operator ini untuk url
<a href="javascript:void(0);">link</a>

// ini agar link itu tidak menuju kemana-mana