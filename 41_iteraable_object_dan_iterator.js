/**
 * di Javascript, banyak object yang punya behaviour seperti Array
 * dan secara default sudah dibuatkan (built-in) property khusus yaitu
 * 
 * Symbol.iterator
 */

 let arr = [1, 2, 3];
 console.dir(arr); 

 // check di browser console, kita akan menemukan yaitu Symbol.iterator. 
 // ini artinya object ini iterable, dalam koding sehari-hari kita memang
 // akan jarang pakai...karena iterator banyaknya digunain di sistem internal javascript
 // secara singkat, iterator adalah sebuah fitur yang membuat kita bisa memakai
 // loop for-of terjadap Object kita
 // makanya Array itu lebih enak kita iterate pakai for-of

 for (let val of arr) {
   console.log(val); // 1, 2, 3
 }

 // string juga iterable
 let str = "Budi";
 for (let val of str) {
  console.log(val); // B, u, d, i
 }

 /**
  * Symbol.iterator adalah spesial object yang disediakan Javascript agar kita
  * bisa membuat iterable object sendiri, 
  */

  let nilai = {
    min: 0,
    max: 10
  };

  // kita ingin membuat loop yang menghasilkan 0, 1, 2...10 dari non-iterable object diatas
  // agar bisa kita pakai loop for-of
  
  nilai[Symbol.iterator] = function() {
    let iterator = {
      current: this.min,
      last: this.max,
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ }; // wajib ada property done dan value
        } else {
          return { done: true };
        }
      }
    };

    return iterator;
  };

  // sekarang nilai sudah punya spesial property Symbol.iterator

  // dengan kode diatas, skrg kita bisa pakai for-of pada object nilai
  for (let val of nilai) {
    console.log(val); // 0, 1, 2, ...10
  }
