"use strict";

/**
 * Apa sihi itu use strict ? 
 * 
 * use strict adalah kita ngasih tau Javascript engine untuk pake
 * versi modern nya alih-alih pake engine yang lama.
 * 
 * jadi kalo kita pake "use strict", dan kode kita ada yang masih adopsi
 * syntax atau cara/teknik jadul,,,maka akan muncul error
 * 
 * makanya jika develop javascript dan targetnya adalah browser-browser versi baru,
 * pakailah "use strict" 
 * 
 * use strict wajib ditempatkan di baris paling atas sebuah script, gak boleh gak
 * 
 * atau bisa juga kita Apply ke sebuah function namun harus di paling atas block lokasinya
 */

 function strictMode() {
   'use strict';

    //..
    //..
 }
 /**
  * Masalah yang bisa terjadi, bayangkan kita punya 2 file
  * 1. library1.js (strict mode)
  * 2. library2.js (non-strict mode)
  * 
  * saat kita mau menggabungkan ke-2 file itu menjadi 1 file misalnya...
  * maka kita mesti pastikan urutannya bener...yaitu yang strict mode yang paling atas
  * sebab jika sebaliknya, maka seluruh script nantinya dianggap bukan dalam strict mode

  * oleh karenya direkomendasikan membungkus semua script kita dalam self-invoking 
  * function seperti ini
  */

  (function() {
    'strict mode';

    const PI = 3.14;

    let doThis = function() {

    };

    let doThat = function () {

    };

    // semua kode kita ada ddalam sini
    // ..
    // ..

  })();

  // catatan, this context untuk function dalam strict mode, itu by default undefined
  // dimana dalam normal mode itu refer ke global window object
  function test() {
    'use strict';
    console.log(this); // undefined
  }

  test();

  // bandingkan dengan ini
  function test2() {
    console.log(this) // [object Window]
  }

  // self-invoking function, this nya merujuk ke [object Window]
  (function() {
    'strict mode';
    console.log(this); // [object Window]
  })();

  // itulah kenapa kalao kita menulis sebuah script/library dalam strict mode, sebaiknya
  // di masukan dalam self-invoking function seperti diatas