/**
 * Ada 3 Cara untuk mendeklrasikan variable di javascriot
 * yaitu dengan : var, let, dan const
 */

 var name = "budi";
 let age = 20;
 const gender = "pria";

 // sekarang sebaiknya tidak lagi pakai var, tapi pakailah let atau const

 // var, bersifat global/function scoped dan bisa berubah jika ada yang rubah dan di re-deklarasi
 // meski di dalam function

 var test = "abc";
 function rubah() {
    var test = "cde";
 }

 rubah();
 console.log(test); // output: cde

 // lihat kan test sekarang isinya berubah, pada browser saat kita deklrasi
 // variable global pake var...ia akan di sematkan ke window object
 // dan akan tersedia/bisa diakses dengan window.ourVar

 var aku = "pinter";

 window.aku; // pinter

 // ingat..itu hanya di browser, di Nodejs console, tidak ada window object

 // nah kalo pakai Let itu gak berubah, itu karena let adalah block-scoped variable
 // artinya hanya bisa diakses/available di dalam scope/block dimana ia dibuat
 let test = "abc";
 function rubah() {
    let test = "cde"; // scope nya local
 }

 rubah();
 console.log(test); // output: abc....gak berubah

 // di dalam IF block scope,
if(true) {
    let halo = "halo";
    var haloVar = "halo"; 
    console.log(halo); // halo
}

console.log(halo); // error
console.log(haloVar); // halo


//contoh let dalam for
for(let x = 0; x < 10; x++) {
    console.log(x);
}
  
console.log(x); // Error: x is not defined

// var dalam for
for(var x = 0; x < 10; x++) {
    //console.log(x);
}
  
console.log(x); // 10

// lihat bahwa var itu bisa diakses di luar for, karena klo pake var si Javascript engine
// akan buatkan seperti ini dibelakang
var x;
for(x = 0; x < 10; x++) {
    //console.log(x);
}

console.log(x); // 10

 // gunakan const untuk membuat Constant
 const SPESIES = "Human";

 // const akan error jika variable nya kita re-assigned/rubah
 const x = "abc";

 x = "cds"; // error:  Assignment to constant variable.

 //juga gunakan const jika kita akan membuat variable yang nilainya constant

 const PI = 3.14;

 // untuk tipe data non-primitif, const tetap tidak bisa di re-assigned,
 // namun value nya bisa berubah (mutable)

 const x = [1, 2, 3];

 x.push(4);

 console.log(x); // [1, 2, 3, 4];

 x = [5, 6]; // Error Assignment to constant variable

 // pada const, kita wajib membuat assign value
 const m = "test"; // valid
 const n; // Error: missing initializer in const

/**
 * let & const hanya dapat diakses setelah ia di deklarasikan
 */
 console.log(abc); // undefined
 var abc = "abc";

 //karena pake var, kode diatas valid dan tidak error, hanya saja value variable nya undefined
 // nah kalao pakai let dan const, itu pasti error...karena let dan const 
 // hanya bis diakses setelah ia di deklarasi

 let op = 2; // sama juga klo pake const op = 2;
 console.log(op); // 2 

 // kode dibawah ini error
 console.log(kl); 
 let kl = 2; 

 // error
 mm = 2;
 let mm;
 

 /**
  * Contoh behaviour kampret dari var, 
  * saat kita bikin callback function didalam loop
  *
  */

  for (var i = 0; i < 10; i++) {
    // ceritanya kita coba delay eksekusi, biar server gk lemot
    setTimeout(function() {
      console.log(i);
    }, 1000);
  }

  // bukannya hasilin: 0, 1, ...9 , ia malah hasilin 10, 10, 10 ....
 
  // gimana biar hasilnya bener ?
  // pake let
  for (let i = 0; i < 10; i++) {
    // ceritanya kita coba delay eksekusi, biar server gk lemot
    setTimeout(function() {
      console.log(i);
    }, 1000);
  }

  // output: 0, 1, 2, ...

  /**
   * const tidak bisa dipakai di loop for(;;)
   */
  for(const i = 0; i < 10; i++) {
    console.log(i);
  }
  // saat ietrasi pertama itu success, tapi iterasi berikutnya Error
  // ini karena si loop mencoba untuk me re-assign variable yang mana gak bisa
  // kalau pakai const

  // TAPIII...const bisa di loop for-in dan loop for-of
 
  let arr = [1, 2, 3];

  for (const x of arr) {
    console.log(x); // 1, 2, 3
  }

  for (const x in arr) {
    console.log(x); // awas, klo for-in dia akan coonvert value nya ke string
    // output: "1", "2", "3"
  }

  let mhs = {
    name: "Budi",
    age: 20,
    isCool: true
  };

  for (const n in mhs) {
    console.log(mhs[n]); // Budi, 20, true
  }

  for (const n of mhs) { // error, karena for-of gk bisa dipake buat nge-loop object
    console.log(mhs[n]); 
  }

  /**
   * Resiko Bahaya menggunakan var/let/const di variable Global
   * 
   * karena declara bisa dimana saja, maka harus hati-hati..
   */

   var Date = "hari ini";

   // Date diatas akan meng-override built-in/native library Date()
   // jadinya gk bisa akses semua fungsionalitas dari Date()
   // Oleh karena itu penting untuk mengenali Native Object/Class di Javascript seperti Date(), Function(), Object(), Number() dll..
   // agar tidak salah saat membuat variable

   
