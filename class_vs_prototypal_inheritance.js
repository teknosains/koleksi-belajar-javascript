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
 * Underlayer, sebenarnya Class inheritance dibangun diatas (bulit on top) Prototypal inheritance
 * 
 * Prototypal inheritance
 * 
 * Kalau Prototypal inheritance, yaitu dimana Object mewarisi langsung dari object lainnya
 */

// contoh Class inheritance

class Car {

}

class Honda extends Car {

}

//contoh Prototypal inheritance

function Car2() {

}

function Honda2() {

}

//Honda2 meng-inherits Car2
Honda2.prototype = Object.create(Car2.prototype)


// contoh lain Prototypal inheritance

const Human = {
    name: "",
    setName: function(name) {
        this.name = name;
    },
    sayName: function() {
        return this.name;
    }
};

//inherit from Human
const budi = Object.create(Human);

console.log(budi)



/**
 * dalam dunia nyata, penggunaan Class Inheritance memiliki banyak kekurangan
 * salah satunya adalah antara class dengan class lainnya sangat coupling (tight coupling)
 * 
 * top developer sekarang lebih memilih Composition Function
 * @https://medium.com/javascript-scene/master-the-javascript-interview-what-is-function-composition-20dfb109a1a0
 */