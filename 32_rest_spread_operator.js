/**
 * Rest paramater dan Spread operator itu fitur yang sangat membantu di Javascript
 */

 // rest paramater ... (triple dot) membuat sebuah fungsi bisa punya sedikit paramater
 // tapi sebenarnya value nya banyak 
 // contoh paramater ...params, artinya bisa menampung banyak paramater value sekaligus
 // karena value nya masing-masing akan ditampung dalam array
 // 
 // intinya: rest ... paramater mengubah list menjadi array
 // (1, 2, 3) => [1, 2, 3]

 function add(a, b) {
     return a + b;
 }

 add(1, 3); // valid 1 + 3 = 4
 add(1, 3, 4, 5); //valid tapi 4, 5 tidak dieksekusi, artinya butuh paramater tambahan

 function add2(a, b, c, d) {
     return a + b + c + d;
 }

 // baru dah bisa 
 add(1, 3, 4, 5);

 // nah kalau gak mau bikin banyak paramater, kita pake ..rest operator 

 function tambah(...params) {
    // ..params tipenya Array, maka value nya bisa diakses begini
    /**
    console.log(params);
    console.log(params[0]);
    console.log(params[1]);
    */

    let sum = 0;
    for (let val of params) {
        sum += val;
    }

    return sum;
 }

 let a = tambah(1, 2);
 let b = tambah(1, 2, 3, 4, 5, 6);
 
 console.log(b);

 /**
  * lihat tuh, banyak paramater sekaligus namun cukup ditampung oleh satu param (...params)
  */

  /**
   * jika paramaternya lebih dari satu, 
   * rest operator Wajib di set sebagai parameter terakhir, karena gak make sense kalo
   * di taro ditengah-tengah dan pasti error
   * 
   * function(arg1, arg2, ...argn)
   */

   function kali(a, v, ...c) {
        if (!c) {
            return a * b;
        }
        
        let val = 1;
        for (let v of c) {
            val *= v;
        }

        return a * b * val;
   }

   let o = kali(2, 3);
   let p = kali(2, 3, 4, 5, 6); // a, b, c -> (2, 3, (4, 5, 6))

   console.log(o);
   console.log(p);

   /**
    * Catatan: ...rest paramater tidak dihitung dalam Function.length
    */
    function rest(a, b, ...c) {

    }
    rest.length; // 2 ...hanya ada 2 paramater... yang ...c gak digitung

   /**
    * Spread Operator  
    * 
    * spread operator juga pakai ... (triple dot), sama kayak rest paramater
    * bedanya, kebalikan dari rest, spread operator mengubah array menjadi list biasa
    * 
    * [1, 2, 3] => (1, 2, 3)
    */

    //contoh
    let arr = [1, 2, 3];
    let findMax = Math.max(arr); // NaN

    // ini karena Math.max() hanya nerima list biasa, makanya arr[]
    // mesti diubah ke list, jadinya

    let arr2 = [1, 2, 3];
    let findMax2 = Math.max(...arr); // Math.max(1, 2, 3)

    console.log(findMax2);

    // bisa juga multiple array
    let arr3 = [4, 5, 6];
    let findMax3 = Math.max(...arr2, ...arr3); // Math.max(1, 2, 3, 4, 5, 6)

    //bisa juga kombinasi dengan value biasa

    let findMax4 = Math.max(1, 2, 3, ...arr3); // // Math.max(1, 2, 3, 4, 5, 6)

    // kampret nya spread operator juga bisa dipakai buat nge-Merge array

    let x = [1, 2, 3];
    let y = [4, 5, 6];

    let z = [...x, ...y]; // [ 1, 2, 3, 4, 5, 6 ]

    console.log(z);

    // masih banyak lagi kegunaan lain dari ...spread operator ini,
    // Oiyaa...karena ...spread opreator secara internal menggunakan iterator, maka
    // semua iterable object bisa pakai ..spread

    let nama = "Budi";
   
    console.log(...nama); // B u d i
    console.log([...nama]); // [ 'B', 'u', 'd', 'i' ]

    // per di catat bahwa ..spread operator hanya boleh di-passing
    // sebagai paramater sebuah fungsi atau array
    let n = [...nama]; // valid
    console.log(...nama); // valid
    let m = function(...nama) { // valid

    };

    // let k = ...nama; // Error: Unexpected token ...

    // descturcture array dengan rest operator

    const source = [1,2,3,4,5,6,7,8,9,10];
    const [a, b, ...c];

    console.log(a); // 1
    console.log(b); // 2
    console.log(c); // [3,4,5,6,7,8,9,10]