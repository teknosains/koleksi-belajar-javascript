/**
 * Basic javascript sama seperti bahasa lainnya
 * yakni soal tipe data, variable, output ke console atau browser
 */

 /**
  * Sekarang deklarasi variable lebih ditekankan untuk menggunakan operator let dan const
  * dibanding pake var
  */

 var nama = "Budi"; // boleh, tapi sekarang tidak di rekomendasi
 
 let nama2 = "Budi"; // recommended
 
 const race = "Asian"; // recommended

 // untuk membuat constant juga pake keyword const

 const SPESIES = "Human";

 // output ke console

 console.log(nama);
 console.dir(nama);

 // output ke browser
 // alert(nama);

 /**
  * Data Types di Javascript (ECMAScript standar)
  * 
  * 1. null
  * 2. undefined
  * 3. string
  * 4. number
  * 5. boolean
  * 6. symbol (baru ada di ECMAScript 2015)
  * 7. Object (non-primitif)
  * 
  * Kok array gak masuk? karena di Javacsript Array adalah turunan dari Object
  */


  let name = "Budi"; //string
  console.log(typeof name); //string

  let age = 40; // number
  
  let isTrue = true; // bolean
  let isFalse = false; //bollean

  let hobby; 
  console.log(hobby); // undefined..undefined itu sama dengan "no-assigned"..jadi variablenya tidak di assign sesuatu
  
  let move = null; // null ...null menunjukan ketidakadaan (emptyness)

  /**
   * perlakukan khusus Javascript kepada tipe data
   */
  let a = "2" * 3; // 6 .."2" akan di conversi ke number
  let b = "6" / 2; // 3 .. "6" akan dikonversi ke number

  let c = "2" + 3; // 23 .. jika opeatornya +, dianggap konkatenasi...jadinya 3 akan diconvert jadi string

  let d = "test" * 2; // NaN
  let z = "test" + 2; // test2 ..ingat tanda + dianggap konkatenasi pada operasi aritmatika

  //konversi number ke string

  let u = 123; //number
  let x = u.toString(); // x skrg jadi string 123

  //konversi string ke number
  let m = "123";
  let n = parseInt(m); // 123 integer
  let o = parseFloat(m); //123 floating point