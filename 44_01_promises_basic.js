/**
 * Promise = Janji ...sama seperti artinya, promise di Javascript
 * juga mengadopsi istilah yang sama....dimana sebuah script/statement
 * menjanjikan sesuatu, jika ditepati (ada hasilnya) maka panggil Callback
 * jika diingkari (error) panggill callback juga
 * 
 * Promise ini berguna banget untuk menyelesaikan masalah Callback Hell
 * 
 * Promise sudah bisa dipakai di browser-browser saat ini seperti
 * Chrome, FF, Safari, Edge...
 */

 let promise = new Promise(function(resolve, reject) {
  // some code
 });

 console.log(promise); // [object Promise] { ... }


 // dimana resolve dan reject adalah function callback

 let user = new Promise(function(resolve, reject) {
   // misalnya melakukan Async call ke server
   let fetch = fetchUser('/user/20');
   if (fetch) {
     resolve(fetch);
   } else {
     reject('Gagal load data');
   }
 });

 user.then(function(result) { // resolve callback
   console.log(result); // data user
 }, function(err) { // reject callback
   console.log(err); // Gagal load data
 });

 // kalao mau lebih jelas, user.then() diatas bisa kita remake sbb
 let resolve = function(result) {
  console.log(result); // data user
 };

 let reject = function(err) {
   console.log(err); // Gagal load data
 };

 user.then(resolve, reject);

/**
 * Promise terdiri dari 3 state, yaitu
 * 1. pending: tahap inisialisasi
 * 2. fulfilled: operasi success / complete
 * 3. rejected: eperasi gagal
 */

 let statePromise = new Promise(function(result, reject) {
    // pending state

    if (true) {
      resolve(); // fulfilled state
    } else {
      reject(); // rejected state
    }
 });

 /**
  * Promise static Methods ada 4
  *
  * Promise.all(), Promise.race(), Promise.reject(), Promise.resolve(); 
  */

  /**
   * Promis prototype Method ada 3
   * 
   * Promise.prototype.catch(onReject)  <--- catch error/rejection
   * Promise.prototype.then(onResolve, onReject) <-- handle fulfilled and rejected state
   * Promise.prototype.finally(onFinal) <-- biasanya call Promise yang lain
   */

   /**
    * Pada penulisan cllback  user.then(resolve, reject);
    * 
    * function then() ambil 2 argument, jika kita mau 1 argumen saja, kita bisa
    * pakai catch khusus untuk menghandle reject...
    *
    * lebih reccomended pakai catch(). karena lebih enak kode-nya...
    */

  // tanpa catch
  user.then(function(result) { 
    console.log(result);
  }, function(err) {
    console.log(err); 
  });

  // dengan catch
  user.then(function(result) {
    // handle result
  }).catch(function(err) {
    // handle error
  });

  // atau

  user.then(resolve)
      .catch(reject);


  /**
   * Kapan harus pakai Promise? ketika kita banyak menggunakan Async call
   * ke Server/ke Remote server atau mungkin untuk 
   * operasi Async lainnya yang membutuhkan delay seperti setTimeout()
   * atau untuk operasi yang time-consuming seperti manipulasi DOM
   * menulis/baca file di Node.JS
   */

  /**
   * Real-world example Promise
   * 
   * misal kita mau load Image dari situs lain
   */


  const loadImage = function(url) {
    return new Promise((resolve, reject) => {
      // Asynx Call 
      let request = new XMLHttpRequest();
      request.open('GET', url);
      request.responseType = 'base64';
      request.onload = () => {
        if (request.status === 200) {
          resolve(request.response);
        }
      };
      request.onerror = () => {
        reject(Error('Gagal load image.' + request.statusText));
      };

      request.send();
    });
  };

  loadImage('https://example.com/images/img.png')
    .then((result) => {
      console.log(result); // base64 image
      // atau bisa append ke html tag
    }, (err) => {
      console.log(err);
    });
