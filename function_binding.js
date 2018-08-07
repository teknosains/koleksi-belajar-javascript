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

  // contoh lain
let user = {
    name: 'budi',
    age: 20,
    sayName: function() {
        console.log(this);
        return 'Name: ' + this.name + ', Age: ' + this.age;
    }
}

// kalao kita panggil seperti ini  cara #1
let say = user.sayName();
console.log(say); // "Name: budi, Age: 20"

// dia valid karena function sayName() akan di eksekusi di local scope-nya

// tapi kalau kita panggil seperti ini cara #2
let say2 = user.sayName; 
// ini artinya sayName() akan dieksekusi di luar scopenya atau dalam contoh ini dia
// akan di panggil di Global scope, makanya kalao kita console

console.log(say()); // "Name: undefined , Age: undefined"

// itu karena "this" nya sekarang milik global object window, karena dipanggil diglobal scope
// sementara kita maunya "this"-nya itu tetep milik si sayName()

// gimana caranya biar valid ?? yaitu kita bisa
// pake cara #1 sebelumnya, atau pakai bantuan bind()

// pake bind()
let boundSay = say2.bind(user);
console.log(boundSay()); // "Name: budi, Age: 20"