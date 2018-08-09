/**
 * Apa sih Javascript Engine dan Runtime?
 */

/**
 * Javascript Engine bertugas untuk memparsing/membaca kode javascript kita
 * agar bisa di baca oleh mesin/computer untuk kemudian di eksekusi dan
 * hasil nya dapat terlihat oleh mata kita di browser atau di console. ia juga
 * bertugas menga-lokasi memory, release memory (garbage collection)
 * 
 * contoh Javascript Engine yang populer adalah V8 Engine dari Google, ia dipakai
 * oleh Node.jS dan browser Chrome. ada juga SpiderMonkey, javascript engine yang dipakai
 * oleh Mozilla termasuk di Firefox dan peoruk Mozilla lainnya
 * 
 * Ada juga Chakra, javascript engine yang dibuat oleh Microsoft..ini dipakai di browser Edge
 * 
 * Javascript engine itu klo dibahasa lain seperti C/C++ adalah Compiler-nya. 
 */

 /**
  * Javascript runtime? 
  *
  * adalah istilah untuk runtime environment di Javascript. runtime environment itu
  * ada di browser...tapi ada juga di di Node.JS. di browser, kita mampu mengakses
  * memakai semua library built-in javascript seperti DOM, Window Object dll 
  * saat kita eksekusi kode kita.
  * 
  * nah klo di Node.js, saat runtime...kita dibisa mengakses library-library default yang disediakan
  * Node.JS seperti library filesystem, buffer dll
  */


  /***
   * Bagaimana Javascript engine di Buat? 
   * 
   * itumah terserah mau gimana, tergantung yang buat...si Google, Mozilla, Microsoft
   * menulis Javascript Engine masing-masing...tapiii mereka harus mengikuti standar dialek
   * atau spesifikasi dari bahasa Javascript itu sendiri. Sekarang, standar dialek Javascript
   * di pegang oleh organisasi ECMA International (https://www.ecma-international.org/),
   * 
   * mereka membuat standar Javascript dengan sebutan Kode:  ECMAScript atau ES
   * 
   * Nah jika ECMAScript membuat/mengharuskan fitur-fitur baru/tertentu...maka yang buat
   * Javascript engine seperti Google, Mozilla dll harus update tuh JS Engine nya biar sesuai
   * dan kompatibel.
   * 
   * Jika mereka telat meng-update Javascript engine nya, maka akan membuat browser-nya tidak
   * kompatibel dengan fitur-fitur baru itu.
   */

  /**
   * Javascript Single-thread
   * 
   * Javascript adalah single-thread artinya ia hanya bisa eksekusi satu statement dalam sekali waktu
   * 
   * tapi kok kita bisa pakai teknik Asyincron? itu bukan karena javascript
   * nya..tapi karena si browser membuat call (memanggil)/eksekusi masing-masing kode secara terpisah
   * alias prosesnya masing-masing 
   * 
   * jadi sebenarnya Acynrnous function seperti setTimeout, ajax dll...itu gda di Javascript Engine,
   * dia di proses/dilakukan di browser. Atau klo di Node.JS, dia dilakukan di internal Nodejs-nya
   * dan bukan di Javascript Engine seperti V8, Spidermonkey dll
   * 
   * lihat video detail nya https://www.youtube.com/watch?v=8aGhZQkoFbQ&feature=youtu.be
   */

  console.log('Hi');

  setTimeout(() => {
    console.log('Budi');
  }, 1000);
  
  console.log('Mr.');

  /**
   * saat kode diatas di execute, outpunya
   * Hi
   * Mr.
   * Budi
   * 
   * meskipun kita set timernya menjadi 0
   */

  console.log('Hi');

  setTimeout(() => {
    console.log('Budi');
  }, 0);
  
  console.log('Mr.');
  console.log('Mr.');
  console.log('Mr.');
  console.log('Mr.');

  /**
   * Tetap saja outpunya akan 
   * 
   * saat kode diatas di execute, outpunya
   * Hi
   * Mr.
   * Mr.
   * Mr.
   * Mr.
   * Budi
   * 
   * lihat si Budi tetap nampil terakkhir.
   * 
   * berapapun timernya, si browser webapi akan nge-hold eksekusinya sampai callstack kosong
   * 
   * pokonya jika dalam suatu script/block code si browser nemu Async function, 
   * maka si browser WebAPI akan hold-dulu sampai semua call stack kosong...jika sudah kosong
   * baru di push ke callstack lalu baru muncul outputnya
   * 
   * secara teknis ada beberapa istilah di Browser saat nge-runtime Javascript
   * Yaitu: callstack, WebAPI, Task Queue dan Event Loop.
   */

   // normal kode seperi ini
   console.log('Haloo');

   // akan masuk ke Call stack, lalu langsung di eksekusi untuk menampilkan hasil
   // urutan visualnya seperti: masuk_ke_callstack->callstack->eksekusi

   // kalao ada Asyn function/code seperti setTimeout dan Ajax
   let fungsi = function() {
    //
   };
   setTimeout(fungsi, 2000);
   // maka urutannya: setTimeout masuk ke callstack, "fungsi" di lempar ke WebAPI lalu 
   // proses selama 2 detik, jika sudah lempar ke Task Queue, Event Loop akan cek
   // apakah callstack ksong apa belum, jika kosong masukan "fungsi" ke callstack lalu eksekusi

   // urutan visualnya: masuk_ke_callstack->WebAPI->TaskQueu->EventLoop->callstack->eksekusi 
