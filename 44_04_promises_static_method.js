/**
 * Class Promise menyediakan fitur-fitur lain diantaranya
 * adalah fitur yang disiapkan mellaui static method-nya
 */

  /**
  * Promise static Methods ada 4
  *
  * Promise.all(), Promise.race(), Promise.reject(), Promise.resolve(); 
  */

  /**
   * Promise.resolve() digunakan tatkala kita sebenarnya sudah punya ready-value/data
   * sendiri tapi kita pengen data itu dikirim dan diperlakukan sebagai Promise
   */

let user = ['Indra', 'Agus', 'Asih'];

let promise = Promise.resolve(user);

// ini sebenanyrnya sama aja dengan 
let promise = new Promise(function(resolve, reject) {
  resolve(user);
});

// real-world example nya

// dibawah ini menggaransi prosesUser akan me-return Promise Object
let prosesUser = function() {
  return Promise.resolve(user);
}

prosesUser().then(function(response) {
  if (Array.isArray(response)) {
    let newUser = response.map(function(item) {
      return 'Mr.' + item;
    });
    return newUser;
  } else {
    throw new Error('Data harus array');
  }
})
.then(function(response) {
  console.log(response); // ["Mr.Indra", "Mr.Agus", "Mr.Asih"]
})
.catch(function(err) {
  if (err instanceof Error) {
    console.log(err.stack);
  } else {
    console.log(err);
  }
});

// Promise.reject() sama saja mekanisme nya kayak Promise.resolve()
// hanya saja ia jarang digunakan...agak gk make sense juga sih...
//

/**
 * Promise.all([<Array of Promises>])
 * 
 * ini dia yang banyak dipakai...digunakan untuk menjalankan multiple promise
 * secara paralel namun hasilnya tetep sesuai urutan
 * 
 * init: Promise.all([promise_1, promise_2, promise_3])
 * hasil: promise_1, promise_2, promise_3
 * 
 * sesuai urutan dia...
 */

let getUser = new Promise((resolve, reject) => resolve('Budi'));
let getUserProfile = new Promise((resolve, reject) =>  resolve('Budi is nice'));
let getArticle = new Promise((resolve, reject) => resolve('Banjir Jakarta'));


let listPromise = [getUser, getUserProfile, getArticle];

Promise.all(listPromise)
  .then((response) => {
    console.log(response); // ["Budi", "Budi is nice", "Banjir Jakarta"]
  })
  .catch((err) => {
    console.log(err);
  });

// jika ada satu saja promise yang error/Reject....maka akan langsung masuk ke catch();

let getUser = new Promise((resolve, reject) => resolve('Budi'));
let getUserProfile = new Promise((resolve, reject) =>  resolve('Budi is nice'));
let getArticle = new Promise((resolve, reject) => reject('Gagal load article')); // reject


let listPromise = [getUser, getUserProfile, getArticle];

Promise.all(listPromise)
  .then((response) => {
    console.log(response); // ini di skip..jadi gk nampil disini
  })
  .catch((err) => {
    console.log(err); // Gagal load article
  });

// bagaimana jika kita tetap ingin dapat hasilnya meskipun salah satu promise reject/Error ? 
// teknik nya adalah dengan nge-catch() masing-masing promisnya lalu di pass sebagai normal resolve
let listPromise = [
  getUser.catch(err => err), 
  getUserProfile.catch(err => err),
  getArticle.catch(err => err)
];
// atau biar lebih advance bisa kita tulis
let listPromiseNew = listPromise.map((item) => item.catch(rr => rr));

Promise.all(listPromiseNew)
  .then((response) => {
    console.log(response); // ["Budi", "Budi is nice", "Gagal load article"]
    // perhatikan bahwa semua hasil resolve dan reject-nya di passing ke sini
  })
  .catch((err) => {
    console.log(err); 
  });



/**
 * Jika yang di passing ke Promise.all() nya bukan sebuah Promise, maka javascript 
 * akan  memperlakukan-nya sebagai Promise.resolve()
 */
Promise.all([
  getUser,
  'test1', // ini diperlukan: Promise.resolve('test1)
  'test2' // ini diperlukan: Promise.resolve('test2)
])
.then((response) => {
  console.log(response); // ["Budi", "test1", "test2"]
})
.catch((err) => {
  console.log(err);
});


/**
 * Promise.race()
 * 
 * mirip dengan Promise.all(), hanya saja race(), siapa saja yang paling dulu berhasil maka
 * ialah yang menang dan output dari promise nya adalah output dari pemenang, entah outputnya
 * berupa resolve atau reject...yang penting siapa yang duluan memang
 * 
 * jadinya race() itu dulu-duluan...siapa cepat dia dapat
 */
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1
// outputnya 1 karena pemenang balap promise diatas sudah tentu yang paling awal
// karena timeout janya lebih kecil...pada penggunaal real-world, misal 
// jika fetch data dari Server...maka siapa saja bisa jadi pemenang-nya
// pakai Promise.race() jika masing-masing promise tidak terikat satu sama lain