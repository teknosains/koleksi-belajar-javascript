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

function myFunction() {

    // local context
}

// di Javascript, sebuah fungsi akan dahulu memproses
// apa-apa saja yang di local context nya sendiri
// sebelum melihat ke Global context


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

  // DI jabascript function juga bisa dibuat sebagai expression

  let hello = function(text) {
      return text;
  };

 hello('hello'); // hello

 let test = hello('hello');

 console.log(test); // hello

 // jadi pada dasarnya let hello = function() {}  sama dengan function hello() {}

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