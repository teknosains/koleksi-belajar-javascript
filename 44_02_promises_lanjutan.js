/**
 * Promise bisa lebih dari satu...karena sering kali kita memanggil
 * banyak Asynron action secara bersamaan
 * 
 */

 function call() {
   callAjax1();
   callAjax2();
   callAjax3();
 }

 /**
  *  atau seringkali juga kita buat Aync call berturut-turut setelah Async call sblmnya
  * selesai
  */
  function call() {
    callAjax1() {
      callAjax2() {
        callAjax3() {
          callAjaxN() {
            ///....callback hell
          }
        }
      }
    }
  }

  /**
   * Untuk mengatasi ini Promise menyediakan "Promise Chaining", 
   * 
   */
  new Promise()
    .then()
    .then()
    .then(); // terus aja...seperlunya

  /**
   * Ini sangat berguna klau kita mau meneruskan proses success dari satu .then()
   * ke then() lainnya
   */
  // in ES6
 new Promise((resolve, reject) => {
   setTimeout(() => {
    resolve(20); 
    // 20 ini akan di teruskan ke then berikutnya
   }, 1000);
 })
 .then((result) => {
   return result + 10; // 20 + 10 =  30
 })
 .then((result) => {
   console.log(result + 5); // 30 + 5 <-- final output
 })
 .catch((error) => {
  console.log(error);
 });

 // bisa juga return nya another Promise
 new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20); 
    // 20 ini akan di teruskan ke then berikutnya
    }, 1000);
  })
  .then((result) => {
    return new Promise((resolve, reject) => { 
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then((result) => {
    console.log(result + 5); // final output will be here
  })
  .catch((error) => {
    console.log(error);
  });

  /**
   * Real-world Example
   */
  const fetchUser = new Promise((resolve, reject) => {
    // some ajax request ke Server
    let user = fetchUserById('/fetch/user/20');
    if (user) {
      resolve(user);
    } else {
      reject(Error('Gagal load user'));
    }
  }); 

  fetchUser
    .then((result) => {
      // proses to JSON
      return JSON.stringify(result);
    })
    .then((result2) => {
      console.log(result2); // final output
    })
    .catch((err) => {
      console.log(err);
    });

/**
 * Javascript terbaru sudah Support natif method fetch()
 * untuk melakukan fetching resource ke Server.
 * 
 * method fetch() by default adalah sebuah Promise
 * 
 * function ini masih baru dan belum semua browser support
 * 
 * jadi kita sebenernya nanti gk perlu lagi $.ajax() jQuery
 * atau bahkan membuat new XMLHttpRequest() secara explisit
 * 
 * tinggal pake fetch() aja
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
 */
/**
 * Real-world Example, (silahkan test di browser) atau di jsbin.com
 * 
 * kita akan ambil random user dari situs randomuser.me
 */
const userApi = {
  url: '',
  setUrl (url) {
    this.url = url;
  },
  fetchUsers () {
    fetch(this.url)
    .then((response) => {
      return response.json(); // stream ke json dulu
    })
    .then((response) => { // disini ambil nama, email n gender saja
      let userData = response.results; // ambil data
      let users = [];
      if (userData.length > 0) {
        for (let item of userData) {
          users.push({
            name: item.name.first + ' ' + item.name.last,
            email: item.email,
            gender: item.gender
          });
        }
      }

      return users;
    })
    .then((response) => { // disini final output
      console.log(response);
    })
    .catch((err) => {
      console.log(err.stack);
    });
  }
};

userApi.setUrl('https://randomuser.me/api/?results=2');
userApi.fetchUsers();
// output
/*
[
  {
    email: "leah.øynes@example.com",
    gender: "female",
    name: "leah øynes"
  },
  {
    email: "shelly.morrison@example.com",
    gender: "female",
    name: "shelly morrison"
  }
]
*/

// kamu bisa coba kode diatas di link ini: https://jsbin.com/mehubagexu/edit?js,console

/**
 * Nested Promise...tatkala kita butuh async call lain didalam promoise
 * 
 */
fetch('url/user/20')
  .then((response1) => {
    // read ke json
    return response1.json();
  })
  .then((response2) => {
    // fetch lagi ke server
    let repo_id = response2.repo_id;
    return fetch('url/user/20/repo/' + repo_id); // ceritanya mau fetch repo. ini promise lagi
  })
  .then((response3) => {
    return response3.json(); // return repo
  })
  .then((response4) => {
    // proses repo, pakai Promise baru
    // misalkan tampilkan sebagai html list
    return new Promise((resolve, reject) => {
      let ul = '<ul>';
      response4.forEach((repo) => {
        ul += '<li>'+repo+'</li>';
      });
      ul += '</ul>';
      
      // render ke html
      $('jquery-elem').html(ul);

      resolve('done');

    });
  })
  .then((response4) => {
    console.log(response4); // done
  })
  .catch((err) => {
    console.log(err.stack);
  });


  /**
   * Membuat promise chaining diatas lebih bersih
   */

  function loadUser(url) {
    return fetch(url)
            .then(response => response.json());
  }

  function loadRepo(user_id, repo_id) {
    return fetchUser(`url/user/${user_id}/repo/${repo_id}`)
            .then((response) => response.json());
  }

  function renderHtml(repo) {
    return new Promise((resolve, reject) => {
      let ul = '<ul>';
      repo.forEach((item) => {
        ul += '<li>'+item+'</li>';
      });
      ul += '</ul>';
      
      // render ke html
      $('jquery-elem').html(ul);

      resolve('done');

    });
  }

  // put it together
  loadUser('url/user/20')
    .then(user => loadRepo(user.user_id, user.repo_id))
    .then(repo => renderHtml(repo))
    .then(resp => console.log(resp))
    .catch(err => console.log(err));


/**
 * Promise Error handling
 * 
 * Promise secara implicit menyediakan mekanisme try..catch 
 * untuk menangkap Error...dibagian manapun Error itu terjadi, maka akan dianggap sebagai
 * Rejection
 */
new Promise(function(resolve, reject) {
  throw new Error('Error occured'); // ini dianggap sebagai rejection dan akan di catch
  // sama saja dengan kita menulis gini
  // reject(new Error('Error occured'));
})
.then(function(response) {
  throw new Error('Error occured'); // ini juga dianggap rejection, dan akan di catch di catch terdekat
})
.catch(function(err) {
  console.log(err.message); // Error occured
});

// contoh
new Promise(function(resolve, reject) {
  resolve("ok");
}).then(function(result) {
  blabla(); //function ngasal...
}).catch(function(err) {
  // ReferenceError: blabla is not defined
}); 

/**
 * saat membuat Promise, pastikan kita handle Error dengan .catch()
 * Jika tidak maka Error nya gk ter-handle dan tentu saja bisa membawa bencana kemudian hari
 * 
 * Jangan melempar Error dalam Async call, karena nanti Error nya gk ke handle
 */

 new Promise(function(resolve, reject) {
  setTimeout(function() {
    throw new Error('Error nih'); /// ini gak bakal ke-handle .catch() karena dia dieksekusi belakangan
  }, 1000);
 })
 .then(function(response) {

 })
 .catch(function(err) {
  console.log('Ada error: ' + err.stack); // gk masuk sini
 });


 // gimana solusinya diatas? pake reject cllback
 new Promise(function(resolve, reject) {
  setTimeout(function() {
   reject(new Error('Error nih'));
  }, 1000);
 })
 .then(function(response) {

 })
 .catch(function(err) {
  console.log('Ada error: ' + err.stack); // Error nih
 });


 // jika keukeuh gak mau pakai catch(), pastikan rejection/error nya di Catch di then() 
 // dalam argumen ke-2 nya
 new Promise(function(resolve, reject) {
    // 
  })
  .then(function(onFullfiled) {
    // handle resolve
  }, function(onRejected) {
    // handle Error/rejecttion
  });


 /**
  * Promise is an Object, a Class...bisa kita perlakukan sebagai first-class Object
  * sama seperti Function dijavascript pada umumnya
  * dan kita bisa tulis seperti saat menulis object/method prototype pada suatu Class/Function
  */

  let promise = new Promise(function(resolve, reject) {

  });
 
  promise.then(function(response) {

  });

  promise.catch(function(err) {

  });

  // tapi kelemahan pemangggilan dgn cara diatas adalah...ia hanya bisa 
  // ada 1 then() dan satu catch(), karena penulisan seperti itu berarto
  // then() nya adalah independen..atau masing-masing
  let promise = new Promise(function(resolve, reject) {
      resolve('Done');
  });
 
  promise.then(function(response) {
      return response; //<-- in harusnya diteruskan ke then() dibawah, tapi gak bisa
  });

  promise.then(function(response) {
    // karena then() ini independen alias inherit langsung dari Promise -nya
  });

  promise.catch(function(err) {

  });

  // kasarnya...ke-2 then() diatas itu masing-masing...gk bisa saling kenal satu sama lain
  // makanya klo mau saling kenal....harus begini nulisnya
  let promise = new Promise(function(resolve, reject) {
    resolve('Done');
  });

  promise.then(function(response) {

  })
  .then(function(response2) {

  })
  .catch(function(err) {

  });
