/**
 * Apa sih Closure? Closure ada mekanisme di Javascript dimana
 * sebuah function bisa mengakses variable di lexical scope pada
 * function parent setelah parent function di definisi dan destroy
 * 
 * pusing? 
 */

function perkalian(a) {
    return function (b) {
        return a * b;
    }
}

// perkalian basis lima
var kaliLima = perkalian(5);
/**
 * segera setelah kita tulis seperti diatas, function perkalian() dan argumen nya
 * di destroy dari memory. dan variable kaliLima sekarang berisi function definition
 * hasil return dari function perkalian()
 * 
 * dengan kata lain, dibelakang sebenarnya javascript membuatkan kode sbb:
 * 
 * var kaliLima = function (b) { return a * b; }
 * 
 * silahkan coba console.dir(kaliLima) di browser
 */

kaliSepuluh(10); // 10 x 5 = 50

/**
 * Perhatikan bahwa saat kita buat statement 
 * 
 * var kaliLima = perkalian(5);
 * 
 * itu sama dengan 
 * 
 * var kaliLima = function (b) { return a * b; }
 * 
 * lihat bahwa seharusnya variable a pada statement return a * b; itu undefined,
 * karena a sudah tidak ada kan? lihat deh sekali lagi statement ini 
 * 
 * var kaliLima = function (b) { return a * b; }
 * 
 * variable a tidak ada referensinya, tapi ternyata saat kita panggil begini 
 * 
 * kaliSepuluh(10); itu hasilnya valid dan tidak error..kenapa kok bisa? 
 * kan variable a tidak punya referensi lagi? Nah ternyata variable a itu masih ada..
 * hanya saja sekarang lokasinya sudah di pindahin sama Javascript, yaitu sekarang lokasinya 
 * ada di Scope Closure
 * 
 * jadi Javascript akan membuatkan property Closure bagi var kaliLima yang isinya a: 5
 * 
 * Closure: { a: 5 }, dan Closure ini bisa diakses oleh function kaliLima
 */

function perkalian(a) {
    return function (b) {
        return a * b;
    }
}

/**
 * Fungsi diatas itu artinya Closure: {a: [argumen value]}
 * 
 * bagaimana jika function nya begini
 * 
 * 
 */
function perkalian(a) {
    var x = 3;
    var y = 5;
    return function (b) {
        return a * b * x * y;
    }
}

//kali basis 7
var kaliBebas = perkalian(7);
kaliBebas(4);
/**
 * Apa isi Closure nya? yaap Closurenya adalah 
 * {
 *   a: 7
 *   x: 3
 *   y: 5
 * }
 * 
 * jadi kaliBebas(4) sama dengan : return 7 x 4 x 3 x 5;
 * 
 * Contoh lagi
 */

 function sayName(name) {
    var prefix = 'My Name is ';
    return function (gelar) {
        return prefix + name + gelar;
    }
 }

 var agus = sayName('Agus');
 var sayAgus = agus('S.kom');

 console.log(sayAgus); // My Name is Agus S.kom

/**
 * Apa Closure dari function diatas? yaap 
 * Closure: {
 *   name: 'Agus',
 *   prefix: 'My Name is'
 * }
 */