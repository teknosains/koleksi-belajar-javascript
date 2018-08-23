/**
 * Javascript is about Object inheritance
 * 
 * Setiap Object, function yang kita buat..sebenarnya mereka
 * mewarisi dari Object-object bawaan
 * 
 * di Javascript, pola Inheritance-nya secara teknis ditulis:
 * 
 * child.__proto__ = parent.prototype
 */

  var config  = {
    number: 2,
    limit: 4
  };

  /** 
  * "config" akan mempunya properti internal [[Prototype]] atau disebut juga __proto__ 
  * nah __proto__ ini adalah warisan dari prototype parent nya. atau secara teknis dapat ditulis: 
  * config.__proto__ = Object.prototype
  *
  * config -> mewarisi -> Object.prototype -> mewarisi-> null 
  * 
  * dimana null adalah ujung dari inheritance (prototype chain) 
  */

  // contoh lain

  var x = Object.create(config);
  /**
   * x --> config --> Object.prototype --> null 
   */

   var y = Object.create(null);
   /**
    * y --> null
    * 
    * kenapa y tidak mewarisi Object.prototype ? 
    * karena create() adalah peoperty langsung dari Object() 
    * dan bukanya property dari Object.prototype. 
    * Jadisebenarnya dalam Object() itu begini:
    */
    function Object() {
       
    }
    
    Object.create = function() {
        //
    }

    /**
     * Coba cek di console.log -> Object.hasOwnProperty('create'); // true
     * 
     * Lihatkan, create() adalah property langsung (dalam constructor function) dari Object(), 
     * jika bukan property langsung, maka mestinya dalam nya begini:
     */

     Object.prototype.create = function() {
        //
     };

     /**
      * di Javascript, Selalu gunakan method hasOwnProperty() untuk cek suatu properti exist atau tidak
      * jika gak pake method ini, maka javascript akan scan semua node Object.prototype 
      * (prototype chain) sampe ujung, ini gk bagus buat performance. 
      * Dengan kata lain..tidak cukup hanya mengandalkan if (my.property == undefined)
      */
  let user = {
    name: "Agus"
  };

  user.name; // apakah ada property "name" di user ? ooh ada..valuenya = Agus
  
  user.age; // apakah ada property "age" di user ? Oh gada...user adalah Object..coba 
  // lanjutkan cari di Object.prototype..oh gda juga...maka age adalah undefined

  // lain ceritanya kalau kita iseng kasih begini
  Object.prototype.age = 20;

  user.age; // apakah ada property "age" di user ? Oh gada...user adalah Object..coba 
  // lanjutkan cari di Object.prototyp..nah ada valuenya  20
  
  // Nah makanya untuk mencegah Javascript scan/menelusuri sampai Ujung...kita mesti
  // lakukan ini 
 if (user.hasOwnProperty('age')) {
    console.log('User punya property age');
 } else {
    throw new Error('User tidak punya property age');
 }

// contoh lain
/**
 * Prototype dari Class parent akan diwariskan ke property __proto__ dari Child
 * 
 * secara teknis ditulis: child.__proto__ = parent.prototype
 */

function Animal(name) {
  this.name = name;
}

Animal.prototype.sayName = function() {
  console.log('Saya ' + this.name)
};

var kambing = new Animal('Kambing');

/**
* kode diatas kita bisa ambil faidah sbb:
* 
* 1. Animal adalah sebuah function, maka __proto__ dari Animal adalah prototype dari Function()
*     - secara teknis ditulis: Animal.__proto__ = Function.prototype
*     - cara cek nya: console.dir(Animal.__proto__)
* 
* 2. kambing adalah salah satu jenis (instance dari) Animal, maka __proto__ dari kambing adalah
*    prototype dari Animal()
*      - secara teknis ditulis: kambing.__proto__ = Animal.prototype
*      - cara cek nya: console.dir(kambing.__proto__)
*
*
* urutan inheritancenya: 
* kambing (__proto__) -> inherit dari -> Animal (__proto__) -> inherit dari -> Function -> inherit dari -> Object
*/