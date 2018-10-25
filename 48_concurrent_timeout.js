/**
* Delay eksekusi script biasa
*/

setTimeout(function() {
  console.log('masuk 1');
}, 1000);



/**
* Seringkali kita menggunakan Delay untuk mengeksekusi event 
* misalnya saat keyup event. nah untuk Event keyUp, keyPress timeout di javascript itu
* tidak bisa nge-hold dulu sampai user berhenti nginput...akibatnya klo kita panggil ajax,
* maka ajax nya akan berkali-kali dipanggil
*
* Solusinya adalah menambahkan flag timer yang bisa di clear
**/

// kasus
function fakeAjax(val) {
  console.log(val);
}

var input = document.getElementById("input");
input.addEventListener('keyup', function(e) {
  var val = e.target.value;
  setTimeout(function() {
     fakeAjax(val);
  }, 2000);
});

/**
* tatkala user ngetik "window" di textbox, meskipun sdh pake setTimeout, 
* si fakeAjax ajax tetp kepanggil berkali-kali dengn value sbb 

fakeAjax("wi")
fakeAjax("wi")
fakeAjax("win")
fakeAjax("wind")
fakeAjax("window")
fakeAjax("window")

ini jadi berkali-kali manggil ke server, buruk buat performance. 

Solusinya:
*/

function fakeAjax(val) {
  console.log(val);
}

function fakeAjax2(val) {
  console.log(val);
}

const delay = (function() {
  let timer = 0;
  return function(callback, ms){
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

const input = document.getElementById("input");
input.addEventListener('keyup', function(e) {
  var val = e.target.value;
  delay(function() {
     fakeAjax(val);
  }, 2000);
});

/**
* Kelemahan solusi diatas adalah kita gak bisa nambahin function delay lainnya di dalam satu event,
* padahal seringkali dalam satu event kita butuh manggil banyak fungsi dengan delay waktu yang beda-beda
* 
* nah solusi diatas tdk bekerja dengan situasi seperti ini:
*/
input.addEventListener('keyup', function(e) {
  let val = e.target.value;
  delay(function() {
     console.log('masuk 1');
     fakeAjax(val);
  }, 2000);
  
  delay(function() {
     console.log('masuk 2');
     fakeAjax2(val);
  }, 3000);
});

/**
* Dimana event diatas hanya akan menghasilkan output pada satu delay call saja
* alias hanya satu function saja yg akan kepanggil
*
* solusinya adalah membuat timeoutnya menjadi concurrent
*/
const delay = (function() {
  let timers = {};
  // @param label harus uniq
  return function (callback, ms, label) {
      let label = label || 'default'; // this line is the key
      clearTimeout(timers[label] || 0);
      timers[label] = setTimeout(callback, ms);
  };
})();

// maka sekarang kita bisa pakai di situasi seperti tadi

input.addEventListener('keyup', function(e) {
  let val = e.target.value;
  delay(function() {
     console.log('masuk 1');
     fakeAjax(val);
  }, 2000, '0'); // label 0
  
  delay(function() {
     console.log('masuk 2');
     fakeAjax2(val);
  }, 3000, '1'); // label 1
});
