/**
 * Fungsi adalah sebuah proses yang mengambil suatu Input (Argumen) dan menghasilkan
 * output (return value). 
 * 
 * 
 * Fungsi biasanya digunakan untuk:
 * 1. Mapping: mengolah input dan menghasilkan output
 * 2. Prosedur: fungsi digunakan untuk eksekusi sederet prosedur (langkah-langkah teknis). biasa
 * juga disebut: Prosedural Programming
 * 3. I/O: yaitu untuk komunikasi antar interface. Misal pada komputer: 
 * fungsi Screen komunikasi dengan fungsi Storage dsb
 * 
 * Dan Pure function adalah fungsi yang Mapping adalah tugas utamanya. 
 * Makanya pure function Wajib punya minimal 1 input dan 1 return value (output)
 * dan satu input yang sama akan menghasilkan output yang selalu sama..apapun kondisinya
 * 
 * pure function juga tidak boleh menggunakan dan mengubah Global variable
 */

// contoh pure function

 function addTwoNumber(a, b) {
     return a + b;
 }

 addTwoNumber(2, 5); // 7...harus/akan selalu 7 kapanpun dan apapun kondisinya

// apakah contoh dibawah ini Pure Function?
const time = function() {
    return new Date().toLocaleTimeString();
}

console.log(time());

/**
 * fungsi diatas adalah Fure function, karena fungsi time() akan menghasilkan
 * output sesuai dengan input nya
 * input(currentTime) <> output(currentTime)
 * 
 */

 // contoh pure function yang dikotori, jadinya gk pure lagi, karena fungsi myAge
 // bergantung pada variable global age
 

 const age = 20;

 const myAge = function (a) {
    return a * age;
 }

 console.log(myAge(30));

// merubah value
let nilai = 10; // bisa juga var nilai = 10;
let rubahNilai = function() {
    nilai = 12;
};

rubahNilai();

console.log(nilai); // 12  <--- nilai sekarang berubah
// karenanya function rubahNilai() diatas bukan lah pure function
// karena ia merubah suatu entity diluar context pribadi nya
// alias dia punya side-effect
