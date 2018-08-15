/**
 * Saat kita menggunakan Promise, apalagi pakai library orang
 * kita tidak tau rejection nya itu simple value atau throw error
 */

let promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
     reject('Data gagal di Load');
   });
});

promise.then(function(response) {

})
.catch(function(err) {
  console.log(err.message); // <--- undefined, karena ternyata ini bukan Error object
});

// solusinya

let promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject(new Error('Gagal load data')); // akan masuk ke #1 dibawah
    reject('Gagal load data'); // akan masuk ke #2 dibawah
   });
});

promise.then(function(response) {

})
.catch(function(err) {
  if (err instanceof Error) {   // #1
    console.log(err.message);
  } else { // #2
    console.log(err);
  }
  
});