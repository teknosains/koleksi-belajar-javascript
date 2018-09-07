/**
 * Mixin adalah proses untuk membuat kita punya Object bisa menggunakan properties atau method
 * dari object-object lain tanpa melalui Inheritance. 
 * 
 * Sebab dijavascript, 1 Class hanya bisa mewarisi dari dari 1 Class parent. Tapi kan sering kali
 * kita ingin pakai method lain yang parent Class nya itu gk punya dan kita pula tidak ingin
 * mengubah kode existing kita.
 * 
 * Mixin juga secara singkat adalah: Teknik "memanfaat"-kan method-method di Class lain
 * tanpa harus meng-inherit/extends Class itu
 * 
 * Mixin juga berguna untuk membuat dua Class/Object yang berbeda/gk berhubungan bisa 
 * sharing method yang umum/sama 
 */

 // contoh dengan Class ES6. kita mau bikin Library sendiri dengan extens dari library
 // yang sdh dibuat orang lain, kita butuh suatu Method, tapi method itu tidak
 // ada di Parent dan kita gak mau ngubah
 // kode library kita, maka kita buatkan saja Object lain diluar Class

 class LibraryOrangLain {
  // some code
 }

 class LibrarySaya extends LibraryOrangLain {
   constructor(name, versi) {
    super(); // wajib ada
    this.name = name;
    this.versi = versi;
   }
   sayName() {
     console.log('Hi,' + this.name);
   }

   sayVersi() {
     console.log('Versi ' + this.versi);
   }
 }

 // kita buatkan object Mixin
 let myMixinObject = {
   sayNameBaru() {
    console.log('Halooo, ' + this.name);
   },
   sayVersiBaru() {
    console.log('Versi terkini ' + this.versi);
   }
 }

 // kita pakai object assign, alias kita copy kan saja object mixin
 // ke kita punya class prototype. Lihat bahwa kita tidak melakukan inherit/extends
 // cukup kita copy saja 
 Object.assign(LibrarySaya.prototype, myMixinObject);

 let obj = new LibrarySaya('Office JS', 1);
 obj.sayNameBaru(); // Halooo office JS
 obj.sayVersiBaru(); // Versi terkini 1

 // contoh simple lagi
 let obj = {
  a() {},
  b() {}
};

function Test() {}

Object.assign(Test.prototype, obj);

console.dir(Test);

// maka lihat sekarang bahwa method a() dan b() sekarang menjadi bagian dari Test.prototype

/**
 * Mixin untuk Class yang tidak berhubungan
 * tapi punya 1 method yang umum/sama
 */

const mixinMakan = {
  caraMakan: function() {
    console.log('Pake Mulut');
  }
};

function Kucing() {}
function Burung() {}

// lihat bahwa kita punya 2 Class yang berbeda jenis...tapi keduanya
// punya satu kesamaan...yaitu makannya pake mulutnya

Object.assign(Kucing.prototype, mixinMakan);
Object.assign(Burung.prototype, mixinMakan);

/**
 * Gimana Mixin pada Object literal biasa? simple
 * Sama saja dengan cara diatas
 */
const mixinMakan = {
  caraMakan: function() {
    console.log('Pake Mulut');
  }
};

let Kucing = {
  spesies: 'Anggora'
};
let Burung = {
  species: 'Penguin'
};


Object.assign(Kucing, mixinMakan);
Object.assign(Burung, mixinMakan);

// kalau gk pakai Object.assign bisa? 
// tentu bisa...kita buat saja factory function sederhana
function addMixin(obj) {
  obj.caraMakan = function() {
    console.log('Pake Mulut');
  };
}

addMixin(Kucing);

console.dir(Kucing);