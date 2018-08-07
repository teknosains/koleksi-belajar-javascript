/**
 * Setter and Getter adalah default function yang di sediakan 
 * javascript pada Object.
 * 
 * jadi pada object, kita bisa memasukan Data property dan kita bisa
 * juga memasukan accossor property. 
 * 
 * Accessor property inilah yang disebut Setter n getter
 */

 let user = {
     firstname: "Agus", // data property
     lastname: "Setiadi", // data property
     get fullName() { // accessor property
        return this.firstname + ' ' + this.lastname
     },
     set fullName(value) {
        let fname = value.split(' '); 
        this.firstname = fname[0];
        this.lastname = fname[1];

        // diatas bisa di-single-line kan
        // [this.firstname, this.lastname] = value.split(' ');
     }
 };

 user.fullName = "Dedi Pekok"; // setter
 // awas ! jangan panggil begini user.setFullName("Dedi Pekok");
 // karena ini bukan function biasa,

 console.log(user.fullName); //getter

 /**
  * lihat bahwa setter getter memungkin kita buat panggil bukan dengan function
  * semacam ini
  */
  user.fullName(); // Error

  // tapi cukup
  user.fullName; //valid...karena di internal, di javascript sdh prosesin buat kita

  /**
   * Menggunakan defineproperty & getter untuk menambahkan property baru
   * 
   * misal kita punya object berikut
   */
  let mahasiswa = {
      name: "Budi",
      ipk: 3.0
  };

  Object.defineProperty(mahasiswa, 'age', {
     get() {
        return 20;
     } 
  });

  //sekarang object mahasiswa punya property baru yaitu age
  mahasiswa.age; // 20

  // property baru age itu invisble bagi kita, makanya saat kita
  console.log(mahasiswa); // tidak ada property age, tapi ia ttp bisa diakses

  mahasiswa.age; // 20

  /**
   * Setter getter pada Class/Function Constructor
   */

   function Mahasiswa(name, ipk) {
       this.name = name;
       this.ipk = ipk;

       // bikin property baru pake cara gini
       Object.defineProperty(this, 'age', {
        get() {
           return 20;
        } 
     });
   }

   let budi = new Mahasiswa('Budi', 3.0);
   budi.name; // Budi
   budi.ipk; //3.0;
   budi.age; // 20 ...//lihat sekarang bisa diakses