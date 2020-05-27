/**
 * keyword this di Javascript, buat apa ?
 * Keyword this sebenarnya adalah property dari sebuat class/Constructor function
 * 
 * this juga sebenarnya adalah sebuah Object. saat kita buat Constructor seperti ini
 */

 function Human(name, age) {
    this.name = name;
    this.age = age;
 }

 /**
  * di internal javascript, ia sebenanrya saat kita panggil/instanisasi
  */

  let budi = new Human("Budi", 40);

  // dibelakang dia buatin/define implicit object untuk this
  // dia juga buatin implisit return untuk this

  function Human(name, age) {
    // this = {};
    //..
    this.name = name;
    this.age = age;
    //..
    // return this;
  }


  // jika diluar local context, this merujuk ke Global Window Object
  // coba aja console.log(this) di browser, 

  /**
   * Pada function biasa, this itu milik global Window Object
   */
  function coba() {
    console.log(this); // [window Object]
  }

  coba();

  /**
   * Kecuali juga function nya kita perlakukan sebagai Constructor
   */
  new coba(); // maka "this" nya sekarang milik si coba()

  /**
   * Spesial kasus ---------------------------------------
   */

  let mhs = {
    name: "Budi",
    age: 20,
    matkul: ["C2", "C3", "C4"],
    showMatkul() {
      console.log(this); // this ini milik si Object mhs

      //jika kita buat function disini
      this.matkul.forEach(function(item, index) {
        console.log(this); // this ini milik global window object
        // makanya this ini tidak punya akses ke this milik si mhs
        // this.name <-- undefined
        // this.age <-- undefined

        /**
         * Kenapa this ini milik gklobal oject? karena pada saat eksekusi, 
         * function ini di eksekusi di Global context, makanya this nya
         * itu milik si window global object
         */

      });
    }
  };
  
  mhs.showMatkul();

  // solusi masalah diatas ???

  // solusi #1 -> assign this ke variable

  let mhs = {
    name: "Budi",
    age: 20,
    matkul: ["C2", "C3", "C4"],
    showMatkul() {
      let _this = this; // assign this, agar this nya bisa diakses oleh function dibawah

      //jika kita buat function disini
      this.matkul.forEach(function(item, index) {
        console.log(_this.name);
        console.log(_this.age);
        console.log(item);

      });
    }
  };
  
  mhs.showMatkul();

  // Solusi #2 -> pake bind
  let mhs = {
    name: "Budi",
    age: 20,
    matkul: ["C2", "C3", "C4"],
    showMatkul() {
     this.matkul.forEach(function(item, index) {
       console.log(this.name + ': ' + item);
     }.bind(this));
     // pake bind, dan kita bind/ikat this milik si object mhs ke function(item, index)
    }
  };
  
  mhs.showMatkul();

  // solusi #3 -> pake Arrow function

  let mhs = {
    name: "Budi",
    age: 20,
    matkul: ["C2", "C3", "C4"],
    showMatkul() {
     this.matkul.forEach((item, index) => {
       console.log(this.name + ': ' + item);
     });
     // arrow function () => {}, otomatis nge-Bind this
    }
  };
  
  mhs.showMatkul();

  // Catatan tambahan
  /**
   * saat sebuah function di fungsikan sebagai function biasa, maka this nya 
   * adalah milik global window object. Jika sebuah function difungsikan sebagai
   * Constructor function atau Class, maka this nya adalah milik function itu sendiri
   * dengan syarat, harus di panggil pakai keyword new
   */

   // function biasa
  function coba2() {
    console.log(this); // ini milik global window object
  }

  coba();

  // function constructor/ class
  function Coba() {
     console.log(this); // ini milik Coba
  }

  let c = new Coba(); 
