/**
 * Currying..adalah metoda apopuler di kalangan Javascript developer
 * untuk membuat function dimana argument function tersebut
 * di translate menjadi stand-alone function 
 * 
 * function(a, b) --> function(a)(b)
 */

 // di Javascript kita sah-sah saja membuat fungsi begini
 function add() {
    return function(a) {
      return function(b) {
        return a + b;
      }
    }
  }
  
  let test = add();
  let result = test(2)(3); // a + b -> 2 + 3
  console.log(resul); // 5

  // function diatas itu sama aja kaya function add(a, b) { return a + b }
  // cuma kita buat gaya dikit biar lebih keriting, agar membentuk format
  // function(a)(b)
  //
  // Currying bisa jalan karena Javascript itu support Closure
  // lihat file closure.js

  /**
   * Contoh lain: kita ingin membuat fungsi untuk greeting seseorang
   *  dengan format: {greet}, {title}, {name}
   * 
   */
  function greeting(greet) {
    return function(title) {
      return function(name) {
        return greet + title + name;
      }
    }
  }

  let greetBudi = greetBudi('Haloo')(' Mr. ')('Budi');
  console.log(greeting);  // Haloo Mr. Budi

  // bisa juga kita pakai seperti ini

  let greet = greeting('Dear, '); 

  let budi = greet('Mr.')('Budi'); // Dear, Mr.Budi
  let agus = greet('Mr.')('Agus'); // Dear, Mr.Agus
  let nina = greet('Mrs.')('Nina'); // Dear, Mrs.Nina
  // buat sebanyak mungkin, bebasss

  // bisa juga di pakai begini...lebih enak untuk Pemisahan objek

  let greetCowok = greeting('Hello, ')('Mr. '); 

  let dedi = greetCowok('Dedi'); // Hello, Mr.Dedi
  let ujang= greetCowok('Ujang'); // Hello, Mr.Ujang

  let greetCewek = greeting('Hello, ')('Mrs. '); 

  let siska = greetCewek('Siska'); // Hello, Mrs.Siska
  let lili = greetCewek('Lili'); // Hello, Mrs.Lili

  /**
   * Gimana menarik kan? cara diatas lebih flexible dibanding kita pakei function biasa
   * 
   */
  function greeting_biasa(greet, title, name); {
    return greet + title + name;
  }

  greeting_biasa('Hello ', 'Mr.', 'Agus'); // Hello Mr.Agus
  greeting_biasa('Hello ', 'Mr.', 'Budi'); // Hello Mr.Budi
  greeting_biasa('Hello ', 'Mr.', 'Dedi'); // Hello Mr.Dedi

  // lihat diatas, kita mesti berulang-ulang panggil greeting_biasa
  // ditambah paramater nya berulang-ulang juga. jadi kurang flexible

  /**
   * Tapi currying bisa jadi kurang flexible, karena seperti contoh diatas , 
   * banyaknya function kita tentukan sendiri..misal kalo mau buat format begini
   * function(a)(b), berarti buat 2 function kedalam
   * function(a)(b)(c), berarti buat 3 function kedalam dst...
   */

  // format function(a)(b)

  function contoh(a) {
    return function (b) {
        // ...
    }
  }

  contoh(a)(b);
 
  // format function(a)(b)(c)

  function contoh2(a) {
    return function(b) {
        return function(c) {
            // ...
        }
    }
  }

  contoh(a)(b)(c);

  /**
   * capek kan kalo kita terus-menerus nested-kan function nya...
   * kita maunya dinamis...berapapun argumen nya...
   * 
   * function(a)(b)(..n)
   * 
   * gimana caranya?
   */

   function makeCurry(uncurried) {
       let params = Array.prototype.slice.call(arguments, 1);
       return function() {
           return uncurried.apply(this, params.concat(
             Array.prototype.slice.call(arguments, 0)
           ));
       }
   }
   
   // buat uncurried function, silahkan buat paramater
   // sebanyak banyaknya, nti semua akan di convert jadi single function (curry) masing-masing
   // dan gak perlu lagi buat nested function 
   let greeting = function(greet, title, education, name) {
     return greet + title + education + name;
   };

   let greetHello = makeCurry(greeting, "Hello", "Mr.", 'S.kom');
   console.log(greetHello('Budi')); // Hello Mr.Budi S.kom

   let greetHello2 = makeCurry(greeting, "Hello", "Mr.");
   console.log(greetHello2('S.kom', 'Budi')); // Hello Mr.Budi S.kom

   /**
    * real-world Example. Misal kita ingin membuat fungsi untuk Loggin system
    */
    function logging(date, type, message) {
      return date + ':' + '['+type+']' + ' -> ' + message;
    }

    let normalLog = makeCurry(logging);

    console.log(normalLog(new Date(), 'normal', 'Some normal message'));
    // output: "Mon Aug 06 2018 16:17:55 GMT+0700 (WIB):[DEBUG] -> Some debug message"

    let debugLog = makeCurry(logging, new Date(), 'DEBUG');
    console.log(debugLog('Some debug log'));

    // kelemahan currying dengan helper diatas (makeCurry), adalah tidak bisa dipanggil
    // begini: debugLog(date)(type)(message)
    // dia akan Error. Jadi kita mesti tweak lagi helper function makeCurry nya.
    // 
    //nah  di dunia nyata karena banyak orang malas buat curry function yang
    // mantap...mereka pilih pake library seperti lodash atau ramda
    // dengan bantuan library lodash misalnya, fungsi diatas bisa kita buat seperti ini

    let log = _.curry(logging);

    log(new date(), 'DEBUG', 'Some debug message'); 
   // bisa juga di panggil begini
   log(new date())('DEBUG')('some debug message');

   /**
    * membuat helper function jadi bener-bener Curry.
    * Curry yang advance biasanya bisa di kawinkan dengan Partial Application
    * 
    * 1. normal call format  --> function(a, b, c);
    * 2. curry-partial call format --> function(a)(b, c)
    * 3. fully curry call format --> function(a)(b)(c)
    *
    * helper curry yang mantap itu harus bisa memenuhi ke-3 format diatas
    */
  function curry(fn) {
    return function curried(...args)  { // pakei spread operator
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      } else {
        return function(...args2) {
          return curried.apply(this, args.concat(args2)); //recursive call
        }
      }
    }
  }

  // dengan helper baru diatas curry(fn), baru kita bisa tuh pake ke-3 format tadi

  let log = curry(logging);
  // normal call
  log('today', 'DEBUG', 'Some debug message'); 
  // partial curry call
  log('today')('DEBUG', 'Some debug message'); 
  // full curry call
  log('today')('DEBUG')('some debug message'); 

  let todayLog = log('today');
  todayLog('DEBUG', 'some debug message');
  todayLog('DEBUG')('some debug message');

  let yesterdayLog = log('yesterday');
  yesterdayLog('DEBUG', 'some debug message');
  yesterdayLog('DEBUG')('some debug message');

  let todayDebugLog = log('today', 'DEBUG'); // bisa juga log('today')('DEBUG')
  todayDebugLog('Some debug message');

  /**
   * Memahami Algoritma-nya
   * 
   * silahkan jalankan kode dibawah ini di browser atau di jsbin.com
   * 
   */

function curry(fn) {
  return function curried(...args)  {
    console.log('args1: ' + args);
    console.log("length curry vs length original: " + args.length + ':' +fn.length)
    /**
     * Jika jumlah argument function yang mau di curry >= original function
     * langsung aja panggil/apply original function nya
     */
    if (args.length >= fn.length) { // step #1
      console.log('masuk step #1');     
      return fn.apply(this, args);
    } else {
      /**
       * Jika lebih sedikit, kita proses secara recursif
       * untuk meng-gabung/merge semua argument
       * sampai jumlahnya sama dengan original functionnya
       * dan akhirnya akan kembali masuk ke step #1
       */
      console.log('masuk step #2..');
      return function(...args2) { // step #2
          console.log('args2: ' + args2)
          console.log('final argumen step args1+args2: ' + args.concat(args2));
          // gabung argument menjadi [ar1, ar2, ...arn]
          // setelah argument di-merge, kita kembalikan/pass lagi ke function curried() diatas
          return curried.apply(this, args.concat(args2)); 
        //recursive call
      }
    }
  }
}

function logging(date, type, message) {
  return date + ':' + '['+type+']' + ' -> ' + message;
}


let normalLog = curry(logging); // kirim original function

let res = normalLog('today', 'debug', 'message 1');
console.log(res);
console.log('-------------------end normal call-------------------------');

let res2 = normalLog('today')('debug', 'message 1');
console.log(res2);
console.log('---------------------end partial call----------------------');

let res3 = normalLog('today')('debug')('message 1');
console.log(res3);
console.log('--------------------end of full-----------------------------');

// hasilnya sebagai berikut

/*
"args1: today,debug,message 1"
"length curry vs length original: 3:3"
"masuk step #1"
"today:[debug] -> message 1"
"-------------------end normal call-------------------------"

"args1: today"
"length curry vs length original: 1:3"
"masuk step #2.."
"args2: debug,message 1"
"final argumen step args1+args2: today,debug,message 1"
"args1: today,debug,message 1"
"length curry vs length original: 3:3"
"masuk step #1"
"today:[debug] -> message 1"
"---------------------end partial call----------------------"

"args1: today"
"length curry vs length original: 1:3"
"masuk step #2.."
"args2: debug"
"final argumen step args1+args2: today,debug"
"args1: today,debug"
"length curry vs length original: 2:3"
"masuk step #2.."
"args2: message 1"
"final argumen step args1+args2: today,debug,message 1"
"args1: today,debug,message 1"
"length curry vs length original: 3:3"
"masuk step #1"
"today:[debug] -> message 1"
"--------------------end of full-----------------------------"*/

// males jelasinya 
// intinya...currying itu gimana caranya semua argumen yang dikirim akan 
// menghasilkan function masing-masing
// function(a, b, c)
// akan menghasilkan
function curry(fn) {
  return function(a) {
    return function(b) {
      return function(c) {
        // final call
      }
    }
  }
}