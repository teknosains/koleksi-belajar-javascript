/**
 * Tak seperti kebnyakan bhs pemrograman lainnya, Javascript Object System adalah based-on
 * Prototypes, bukan Class-class
 * 
 * Perbedaan Class Inheritance vs Prototypal Inheritance
 * 
 * Class Inheritance:
 * 
 * Pertama, Class adalah seperti sebuah Blueprint, yaitu deskripsi mengenai Object yang
 * ingin dibuat. Class-class diwarisi dari class-class lainnya sehingga membentuk hubungan
 * antar class atau subclass. 
 * 
 * ini sering juga disebut Hirarcial class taksonomi...atau hubungan antara parent-child
 * 
 * di Javascript, Class sebenarnya adalah sebuah Function. makanya kalo kita buat kode dibawah
 * => class Foo {}
 * => typeof Foo // function
 * terlihat klo Foo sebenarnya adalah function..
 * 
 * Underlayer, sebenarnya Class inheritance dibangun diatas (bulit on top) Prototypal inheritance juga
 * 
 * Prototypal inheritance
 * 
 * Kalau Prototypal inheritance, yaitu dimana Object mewarisi langsung dari object lainnya
 * 
 * Glossary: [[Prototype]] atau __proto__ adalah internal prototype dari sebuah object yang berfungsi sebagai reference
 * (yang nge-link) ke object parent nya
 * 
 * child.__proto__  --> parent object
 */
let parent = {
    name: 'Agus'
};
let child = Object.create(parent); 

child.__proto__ == parent; // true
// makanya skrg si child bisa akses property name
chila.name; // Agus

// pada Constructor Function, __proto__ dari child (child.__proto__) adalah prototype dari parent nya
// child.__proto__ == parent.prototype
function Parent() {}

let child = new Parent(); 

child.__proto__ == Parent.prototype; // true


// ------------------------------------------------------------------------------
 /**
  * DI Javascript ada 2 Model/cara utama untuk membuat instance dari sebuah Object
  * yaitu:
  * 1. Classical Model
  * 2. Prototypal Model
  */

  /**
   * Classical Model
   * 
   * object dibuat melalui blue print atau class dengan keyword "new"
   */
  function Human(name) {
      this.name = name;
  }


  // create instance/object
  let budi = new Human('Budi'); // budi juga mewarisi prototype dari Human (budi.__prototype__ == Human.prototype)

  /**
   * Pada Classical model, inheritance sebenarnya tetap mengandalkan prototype
   * 
   * pada contoh diatas, setelah kita bikin instance budi = new Human(); si budi sekarang punya
   * property sendiri "name" , makanya kita bisa langsung akses seperti ini
   */

   budi.name; // Budi

   // "budi" sekarang tipenya adalah object (bisa di cek dengan: typeof budi)
   console.log(typeof budi); // object

   // karena dia skrg tipenya adalah object, MESTINYA maka ia punya funsionalitas 
   // turunan dari function Object()
   // Tapi pas kita lihat di console browser dengan cara sbb
   console.dir(budi.__proto__);

   // Ia ternyata malah berisi protototype dari Human, ...kenapa? karena budi adalah instanceof Human
   // karena sudah kita buatkan instance nya lewat budi = new Human()
   // oleh karena itu, budi sekarang MEWARISI protototype dari Human atau secara teknis ditulis
   // budi.__proto__ == Human.prototype
   console.dir(budi.__proto__ == Human.prototype) // true

   // apa sih Human.prototype ? ia adalah internal mechanism dimana sebuah function akan secara otomatis
   // dibuatkan internal property yang dinamai "prototype" dan property ini ber-tipe object.
   // setiap sebuah function dibuat, maka javascript akan membuatkan internal property "prototype"
   // yang by default berisi property constructor
   // silahkan cek 
   console.dir(Human.prototype); // { constructor: Human() }
   
   //ingat setiap function yang dibuat, akan dibuatkan "prototype" nya
   function cek() {}
   coonsole.dir(cek.prototype); // { constructor: cek() }

   // karena "prototype" dari setiap function/class adalah sebuah Object, maka kita bisa menambahkan property apa saja
   // kedalamnya. Misalnya kita buat property seperti ini
   Human.prototype.sayName = function() {
       return 'My Name is ' + this.name;
   }

   // Karena Human.prototype diturunkan ke object budi, maka budi sekarang punya akses ke Prototype dari Human
   budi.sayName(); // My Name is Budi

   // nah pada model ini, semua method di-REKOMENDASI di buat didalam prototype
   // Misal kita mau buat banyak method
   Human.prototype.A = function() {}
   Human.prototype.B = function() {}
   Human.prototype.C = function() {}
   // dst..

    // kalao kita menggunakan Javascript versi baru yaitu ES6, maka Class diatas bisa kita tulis sbb
    class Human {
        constructor(name) {
            this.name = name;
        }

        sayName() {
            return 'My Name is ' + this.name;
        }

        A() {}
        B() {}
        C() {}
    }

    let budi = new Human('Budi');
    budi.sayName(); // My Name is Budi

    // dengan Es6, membuat Class menjadi lebih mudah..mirip sengan bahasa pemrograman populer lain kan

    /**
     * Dengan Model ini, Bagaimana jika Class satu ingin inherit dari Class yang lain ? 
     * 
     * -----------------------------------------------------------------------------------
     * misal
     */
    function Human(name, gender) {
        this.name = name;
        this.gender = gender;
        this.planet = "Earth";
    }

    function Programmer(name, gender, language) {
        this.language = language;
    }

    /*********************************************************************** */
    // gimana caranya Programmer inherit dari Human? banyak banget Caranya..misalnya begini

    function Programmer(name, gender, language) {
        Human.call(this, name, gender); // perhatikan baris ini!!
        this.language = language;
    }

    // create instance
    let budi = new Programmer('Budi', 'Pria', 'Javascript');

    console.log(budi.name); // Budi
    console.log(budi.gender); // Pria
    console.log(budi.language); // Javascript
    console.log(budi.planet); // Earth

    // perhatikan bahwa Programmer tidak punya property name, gender dan planet...
    // ia hanya meng-inherit dari parent-nya yaitu Human

    // tapi cara diatas punya kelemahan, yaitu prototype dari si Human tidak
    // diturunkan ke si Programmer. misal si Human punya method sbb
    Human.prototype.sayName = function() {
        return 'My name is ' + this.name;
    }

    budi.sayName(); // Error.....karena prototype si Human tidak diturunkan ke si Programmer

    // bagaimana solusinya ? Solusi yang umum digunakan orang adalah sbb
    // kita tambahkan baris berikut
    Programmer.prototype = Object.create(Person.prototype);

    // sekarang si budi bisa akes method sayName()
    budi.sayName(); // My name is Budi

    // TAPII...masih ada masalah dengan solusi diatas, perhatikan bahwa 
    // Programmer.prototype.constructor sekarang isinya adalah Person()
    // Programmer.prototype.constructor == Person  <-- true

    // itu artinya Programmer tidak punya property prototype.constructor sendiri, karena sudah
    // di override oleh Person
    // padahal seharusnya...setiap Function "wajib" punya property prototype.constructor sendiri
    // solusinya masalah ini adalah sbb:
    Programmer.prototype.constructor = Programmer;

    // masih ada masalah dengan solusi diatas, dimana Programmer.prototype.constructor
    // bisa diubah sembarangan, kita mesti setting agar seperti constructor pada umumnya
    // agar tidak bisa di ubah-ubah dengan cara sbb:

    Object.defineProperty(Programmer.prototype, 'constructor', {
        configurable: false, enumerable:false, writable: false
    });

    // Begitulah sekilas...Inheritance dengan Classical model
    // kalau kita perhatikan, meskipun model-nya Classical yang object creation nya di Invoke 
    // lewat keyword "new", tetap saja di tatkala butuh meng-inherit dari Object/class lain..
    // ia menggunakan Prototypal
    // lihat baris ini
    Programmer.prototype = Object.create(Person.prototype); // basically ini ada prototypal


  /**
   * Prototypal Model
   * 
   * yaitu dimana object dibuat LANGSUNG dari object lain
   */
  const Person = {
      name: 'Budi K'
  };

  let budi = Object.create(Person);

  budi.name; // Budi K

  // contoh lain

  const Animal = {
      name: 'animal',
      sayName: function() {
          return 'This is ' + this.name
      }
  };

  let dog = Object.create(Animal, {
    name: { value: 'Husky' },
    color: { value: 'black' }
  });

  dog.name; // Husky
  dog.color; // black
  dog.sayName(); // This is Husky

  // contoh lagi...kali ini kita sekalian bikin base object, kita juga buatkan factory-nya sekalian
  let user = {
    name: 'user',
    age: 0,
    sayName: function() {
      console.log(`name is ${this.name}`);
    },
    create: function(name, age) { // factory
      let newUser = Object.create(this);
      newUser.name = name;
      newUser.age = age;
      
      return newUser;
    }
  };
  
  let student = user.create('Budi', 17);
  student.sayName(); // Budi

  let teacher = user.create('Agus', 30);
  teacher.sayName(); // Agus

  // perhatikan bahwa Javascript emang bener Dynamic language...kita bisa modifikasi
  // seenak "jidat"
  //function create diatas bisa juga kita tulis begini
  create: function(name, age) { // factory
    let newUser = Object.assign(Object.create(this), {
        name: name,
        age: age
    });
    
    return newUser;
  }