/**
 * Async Await adalah fitur baru Javascript yang dibangun diatas
 * Promise.
 * 
 * Async Await juga sebenarnya adalah syntatic sugar dari Promise. Dimana
 * kita semakin dimudahkan dalam menulis kode nya. Async Await juga membuat Promise
 * terlihat lebih bergaya "syncron" dibanding "asyncron", artinya lebih enak dibaca dan
 * dimengerti
 * 
 * Async function adalah function yang me-return Promise
 */

 async function sayHello() {
   return 'hello';
 }

 // itu sama aja dengan

 function sayHello() {
   return Promise(function(resolve, reject) {
    resolve('hello');
   });
 }

 /**
  * Await adalah syntax yang digunakan untuk menunggu sebuah promise
  * sampai selesai dan memberikan hasil baik itu hasilnya resolve atau reject.
  * 
  * Await hanya boleh berada didalam block Async function
  */

  async function getUser() {
    let user = await fetchUser('/api/user'); // fetchUser adalah promise juga
    // saat sudah resolve, maka hasilnya akan di-assign ke variable user
    return user;
  }

  // karena getUser() sekarang adalah Promise, maka bisa kita panggil seperti
  // promise pada Umumnya

  getUser()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(err) {
    console.log(err);
  });

  // Mari kita ubah dari Promise biasa menjadi Async-Await

  function getUserArtikel() {
    // fetch ke server user by username
    fetch('api/user/myusername')
      .then(function(response1) {
        // read ke json
        return response1.json();
      })
      .then(function(response2) {
        // fetch lagi ke server, untuk ambil artikel by id
        let user_id = response2.user_id;
        return fetch('api/user/myusername/artikel/' + user_id);
      })
      .then(function(response3) {
        return response3.json(); // return list aretikel
      })
      .then(function(response4) {
        console.log(response4); 
        // display list artikel disini
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  // meskipun sudah pakai Promise...yang notabene lebih baik dari Callback hell,
  // tetep aja malesin kan kalo nulis nya seperti diatas...
  // nah kita bisa kode yang lebih rapih, terlihat seperti kode syncronous biasa

async function getUserArtikel() {
  // fetch ke server user by username
  let fetchUser = await fetch('url/user/myusername');
  let user = await fetchUser.json();

  // fetch artikel by user id
  let fetchArtikel = await fetch('api/user/myusername/artikel/' + user.user_id);
  let artikel = await fetchArtikel.json();

  // display artikel disini atau bisa di return
  console.log(artikel);

  return artikel;
}

getUserArtikel().then(function(result) {
  console.log(result);
});

// gimana? terlihat syncronous kan?

/**
 * Class method pada ES6 bisa juga berupa async function
 */

class User {
  constructor(username) {
    this.username = username;
  }
  async fetchUser() {
    let response = await fetch('/api/user/' + this.username);
    return response.json();
  }
}

let obj = new User('myusername');

obj.fetchUser()
  .then(function(result) {
    //
  })
  .catch(function(err) {
    //
  });

/**
 * Error Handling pada Async-Await
 * 
 * Kita bisa mengandalkan .catch() di ujung promise chaining
 * atau kita bisa handle terkebih dahulu sebelum me-return hasilnya
 * 
 * Jadi baris ini
 */
let response = await fetch('/api/user/' + this.username);
let user = response.json();
// kita masukan kedalam block try catch sbb
try {
  let response = await fetch('/api/user/' + this.username);
  let user = response.json();
  return { status: true, data: user };
} catch (err) {
  // logging error-nya dulu ke suatu tempat
  // someLogging.log(err)
  // atau kita return bisa kita handle belakangan
  return { status: false, error: err };
}

// dengan try catch seperti diatas...kita tidak usah pake .catch lagi
obj.fetchUser()
  .then(function(response) {
    // response akan berisi output success
    // atau error
    if (response.status) {
      // success
      console.log(response.data);
    } else {
      // on Error
      if (!response instanceof Error) {
        console.log(response);
      } else {
        console.log(response.message);
        console.log(response.stack);
      }
    }
  });