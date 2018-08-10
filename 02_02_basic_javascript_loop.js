/**
 * Ada banyak cara buat nge-Loop sesuatu dijavascript
 * 
 * ada:
 * - while
 * - do while
 * - for 
 * - for-in
 * - for-of
 */

 /**
  * for
  * format: for(<init>;<condition>;<update>)
  -------------------------------
  */

  for (let i = 1; i < 5; i++) {
    console.log(i);
  }

  /**
   * Cara kerja for-loop
   * 
   * tahap #1 : inisialisasi let i = 1
   * tahap #2 : Cek apakah i < 5, Jika benar maka GOTO #3, Jika salah GOTO #5
   * tahap #3 : eksekusi console.log(i);
   * tahap #4 : increment i atau i++
   * tahap #5 : exit loop
   */



  for (let i = 1; i < 5; i++) {
    console.log(i);  // 1 2 3 4
  }
  
  /**
   * di internal javascript saat eksekusi Loop diatas nilai dari i sebenarnya sampai 5
   * tapi karena ada kondisi i < 5 <=> 5 < 5 <=> false, maka loop-nya berhenti, jadinya
   * yang di-output-kan i cuma sampai 4
   */
  
   // kita bisa buktikan dengan pakai "var"
  for (var i = 1; i < 5; i++) {
    console.log(i);  // 1 2 3 4
  }

  console.log(i); // 5 <--- lihat kan sbnrnya 1 itu sampe 5, 

  /**
   * FOR-IN
   * 
   * berguna untuk nge-Loop Object
   */

  let user = {
    name: "agus",
    age: 30,
    sayName: function() {
      return 'My name is ' + this.name;
    }
  };

  for (let key in user) {
    console.log(key); // name, age
    console.log(user[key]); // agus, 30, function() {...}
  }

  /**
   * FOR-OF
   * 
   * berguna untuk nge-loop Array. atau Object lain yang bersifat 
   * iterable (mempunyai built-in property Symbol.iterator)
   */
  let nilai = [1,2,3,4];

  for (let x of nilai) {
    console.log(x); // 1, 2, 3, 4
  }

  /**
   * Cara ngecek apakah suatu Object itu iterable,
   * 
   * console.dir(obj);
   * 
   * cek di bagian __proto__ apakah ada property Symbol.iterator, jika ada
   * maka ia iterable
   */

   /**
    * Hati menggunakan Loop dengan var untuk apalagi untuk Asyncronous
    */
    for (var i = 0; i < 5; i++) {
      console.log(i); // 1, 2, 3, 4
    }

    console.log(i); // 5, <-- ini karena "var" itu hoisted ke lexical scope, makanya
    // ia masih bisa di "lihat" diluar loop
    // kalao pakai var,  dibelakang si Javscrip sbnrnya melakukan ini kepada loop diatas
    var i;
    for (i = 0; i < 5; i++) {
      console.log(i); // 1, 2, 3, 4
    }

    // lihat bahwa i naik/hoisted ke lexical invironment si for loop
    // perilaku seperti ini bisa kampret kalao kita punya operasi Asyncronous di dalam loop
    for (var i = 0; i < 5; i++) {
      setTimeout(function() {
         console.log(i); // 5, 5, 5, 5, 5
      });
    }
    // kok bisa 5 semua, udh gitu 5 kali pula? yaa itu dia karena var itu hoisted,
    // lalu ada Ayncron function setTimeout, itu artinya sebelum function callback di
    // setTimeout bekerja, si loop-nya udah jalan duluan, pas loop nya udah beres,
    // baru dah si timeOut bekerja, tapi udah telat..karena si "i" udh berisi nilai 5
    // i=5...makanya hasilnya 5, 5, 5...dst

    // Solusinya gimana? pake Apply atau pake let

    // pakai apply()

    for (var i = 0; i < 5; i++) {
      setTimeout(function() {
         console.log(i); // 0, 1, 2, 3, 4
      }.apply(i));
    }
    // varian lain klo pakai apply()
    for (var i = 0; i < 5; i++) {
      setTimeout(function() {
         console.log(this); // 0, 1, 2, 3, 4
      }.apply(i));
    }
    for (var i = 0; i < 5; i++) {
      setTimeout(function(c) {
         console.log(c); // 0, 1, 2, 3, 4
      }.apply(null, i));
    }

    // kalo pakai apply() bisa pakai call() jg bisa dong? iyah bisa
    for (var i = 0; i < 5; i++) {
      setTimeout(function() {
         console.log(i); // 0, 1, 2, 3, 4
      }.call(i));
    }

    // kok bisa pake apply() ? lihat how it works di 
    // file 34_function_apply_and_call_and_bind.js

    // pake bind() bisa ? bisa juga
    for (var i = 0; i < 5; i++) {
      setTimeout((function() {
        console.log(i);
      }).bind(i)());
    }

    // pake let

    for (let i = 0; i < 5; i++) {
      setTimeout(function() {
         console.log(i); // 0, 1, 2, 3, 4
      });
    }
    