/**
 * Ada banyak cara buat nge-Loop sesuatu dijavascript
 * 
 * ada:
 * - while
 * - do while
 * - for 
 * - for-in
 * - for-of
 */

 /**
  * for
  * format: for(<init>;<condition>;<update>)
  -------------------------------
  */
  for (let i = 1; i < 5; i++) {
    console.log(i);  // 1 2 3 4
  }
  
  /**
   * di internal javascript saat eksekusi Loop diatas nilai dari i sebenarnya sampai 5
   * tapi karena ada kondisi i < 5 <=> 5 < 5 <=> false, maka loop-nya berhenti, jadinya
   * yang di-output-kan i cuma sampai 4
   */
  
   // kita bisa buktikan dengan pakai "var"
  for (var i = 1; i < 5; i++) {
    console.log(i);  // 1 2 3 4
  }

  console.log(i); // 5 <--- lihat kan sbnrnya 1 itu sampe 5, 

  /**
   * FOR-IN
   * 
   * berguna untuk nge-Loop Object
   */

  let user = {
    name: "agus",
    age: 30,
    sayName: function() {
      return 'My name is ' + this.name;
    }
  };

  for (let key in user) {
    console.log(key); // name, age
    console.log(user[key]); // agus, 30, function() {...}
  }

  /**
   * FOR-OF
   * 
   * berguna untuk nge-loop Array
   */
  let nilai = [1,2,3,4];

  for (let x of nilai) {
    console.log(x); // 1, 2, 3, 4
  }