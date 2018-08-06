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