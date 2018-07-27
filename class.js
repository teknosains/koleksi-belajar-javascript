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

// real Object
var budi = new Person('Budi', 'Pria', 30);
console.log(budi.displayPerson());

//real object
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
    this.name = ''
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

