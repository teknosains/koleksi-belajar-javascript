'use strict'
/**
 * Jika ditelisik lebih dalam, object dijavascript itu komplex
 * didalamnya banyak operasi, method-method yang kebanyakan kita tidak tahu
 * dan tidak pernah pakai
 */

 /**
  * Setiap data property di object disediakan attribute: writable, enumerable dan configurable
  * mereka ber-3 biasa disebut sebagai Data Property Descriptors
  * dan bisa kita cek dengan cara begini:
 */
 let obj = {
   myProperty: "haloo"
 };

 let descriptor = Object.getOwnPropertyDescriptor(obj, 'myProperty');
 console.log(descriptor); // { configurable: true, enumerable: true, value: "haloo", writable: true }

// untuk cek semua descriptor
let allDescriptor = Object.getOwnPropertyDescriptors(obj);
console.log(allDescriptor);

 /**
  * Writable
  * -------------------------------------------------------------
  * Setiap object yang kita buat biasanyakan punya property...
  * nah masing-masing property itu punya perlakuan khusus
  * dan bisa diperlakukan khusus, salah satunya adalah Writable
  */
  
let player = {
  name: "Budi",
  age: 20
};

player.name = "Agus";

console.log(player); // { name: 'Agus' }

// lihat bahwa properti name sekarang barubah nilainya, itu karena by default
// Javascript nge-set semua object property itu writable alias bisa di-update
// kalao kita membuat sebuah library/framework...mungkin saja sering
// nemu kasus dimana object yang kita buat tidak bisa di ubah nilainya (READ-ONLY)
//
// gimana caranya ? 

// membuat properti player.name tidak bisa diubah
Object.defineProperty(player, 'name', {
  writable: false 
});
// jika tidak di set seperti diatas, dia default writable nya true

player.name = "ninda"; 
// Error Cannot assign to read only property 'name'
// jangan lupa untuk pakai 'use strict' diatas..karena klo gk pake, Error nya gk keliatan

console.log(player);

// terlihat bahwa sekarang player.name gk bisa di ubah orang lain.

// membuat property player.age tidak bisa diubah
Object.defineProperty(player, 'age', {
  writable: false
});
// sama seperti penjelasan sebelumnya metodanya


/**
 * Enumerable
 * ------------------------------------------
 * Object itu enumerable, makanya bisa kita akses pakai for-in
 */
let mahasiswa = {
  name: "Budi",
  age: 20,
  ipk: 4.0
};

for (let key in mahasiswa) {
  console.log(key); // name, age, ipk
}

// bagaimana caranya biar salah satu property tidak enumerable alias
// tidak bisa diakses di loop for-in ? 
// gini nih
Object.defineProperty(mahasiswa, 'ipk', {
  enumerable: false
});

for (let key in mahasiswa) {
  console.log(key); // name, age...property/key ipk hilang..gbsa diakses
}

/**
 * Configurable
 * -------------------------------------------------------
 * Sebuah property dari object itu bisa di hapus atau di ubah
 * jika kita mau agar ia tidak bisa di hapus maka pakailah Configurable
 */
Object.defineProperty(mahasiswa, 'ipk', {
  configurable: false
});

/**
 * Dengan setup diatas, kalao kita mau delete "ipk", maka gbsa
 */
delete mahasiswa.ipk; // Error

console.log(mahasiswa); // akan tetap sama seperti originalnya, karena ipk tidak bisa di hapus

// jika kita set configurable: false, maka mengubah-nya lagi pake defineProperty
// jadi gbsa, 
// Object.defineProperty(mahasiswa, 'ipk', ...);
// ini jadi gk gbsa lagi...karena udh kita set configurable: false,
// kalau mau bisa lagi..ya kita hapus aja atau kita set set configurable: true

/**
 * Untuk mengubah banyak property sekaligus, kita pakai defineProperties()
 */
Object.defineProperties(mahasiswa, {
  name: { writable: false, enumerable: false, configurable: false },
  age: { writable: false, enumerable: false, configurable: false },
  // ..
});


// bagaimana cara paling cepat agar object kita tidak bisa di ubah dan dihapus?
// Object.freeze();

Object.freeze(mahasiswa); // ini artinya nge-set configurable: false, writable: false untuk semua property

// lainnya

Object.sealed(mahasiswa); // ini artinya nge-set configurable: false untuk semua property

Object.preventExtensions(mahasiswa); // agar object nya gk bisa ditambahin property baru

mahasiswa.alamat = "Jakarta"; // Error, karena preventExtensions

// preventExtensions penting kalo kita buat library/suatu class...yang kita gk mau orang lain
// bisa nambahin property baru

/**
 * Cara cek apakah suatu object bisa di ubah, delete dan ditambah property baru
 * silahkan cobain
 */
Object.isExtensible(mahasiswa);
Object.isSealed(mahasiswa);
Object.isSealed(mahasiswa);
Object.isFrozen(obj);

/**
 * Strict Mode vs Non-Strict Mode
 * 
 * saat bermain dengan internal attribute, hati-hatilah
 */
function script() {
  'use strict';
  let object1 = {
    property1: 50
  };

  Object.defineProperty(object1, 'property1', {
    writable: false
  });

  object1.property1 = 77; // akan Error dalam striict Mode
  // karena attribute writable: false, tapi klo gk di strict mode...
  // meskipun writable: false..ia gak bakal Error...meskipun value nya gk bisa diubah
  // jadi biar aman...pakelah strict mode

  console.log(object1.property1); // 50  <-- gk bisa diubah
}