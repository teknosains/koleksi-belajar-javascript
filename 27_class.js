/**
 * Class adalah Blueprint/cetakan/placeholder
 * dari object yang sebenarnya
 * 
 * Di Javascript sendiri Class bisa juga disebut Constructor Function
 */

 var nama = "Budi";
 var gender = "Pria";
 var umur = 30;

 var nama2 = "Wina";
 var gender1 = "Wanita";
 var umur2 = 27;

 /**
  * Lihat kode diatas, tanpa oop...saat kita mau buat multiple real object
  * kita mesti buatkan masing-masing object dengan variable maisng-masing...
  * gak flexible...salah satu cara agar pembuatan real object flexible adalah dengan membuat Class
  * 
  * Nah fungsi Person diatas disebut juga sebagai Constructor Function
  */
function Person(nama, gender, umur) {

    this.nama = nama;
    this.gender = gender;
    this.umur = umur;

    this.displayPerson = function() {
        return 'Nama: ' + this.nama + ' Gender: ' + this.gender + ' Umur: ' + this.umur;
    };
}

//instance
var budi = new Person('Budi', 'Pria', 30);
console.log(budi.displayPerson());

//instance
var wina = new Person('Wina', 'Wanita', 20);
console.log(wina.displayPerson());



/**
 * Javascript juga punya Class/Constructor bawaan (built-in) seperti
 * new Object()
 * new String()
 * new Array()
 * new Date()
 * dll
 */

  /**
   * Semua Constructor Function (atau Class) sebenarnya intance dari Object()
   * 
   * jadi saat kita menulis kode berikut
   */

   function Human() {
    this.name = '';
   }

   var budi = new Human();

   // dibelakang, Javascript sebenarnya melakukan ini

   var budi = new Object();
   budi.[[Prototype]] = Human.prototype;
   Human.call(budi)

   /**
    *Jadi .[[Prototype]] di ciptakan saat Object di instanisasi/invoce dengan keyword new
    * jadi saat kita buat real object seperti ini
    */

    var budi = new Human();

    /**
     * javascript akan membuatkan prototype sendiri untuk object budi 
     * yaitu budi.[[Prototype]] dimana ini mewarisi prototye parent nya
     * makanya:
     * budi.[[Prototype]] = Human.prototype; 
     * prototype si budi mewarisi prototype si Human, oleh karena itu
     * si budi bisa akses semua property milik si human
     * 
     * .[[Prototype]], kalo di cek di browser console itu sama dengan __proto__
     */

   /**
    * Di Javascript versi baru ES6, kita sudah bisa memakai keyword class sebagaimana
    * bhs pemrograma lainnya
    */

    class Mahasiswa {
        constructor(name, ipk) {
            this.name = name;
            this.ipk = ipk;
        }

        getName() {
            return this.name;
        }

        getIpk() {
            return this.ipk;
        }
        //...some code
    }

    let agus = new Mahasiswa('Agus', 4.0);
    agus.getName();
    agus.getIpk();

    /**
     * private method di Class
     * ---------------------------------------------------
     */
    function User(name, age) {
        this.name = name; // visible diluar
        this.age = age; // visible diluar
        // method ini visible juga diluar
        this.sayName = function() {
            return sayHi();
        };

        //private method ? buat aja, tapi jangan pake "this"

        function sayHi() { // invisible diluar, hanya bisa diakses didalam User
            // tapi function ini tidak punya akes ke "this"-nya si User
            // this.name; // undefined
            // karens "this" didalam sini itu milik global window object
            // cara akses propertinya ya seperti pada function biasa
            let theName = name; // name nya ambil dari User(name, age)
            return 'Hi ' + theName;
        }

    }

    let budi = new User('Budi', 30);
    budi.sayName(); // Hi Budi;


    /**
     * Prototype based class
     * -------------------------------------------------
     * kebanyakan developer lebih memilih Class prototype-based
     * karena semua built-in javascript object seperti Object(), Array(), Math, Number() dll
     * juga berdasarkan ini
     * 
     * lihat detailnya di file 18_object_prototype.js
     */

     function Sapi (name) {
         this.name = name;
     }

     Sapi.prototype.sayHi = function() {
        return 'Hi ' + this.name;
     };

     let dodi = new Sapi('Dodi');
     dodi.sayHi(); // Hi Dodi

    /**
     * contoh pada library Array.filter()
     * 
     * itu dibelakang ia seperti begini
     */
     function Array(param) {
         //...
         //...
     }
     Array.prototype.filter = function(arg) {
        // ...
     };

    
    /**
     *  membuat Constructor Function Aman meskipun dipanggil tanpa "new"
     */
    function Human(name) { 
        this.name = name;
        
        // perhatikan
        if (!(this instanceof Human)) {
          return new Human(name);
        }
      }
      Human.prototype = {
        constructor: Human,
        sayName() {
          return `My name is ${this.name}`;
        }
      };
      Object.defineProperty(Human.prototype, 'constructor', {
        writable: false, enumerable: false, configurable: false
      });
      
      
      budi = Human('Budi'); // kita bisa panggl begini...tanpa "new"
      budi.sayName();

      // kita pakai new pun gda masalah
      budi = new Human('Budi');

      budi.sayName();