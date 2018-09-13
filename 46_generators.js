/**
 * Generator Function adalah sebuah function dengan kemampuan khusus
 * dimana eksekusi di function itu kita bisa pause, lalu re-play lagi
 * terus begitu sampai keadaan tertentu/reach-the-end...
 * 
 * beda halnya dgn function biasa...eksekusi dilakukan sampai function me-return sesuatu
 * atau sampai kode sdh reach-the-end.
 * 
 * Geneator function diperkenalkan di Javascript ES6,,,dan banyak fitur Javasript baru 
 * dibangun based-on Generator diantaranya Promise, Async/Await
 * 
 * syntax: 
 * 
 * - anonim: function* () {}
 * - named : function* test() {}
 */

 // function biasa

 function test() {
  console.log('A');
  console.log('B');
  console.log('C');
}

// diatas adalah function biasa...akan seketika secara brurutan nge-print di console
// saat dipanggil
test();

// generator function 

function* test() {
  console.log('A');
  console.log('B');
  console.log('C');
}

// kalau kita panggil begini
test();

// dia gak akan eksekusi...baru akan di eksekusi kalau kita panggil begini
test().next();

// nah kita sekarang bisa pause dimana saja sesuka hati dengan keyword "yield"

function* test() {
  console.log('A');
  console.log('B');
  yield 'paused'; // pause disini
  console.log('C');
}

let run = test();

run.next(); // output: A dan B...terlihat kalau si C belum di eksekusi

// untuk melanjutkan eksekusi sampai ke C, kita lakukan ini sekali lagi
run.next(); // dan C sekarang muncul....

// bagaimana mengambil data dari "yield" ? 
// tinggal kita print aja

function* test() {
  console.log('A');
  console.log('B');
  yield 'paused'; // pause disini
  console.log('C');
}

let run = test();
console.log(run.next()) // { done: false, value: "paused" }

// lihat bahwa yeild mengeluarkan 2 properties yaitu done & value
// karena ini return value dari iterator Object, lihat file 41_iteraable_object_dan_iterator.js

// diatas nampak done: false, dan value: paused...itu artinya eksekusi function
// belum selesai...karena sedang di pause...gimana jika mau sampai akhir?
// kita run lagi

console.log(run.next()); // { done: true, value: undefined }

// lihat done: true, value: undefined....itu artinya eksekusi function ini sudah beres

// multiple pause

function* test() {
  console.log('A');
  console.log('B');
  yield 'paused'; // pause disini
  console.log('C');
  yield 'paused'; // pause lagi
  console.log('D');
}

let run = test();
console.log(run.next()) // run first step
console.log(run.next()) // run second step (yield ke-satu)
console.log(run.next()) // run third step (yield ke-dua)


/**
 * Summary: 
 * - untuk mem-pause gunakan keyword "yield"
 * - untuk melanjutkan panggil lagi .next() begitu seterusnya sebanyak jumlah yield yang ada
 */


// apa gunannya eksekusi function di Pause? kan dengan di pause...kita bisa sematkan
// eksekusi kode lain dulu sebelum melanjutkan eksekusi function nya...
// banyak hal yang akan membuat kita melakukan itu nanti...

// Lazy Evaluation

// Generator mengusung Lazy Evaluation...artinya eksekusi akan di delay sampai 
// value yang kita mau ada/terpenuhi...ini juga berarti meng-hemat memory consumption

function* hitungPangkat(start, pangkat) {
  let counter = 0;
  let base = start;
  while (counter < 10) {
    console.log('Hitung ' + base + '^' + pangkat);
    yield Math.pow(base, pangkat);
    base++;
    counter++;
  }
}

let pangkat2 = hitungPangkat(3, 2);

// saat kita panggil seperti diatas, belum ada kalkulasi perpangkatan..
// dan kita bisa ambil hasil-nya satu persatu

console.log(
  pangkat2.next() // Hitung 3^2 {done: false, value: 9 }
);

console.log(
  pangkat2.next() // Hitung 4^2 {done: false, value: 16 }
);

// dst....

// lalu bagaimana cara mengakses value nya sekaligus tanpa pakai .next()  ? 
// pake loop for-of
for (let x of pangkat2) {
  console.log(x);
}

// perlu dicatat, loop for-of memakai Iterator dibelakang layar
// alias dia pakai .next()...oleh karena itu next() selanjutnya akan langsung Done/finish

function* hitungPangkat(start, pangkat) {
  let counter = 0;
  let base = start;
  while (counter < 10) {
    console.log('Hitung ' + base + '^' + pangkat);
    yield Math.pow(base, pangkat);
    base++;
    counter++;
  }
}

let pangkat2 = hitungPangkat(3, 2);

// panggil dengan for-of 
for (let x of pangkat2) {
  console.log(x); // Hitung 3^2   9 ...dst...
}

//lalu kalau kita panggil lagi dengan next()
console.log(
  pangkat2.next() // { done: true, value: undefined }
);


// Membuat Object jadi Iterable dengan Generator

let options = {
  name: 'John',
  age: 30,
  country: 'Japan'
}

options[Symbol.iterator] = function * () {
    for (let key in this) {
      yield [key, this[key]];
    }
}

// karena sdh Iterable, maka kita bisa akses dengan loop for-of

for (let x of options) {
  console.log(x);
}

// output:
// ["name", "John"]
// ["age", 30]
// ["country", "Japan"]



// selengkapnya silahkan pelajari 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator