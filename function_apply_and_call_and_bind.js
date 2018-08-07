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
let udin = { name: 'Udin', age: 30 };
user.sayName.apply(udin, ['Jakarta', '0817161671']);

// secara bahasa perintah diatas itu: Tolong dong masukkan object udin ke sayName dan assign object 
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

  user.sayName.apply(udin, 'Jakarta', '0817161671'); // lihat...bukan array lagi paramaternya


  /**
 * Function bind()
 * ------------------------------------------------------------------
 */

 /**
  * bisa juga dibaca tentang bind() di file function_binding.js
  */