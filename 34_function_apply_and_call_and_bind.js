/**
 * Sering lihat somefunction.apply(), apa sih itu fungsinya ? 
 * 
 * .apply() adalah prototype property dari Object Function()
 * 
 * lengkapnya apply() itu ada di: Function.prototype.apply()
 * 
 * jadi di belakang si javascript nulisnya begini
 * 
 * syntax: apply(<arg receiver>, <Array arg>)
 * 
 * - parameter pertama adalah object yang akan di assign ke "this" property function nya
 * - paramater kedua adalah array yang berisi value yang ingin di lempar ke function nya
 */
function Function() {
    //...
}

Function.prototype.apply = function(arg1, arg2) {
    ///
}

// karena Function adalah built-in object, maka bisa kita akses dimana saja
// dan SETIAP function apapun itu, akan inherit .apply() dari parent-nya yaitu Function()

function coba() {

}

// function coba() diatas akan punya property pribadi apply(),
// coba saja di console di browser
// console.dir(coba);
// check bagian __proto__ nya 

// apa sih fungsinya? apply digunakan agar fungsi yang sebelumnya 
// menerima list sebagai paramater kini bisa menerima array sebagai paramater

let score = [5, 7, 8, 9, 10]; // carilah nilai maximum

let max = Math.max(score); // NaN

/**
 * lihat hasilnya NaN, gak sesuai ekspektasi...itu karena function max() hanya menerima
 * list biasa
 */
let max2 = Math.max(5, 7, 8, 9, 10); // 10 ...begini baru bisa

/**
 * lalu gimana biar bisa pakai Array? 
 * 
 * ada 2 cara, yaitu pakai ...spread operator dan pakai apply()
 */

 // #1 pakai ...spread operator

 let max3 = Math.max(...score); // 10....that's it, done!,

 // #2 pakai apply()
 let max4 = Math.max.apply(null, score); // 10

 /**
  * lihat apply(null, score) , kok paramater pertama nya null? itu artinya
  * kita akan assign null sebagai value bagi "this" milik function max()
  *
  * ingat bahwa setiap function otomatis punya properti "this" masing-masing
  * 
  * kita assign this = null lewat apply(null, score), itu karena kita tidak butuh
  * ada operasi yang melibatkan "this" milik si function max();
  *
  * beda ceritanya dengan kasus dibawah ini 
  */

 // contoh lain

 let user = {
     username: 'default',
     password: 'default',
     sayName: function(alamat, phone) {
        console.log(this); // {name: 'udin', age: 30}
        return 'Name: ' + this.name + ', Age: ' + this.age + 'Alamat: ' + alamat + ', Phone: ' + phone;
     }
 }

 // perhatikan pada function sayName() diatas, tiba-tiba ada property this.name dan this.age
 // padahal object user{} tidak punya property name dan age 
 // itu berarti kita butuh adanya operasi pada "this"-nya. dengan kata lain...kita mau pakai tuh
 // "this" nya si sayName()

let udin = { name: 'Udin', age: 30 };
user.sayName.apply(udin, ['Jakarta', '0817161671']);

// secara bahasa perintah diatas itu: Tolong dong masukkan object udin ke user.sayName dan assign object 
// itu ke "this" nya si sayName. Tolong juga lempar array paramater nya ke masing-masing
// paramater function(alamat, phone)
//
// jadi tatkala kita cek apa isi "this" di sayName
// console.log(this);  maka output nya {name: 'udin', age: 30} 

/**
* di belakang si javascript saat kita pakai apply() diatas,
* function sayName() itu jadi gini
* 
*  sayName: function (alamat, phone) {
*    this = {name: 'Udin', age: 30};
*    return something.... 
*  } 
*/

// contoh , kali ini kita sematkan function callback
let mhs = {
  name: "Budi",
  setName(s) {
    this.name = s;
  }
}

function setMhsName(name, callback) {
  callback(name);
}

setMhsName('Agus', msh.setName);
console.log(mhs.name); // Budi <---harus nya kan Agus ? kok bisa?
// saat mhs.setName kita passing jadi sebagai callback, itu function setName()
// jadinya dibawa keluar scope si object mhs, oleh karena itu "this"-nya si setName()
// sekarang milik window global object, bukan lagi milik si object mhs
// gimana dong caranya biar bener? ya kita mesti set/bikin "this" nya si setName()
// milik si mhs lagi, bisa pakai apply() atau call()
// kita tulis ulang setMhsName() menjadi
function setMhsName(name, callback) {
  callback.apply(mhs, [name]);
  //callback.call(mhs, [name]); // kalao pake call
}
console.log(mhs.name); // Agus

/**
 * Function call()
 * ------------------------------------------------------------------
 */

 /**
  * call() hakikatnya sama dengan apply() hanya saja paramater keduanya
  * adalah list biasa..bukan array kayak apply()
  * 
  * syntax: call(<arg receiver>, <Array arg>)
  */

  // dengan contoh yang sama diatas, bisa kita pakai call()

  user.sayName.call(udin, 'Jakarta', '0817161671'); // lihat...bukan array lagi paramaternya


  // contoh lagi, tanpa paramater
  function test() {
    console.log(this); // {name: "Budi"}
    console.log(this.name);  // Budi
  }
  
  let a = {name: "Budi"};
  
  test.call(a); // bisa pake call()
  test.apply(a); // atau pake apply()

  /**
 * Function bind()
 * ------------------------------------------------------------------
 */

 /**
  * bisa juga dibaca tentang bind() di file function_binding.js
  */

  /**
   * apply(), call(), bind() dalam self-invoking function
   */

  (function() {
    console.log(this); // 30
  }.apply(30));
  
  (function(c) {
    console.log(c);
  }.apply(null, [30])); // 30

  (function() {
    console.log(this);  // 30
  }.call(30));
  
  (function(c) {
    console.log(c); // 30
  }.call(null, 30));
  
  // berbeda denngan apply() dan call(), pada bind() kita mesti tambahin extra call
  // sebagaimana self-invoking function pada umumnya
  

  (function() {
    console.log(this); // 30
  }.bind(30))();


    (function() {
    console.log(this.a);
    }.bind({a: 3, b: 5}))(); // {a: 3, b: 5}

  // karena bind itu tujuannya jika function kita itu di eksekusinya nanti belakangan

  function coba() {
    console.log(this.test);
  }

  let x = coba.bind({test: '30'}); // gk bakal run, harus di panggil manual
  x(); // baru dah jalan