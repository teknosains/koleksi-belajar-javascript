/**
 * Module pattern awalnya di buat oleh beberapa Orang
 * seperti Richard Cornford  pada tahun 2003, kemudian pattern ini
 * di populerkan oleh Javascript gutu Douglas Crockford dan sampai
 * sekarang masih menjadi salah satu Design Pattern yang banyak digunakan
 * manusia
 */

 /**
  * Module Pattern diciptakan untuk "mengakomodasi" kebutuhan aspek programming
  * dimana ada konsep akses Private dan Public pada object seperti pada bhs pemrograman lainnya
  */

  // Syntax
  var Module = (function() {
      // private properties...
      // private functions..

      //...
      return {
        // ...public
      };
  })();

  /**
   * Dengan bantuan IIFE (Immediately invoked function expression) dan Closure
   * 
   * kita sekarang bisa membuat banyak hal bersifat Private (hanya bisa diakses didalam Module itu sendiri)
   * dan banyak hal juga bersifat Public yang bisa diakses diluar module
   */

  // contoh
  var Customer = (function() {
    // private properties
    var _name = 'Agus';

    // public properties
    var pub = {};

    pub.name = _name;
    pub.sayName = function() {
      return 'My name is ' + name;
    };

    // return apa saja yang mau di public-kan
    return pub

  })();

  Customer.sayName(); // Agus


  // perhatikan...

  var Module = (function() {
      // kita bisa membuat apa saja didalam sini...bebass
  })();

  // contoh kita buat Constructor Function

var Human = (function() {
  // Asian
   function Asian(name) {
     this.name = name;
   }
   Asian.prototype.sayName = function() {
     return 'My name is ' + this.name;
   };
   
  // American
   function American(name) {
     this.name = name;
   }
   American.prototype.sayName = function() {
     return 'My name is ' + this.name;
   };
  
  var _asian = function(name) {
    return new Asian(name);
  };
  var _american = function(name) {
    return new American(name)
  };
  
  // make it avaiable to public
  return {
    asian: _asian,
    american: _american
  };

})();

// panggil seperti ini
console.log(
  Human.asian('Agus').sayName()
);

console.log(
  Human.american('Robert').sayName()
);

// atau seperti ini
var budi = Human.asian('Budi');
console.log(budi.sayName());

// memanggil Module/Library Lain gimana?
// tinggal begini

var Customer = (function() {

})();

var Penjualan = (function(customer) {
  // sekarang Module Customer available disini
  //...
})(Customer);

// kita bisa masukan module/library aja saja
var Penjualan = (function(customer, $, window) {
  // sekarang Module Customer available disini
  //...
})(Customer, jQuery, window);


/**
 * Revealing Module Pattern...
 * adalah teknik lanjutan dengan Module Patern dimana Object yang di expose
 * di wrap didalam return object dan disimpan di akhir script
 * 
 * cara ini juga lebih mudah dibaca dan fahami oleh Developer
 */

var Penjualan = (function(cust, inv) {
    // private properties
    function _detailOrder() {
      //
    }
    function _getCustomer() {
      return cust;
    }
    function _getInvoice() {
      return inv;
    }

    // public
    return {
      order: _detailOrder,
      customer: _getCustomer,
      invoice: _getInvoice
    };

})(Customer, Invoice);

//penggunaan revealing patern
Penjualan.order();
Penjualan.customer();
Penjualan.invoice();