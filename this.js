/**
 * keyword this di Javascript, buat apa ?
 * Keyword this sebenarnya adalah property dari sebuat class/Constructor function
 * 
 * this juga sebenarnya adalah sebuah Object. saat kita buat Constructor seperti ini
 */

 function Human(name, age) {
    this.name = name;
    this.age = age;
 }

 /**
  * di internal javascript, ia sebenanrya saat kita panggil/instanisasi
  */

  let budi = new Human("Budi", 40);

  // dibelakang dia buatin/define implicit object untuk this
  // dia juga buatin implisit return untuk this

  function Human(name, age) {
    // this = {};
    //..
    this.name = name;
    this.age = age;
    //..
    // return this;
  }


  // jika diluar local context, this merujuk ke Global Window Object
  // coba aja console.log(this) di browser, 