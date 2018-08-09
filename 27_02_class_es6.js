/**
 * Class di ES6 sudah mengadopsi Class pada bahasa pemrograman
 * lain pada umumnya
 * 
 * hanya saja meskipun sudah pake itu, OOP di Javascript dibelakang tetap berdasarkan
 * prototype (Prototype-based class)
 * 
 * apa sih prototype? prototype sebenarnya adalah sebuah object yang men-share properties-properties
 * buat object lain...dari sinilah dikenal dnegan istilah prototype-based class atau prototypal inheritance
 * 
 * Fitur ini cukup baru, jadi browser-browser versi lama mungkin belum support
 */

 class Kendaraan {
   constructor(jenis, tahun) {
     this.jenis = jenis;
     this.tahun = tahun;
   }

   umur() {
     // tahun sekarang - tahun
     let umur = new Date().getFullYear() - this.tahun;
     console.log('Umur nya : ' + umur + ' tahun');
   }

   setTahun(tahun) {
     this.tahun = tahun;
   }

 }

  //let mobil = new Kendaraan('Mobil', 1975);
  //mobil.umur(); // 2018-1975 = 43

 /**
  * Inheritance
  */

 class Mobil extends Kendaraan {
    constructor(jenis, pabrikan, merk) {
     super(jenis); // ini artinya panggil constructor parent nya
     //super() Wajib ada jika kita lakukan inheritance, jika tidak maka "this" dibawah Error
     // kenapa Error? Kareva Javascript menginginkan/memaksa "this" di Class anak itu di inherit dari
     // constructor parent nya

     this.pabrikan = pabrikan;
     this.merk = merk;
    }
   
   getDetail() {
     console.log(this.jenis + ' ' + this.pabrikan + ', ' + this.merk);
   }
 }

 let honda = new Mobil('Mobil', 'Honda', 'Honda Mobilio');
 honda.getDetail(); //Mobil Honda, Honda Mobilio
 honda.setTahun(1970); // panggil method di parent nya
 honda.umur(); // panggil method di parent 
 
 /**
  * Bacaan pelipur lara : Spesifikasi Javascript Ecma https://tc39.github.io/ecma262/#sec-overview
  */

  /**
   * Static method
   * 
   * digunakan Oleh Class itu sendiri untuk keperluan dirinya sendiri,
   * itu berarti Intance dari Class tidak bisa pakai.
   */

   class Contoh {
     constructor() {
       this.nama = "Budi";
       Contoh.test();
     }
     static test() {
       console.log('Static method called');
     }

     // panggil static method didalam static method lain: bisa pakai "this"
     // atau pake Class nya sendiri
     static test2() {
       this.test(); // valid
       Contoh.test(); // valid
     }

     //tapi static method tidak punya akses ke "this" constructor
     static test3() {
       console.log(this.nama); // undefined
     }

     // akses static method di method biasa ?
     // ada 2 cara
     test4() {
      Contoh.test(); // valid
      this.constructor.test(); // valid
     }
   }

   // instance
   let obj = new Contoh();
   obj.test(); // Error, Static method bukan milik Objecy/instance

   // bisa juga dipanggil diluar
   Contoh.test();

   // Static method adalah property langsung/milik pribadi dari Class-nya
   // nakun berbeda dengan property pribady lainnya, Static method dalam sebuah
   // class diberi Attribute property "enumerable: false, configurable: true, writable: true",
   // silahkan cek sbb
  console.log(
    Object.getOwnPropertyDescriptors(Contoh)
  );

  // karena enumerable: false, configurable: true, writable: true
  // itu artinya bisa di ovveride value nya

  // override static method test()
  Contoh.test = function() {
    console.log('overriden');
  };
  
  console.log(Contoh.test()); // overriden