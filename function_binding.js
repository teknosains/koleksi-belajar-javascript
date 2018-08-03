/**
 * Function object menyediakan prototype methof .bind()
 * 
 * yang bisa digunakan untuk "mengikat" suatu context/object
 * yang berada diluar local scope function itu
 */

 let user = {
     name: "Budi",
     age: 20
 };

 function player() {
    console.log("Player name:" + this.name); // undefined
 }

 player();

 // fungsi player() mencoba memanggil properties (pake this) yang dia gk punya
 // alias property milik orang lain, gmn caranya biar bisa akses?
 // pake bind()

 let usr = player.bind(user); 

 // bahasanya: si variable usr meminta fungsi player buat mengikat user
 // bind akan mengikat object lain dan di assign ke this
 // jadi this = {}
 // setelah pakai bind(), dibelakang, fungsi player sekarang akan seperti ini
 /** 
  * function player() {
  *    // this = user; // secara implicit
  *    console.log("Player name:" + this.name); // Budi
  *  }
  */
 
  // kita panggil
  usr(); // budi