/**
 * Fungsi/Function sama seperti di bhs pemrograman lain
 * yaitu gunanya untuk meng-eksekusi sekumpulan statement/perintah
 * 
 */

 let o = 3;
 let p = 4;
 
 let j = o + p; 

 /**
  * Daripda buat seperti diatas, kita bisa buatkan sebuah fungsi agar 
  * lebih flexible
  */
  function tambah(o, p) {
      return o + p;
  }


/**
 * Global Context VS Local Context
 */


// Global context 

function myFunction() { // function Declaration

    // local context
}

// di Javascript, sebuah fungsi akan dahulu memproses
// apa-apa saja yang di local context nya sendiri
// sebelum melihat ke Lexical context/Global context


function add() {
    let a = 2;
    let b = 3;
    return a + b;
}

add(); // 5

/**
 *  pada function add() diatas, saat fungsi itu di panggl, dia
 *  akan cek apakah semua kebutuhan operasi-nya ada di local context nya atau tidak,
 *  jika ya maka dia akan eksekusi itu. 
 *  
 *  contoh saat ada statement a + b , artinya javascript akan cek apakah variable a dan b ada di local 
 *  context nya terlebih dahulu atau tidak, jika ya maka lakukan eksekusi
 * 
 *  jika tidak maka, javascript akan cek ke Global context, jika ada maka lakukan eksekusi,
 *  jika tidak ada maka keluarkan Error
 */

 let x = 3; // di global context

 function kali() {
     let y = 4;
     return x * y;
 }

 kali();

 /**
  * saat fungsi kali() dipanggil, ternyata ia melakukan operasi x * y
  * dia akan cek apakah variable x dan y ada di lokal context nya atau tidak.
  * ternyata x tidak ada, maka cari di Global context...booom ketemu variable x
  * maka ambil x itu, 
  * 
  * lalu cek y, eh ada di local context ..karena sudah ketemu dua-duanya..maka segera lakukan
  * operasi x * y
  */

  // DI javascript function juga bisa dibuat sebagai expression
  // Function Expression adalah function yang di assign langsung ke variable

  let hello = function(text) {
      return text;
  };

 hello('hello'); // hello

 let test = hello('hello');

 console.log(test); // hello

  // jadi pada dasarnya let hello = function() {}  sama dengan function hello() {}

 /**
  * Catatan: Function expression tidak di Hoisting seperti function Declaration,
  * makanya kalao pakai function Expression, wajib diletakan dibawah nya
  */

  // Function Delaration
  cek();
  function cek() {
      console.log('Hello'); // Hello
  }

  // lihat function cek() diatas kita panggil sebelum-nya. Ini valid
  // di Javascript karena di belakang, si Javascript engine memposisikan function ()
  // di urutan teratas (Hoisting). Alias ia dibuat seperti ini di belakang layar
  function cek() {

  }
  cek();

// Beda dengan Function Expression
hi(); // ReferenceError: hi is not defined
let hi = function() {
    console.log('Hi');
};

// lihat kan Error, itu karena hi tidak di Hoisting oleh Javascript,,makanya mesti dipanggil
// setelah functionnya di definisikan

let hi = function() {
    console.log('Hi'); // Hi
};

hi();


 /**
  *  Default Paramater value
  */

  /**
   * Sebuah function bisa memiliki banyak parameter, 
   * dulu Javascript tidak support Default parameter value seperti pda bhs programan lain
   * tapi sekarang ia sudah support
   */
  function setName(name = "Budi") {
      console.log(name);
  }

  setName(); // output: Budi
  setName('Agus'); // output: Agus

  /**
   * paramater tidak di kirim? maka default value nya ada undefined
   */

  function setData(nama, umur) {
      console.log(nama); // Budi
      console.log(umur); // undefined
  }

  setData('Budi');

  /**
   * Function di Javascript disebut juga first-class Object
   * apa sih itu ?
   * 
   * first-class object artinya function dijavascript support semua operasi
   * seperti bisa dijadikan argumen, bisa di return, bisa di assign ke variable
   */

   // function as Argumen
   function setUser(name, fnCheck) {

   }

   setUser("budi", function() {} ); //function di jadikan paramater/argumen

   // function bisa di return
   function retFunction(name) {
       return function() {
           
       }
   }

   //function bisa di assign ke variable, atau biasa disebut function expression
   const budi = function() {
        //
   };

   /**
    * Function return value
    *
    * sebuah function bisa punya return value bisa juga tidak. Namun jika function tidak punya
    * syntax return, maka secara default dia itu me-return undefined
    */

    function returnit() {
        // bla bla
    }

    returnit(); // undefined

    /**
     * Function Hoisting
     */

     cek();

     function cek() {
         console.log('cek met');
     }

     /**
      * Perhatikan function cek() diatas, dipanggil sebelum di deklarasi
      * padahal umumnya seperti bhs pemrograman lain, deklrasi dulu baru pemanggilan
      *
      * di Javascript beda. saat Javascript Engine akan mengeksekusi sebuah script atau block
      * katakanlah script.js
      * maka javascript engine akan mencari function-function dulu dibanding yang lain. 
      * function-function yang ketemu langsung di angkat keatas (hoisted) ke daftar eksekusi
      * (call stack)
      * sisanya baru javascript engine akan eksekusi yang lainnya seperti variable dll
      */

      //apakah Function expression di Hoisted? 
      // jawaban nya adalah tidak
      sayHi();

      const sayHi = function() {
          console.log('Hi');
      };

      // fungsi diatas error...karena statement diatas bentuknya adalah
      // variable assignment / expression. maka javascript engine akan eksekusi 
      // layaknya variable biasa.
      // makanya function expression itu wajib di panggil setelah di definisikan/di assign

      const sayHi = function() {
          console.log('Hi');
      };

      sayHi();


    /**
     * Function Arguments
     * 
     * untuk melihat apa-apa saja yang dikirim ke sebuah function melalui paramater nya
     * kita bisa menggunakan attribute "arguments"
     */
    function cek(a, b, c) {
        console.log(arguments.length); // 3...panjang value argument yang dipassing
        console.log(arguments); // {0: 2, 1: 3, 2: 4}
        console.log(arguments[0]); // 2
    }
    cek(2, 3, 4);

    // Di javascript function tanpa paramater-pun bisa kita passing-in value

    function coba() {
        console.log(arguments.length); // 3
        console.log(arguments); // // {0: 4, 1: 5, 2: 6}
        console.log(arguments[0]); // 4
    }
    coba(4, 5, 6);


    // "arguments" adalah property lokal dari sebuah function
    // jadi ia hanya bener-bener milik function-nya sendiri, tidak diturunkan
    // ke function lain
    
    function test(a, b) {
        console.log(arguments); // { 0: 1, 1: 2 }
        return function(c, d) {
            console.log(arguments); // { 0: 3, 1: 4 }
        }
    }
    
    test(1, 2)(3, 4);


    /**
     * Menghitung jumlah Paramater sebuah function dengan <Function.length>
     * 
     */
    function fork(a, b) {

    }
    fork.length; // 2

    /**
    * Catatan: ...rest paramater tidak dihitung dalam Function.length
    * lihat pembahasan rest paramater selengkapnya di file 32_rest_spread_operator.js
    */
    function rest(a, b, ...c) {

    }
    rest.length; // 2 ...hanya ada 2 paramater... yang ...c gak digitung

    /**
     * Catatan: Jika function mempunyai default paramater value, makanya yang akan dihitung
     * adalah paramater sebelum paramater yang ada default valuenya 
     */
    let hi = function(a, b = 3) {

    };
    
    hi.length; // 1 , jumlah paramater-nya hanya 1...karena yang kedua ada default valuenya, jadi gk dihitung

    let hi2 = function(a, b = 3, c) {

    };

    h2.length; // 1, hanya paramater sebelum paramater yang ada default valuenya yang dihitung

    let h3 = function(a, x, b = 3, c) {

    };

    h3.length; // 2, hanya a dan x yang dihitung..karena mereka berada sebelum paramater yang punya default value

    // ini memang aneh...saya mah pengennya mau ada default paramater atau tidak
    // mestinya tetap bisa dihitung...


    // Behaviour dari default paramater ini cukup aneh-aneh...silahkan baca lengkapnya di
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters